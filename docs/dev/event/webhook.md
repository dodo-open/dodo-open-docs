# WebHook

## 介绍

开放平台支持开发者通过`WebHook`进行事件订阅，当开发者将事件订阅的`连接模式`更改为`WebHook`时，开放平台会将各类事件消息统一推送至`WebHook`回调地址

## 切换模式

进入[开发者平台](https://doker.imdodo.com/)，点开需要配置的应用，进入`机器人管理` > `事件订阅`页面，将`连接模式`切换为`WebHook`

## 回调地址

:::tip
首先，回调地址必须严格按照[设计规范](#设计规范)来，不是说你随便填个地址就行！

其次，回调地址必须通过[地址校验](#地址校验)，才可成功保存！

最后，回调地址必须正确的进行[事件接收](#事件接收)，才可获得最终事件数据！
:::

### 设计规范

`WebHook`需要配置回调地址，其实就是一个普通的Api接口，该接口由开发者来提供

开发者提供的接口格式需要满足以下几点：

- 请求地址必须为http，不要包含特殊字符，其他都ok
- 请求方式为POST
- 请求内容为JSON，即请求头：application/json
- 返回内容为JSON，即返回头：application/json

#### 请求格式

|字段|类型|说明|
|:---------------|:-----|:---------------|
|clientId|string|机器人唯一标识|
|payload|string|事件消息，默认进行了AES加密，需要进行[数据解密](#数据解密)|

#### 返回格式

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|返回码，0：成功，-9999：失败|
|message|string|返回信息，一般作为错误信息|
|data|object|返回数据|

### 数据解密

- 从`开发者平台`我们可以获得`secretKey`
- 从回调地址中接收过来的数据，我们可以获得加密后的事件消息`payload`
- 我们将`secretKey`和`payload`十六进制字符串还原为字节数组，通过AES进行解密
- AES配置：keySize（密钥长度）= 256，mode（加密模式）= CBC，padding （填充方式）= PKCS7，iv（向量）= 固定的16个空字节
- 我们将解密后的事件消息定义为`message`，则示例伪代码为：
:::tip
伪代码无法直接运行，仅作逻辑参考，可百度获得具体语言的AES解密代码
:::

<CodeGroup>

  <CodeGroupItem title="示例伪代码" active>

```js
message = AESDecrypt(HexStringToBytes(payload), HexStringToBytes(secretKey), {
  keySize: 256,
  mode: "CBC",
  padding: "PKCS7",
  iv: new byte[16]
})
```

  </CodeGroupItem>

  <CodeGroupItem title="1 - Net" active>
  
```C#
using System;
using System.IO;
using System.Security.Cryptography;

namespace DoDo.Open.Sdk.Utils
{
    /// <summary>
    /// 开放秘密工具
    /// </summary>
    public class OpenSecretUtil
    {
        /// <summary>
        /// WebHook解密
        /// </summary>
        /// <param name="payload">加密消息</param>
        /// <param name="secretKey">解密密钥</param>
        /// <returns></returns>
        public static string WebHookDecrypt(string payload, string secretKey)
        {
            var aes = Aes.Create();

            aes.KeySize = 256;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            aes.IV = new byte[16];

            return AESDecrypt(HexStringToBytes(payload), HexStringToBytes(secretKey), aes);
        }

        /// <summary>
        /// AES解密
        /// </summary>
        /// <param name="payload">加密消息</param>
        /// <param name="secretKey">解密密钥</param>
        /// <param name="aes">AES配置</param>
        /// <returns></returns>
        private static string AESDecrypt(byte[] payload, byte[] secretKey, Aes aes)
        {
            aes.Key = secretKey;

            var decipher = aes.CreateDecryptor(aes.Key, aes.IV);

            using (var ms = new MemoryStream(payload))
            {
                string decrypted;

                using (var cs = new CryptoStream(ms, decipher, CryptoStreamMode.Read))
                {
                    using (var sr = new StreamReader(cs))
                    {
                        decrypted = sr.ReadToEnd();
                    }
                }

                return decrypted;
            }
        }

        /// <summary>
        /// 十六进制字符串转字节数组
        /// </summary>
        /// <param name="hexStr">十六进制字符串</param>
        /// <returns></returns>
        private static byte[] HexStringToBytes(string hexStr)
        {
            var bytes = new byte[hexStr.Length / 2];
            for (var x = 0; x < bytes.Length; x++)
            {
                var i = Convert.ToInt32(hexStr.Substring(x * 2, 2), 16);
                bytes[x] = (byte)i;
            }
            return bytes;
        }

    }
}
```

  </CodeGroupItem>

  <CodeGroupItem title="2 - JAVA" active>

```java
package dodo.open.sdk.utils;

import java.security.AlgorithmParameters;
import java.security.Security;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

/**
 * @Description 开放秘密工具
 */
public class OpenSecretUtil {

  /**
   * 初始化Provider，千万别漏了！
   */
  static {
    Security.addProvider(new BouncyCastleProvider());
  }

  /**
   * WebHook解密
   *
   * @param payload   加密消息
   * @param secretKey 解密密钥
   *
   * @return
   */
  public static String WebHookDecrypt(String payload, String secretKey) {
    try {
      return AESDecrypt(HexStringToBytes(payload), HexStringToBytes(secretKey), new byte[16], Cipher.getInstance("AES/CBC/PKCS7Padding"));
    } catch (Exception e) {
      return null;
    }
  }

  /**
   * AES加密
   *
   * @param payload   加密消息
   * @param secretKey 解密密钥
   * @param iv        IV向量
   * @param cipher    AES配置
   *
   * @return
   *
   * @throws Exception
   */
  private static String AESDecrypt(byte[] payload, byte[] secretKey, byte[] iv, Cipher cipher) throws Exception {
    var sKeySpec = new SecretKeySpec(secretKey, "AES");
    var params = AlgorithmParameters.getInstance("AES");
    params.init(new IvParameterSpec(iv));
    cipher.init(Cipher.DECRYPT_MODE, sKeySpec, params);
    var result = cipher.doFinal(payload);
    return new String(result);
  }

  /**
   * 十六进制字符串转字节数组
   *
   * @param hexStr 十六进制字符串
   *
   * @return
   */
  private static byte[] HexStringToBytes(String hexStr) throws Exception {
    return Hex.decodeHex(hexStr.toCharArray());
  }

}
```

  </CodeGroupItem>

</CodeGroup>


### 地址校验

开发者平台首次填写回调地址时，会进行地址校验，会向回调地址下发加密后的校验内容，请求示例：
```json
{
    "clientId": "10001",
    "payload": "xxxxxxxxxxxxx"
}
```
我们将`payload`进行[数据解密](#数据解密)，解密后校验内容示例：
```json
{
    "type": 2,
    "data": {
        "checkCode": "yyy"
    }
}
```
数据解密后，我们即可拿到`checkCode`，我们将其返回给开放平台，证明我们已经解密成功了，返回示例：
```json
{
    "status": 0,
    "message": "",
    "data": {
        "checkCode": "yyy"
    }
}
```


### 事件接收

回调地址校验通过后，开放平台会将加密后的事件消息统一推送至WebHook回调地址，请求示例：
```json
{
    "clientId": "10001",
    "payload": "IVAAAAA"
}
```
我们将`payload`进行[数据解密](#数据解密)，可获得各类[事件消息](./event.md)，解密后事件消息示例：
```json
{
    "type": 0,
    "data": {
        "eventBody": {
           ...... 
        },
        "eventId": "xxx",
        "eventType": "yyy",
        ......
    },
    "version": "v2"
}
```
数据解密后，我们即可获得各类[事件消息](./event.md)，可以针对事件消息进行相应的处理，可将处理结果返回给开放平台，返回示例：
:::tip
请尽量使用异步处理，务必在2s内返回处理结果，否则开放平台将会本次WebHook调用定义为失败！

失败后，开放平台会将请求加入重试队列，重试间隔为 4s，8s，32s，60s，120s 共计5次， 如果5次均失败， 则请求锁定1小时， 1小时内所有请求将丢弃
:::
<CodeGroup>

  <CodeGroupItem title="处理成功" active>

```json
{
    "status": 0,
    "message": ""
}
```

  </CodeGroupItem>

  <CodeGroupItem title="处理失败" active>
  
```json
{
    "status": -9999,
    "message": "处理失败"
}
```

  </CodeGroupItem>

</CodeGroup>
