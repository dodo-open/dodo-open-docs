FROM node:14.18.2 as build
RUN mkdir -p /opt
WORKDIR /opt
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:latest
COPY --from=build /opt/docs/.vuepress/dist /usr/share/nginx/html
COPY --from=build /opt/nginx_default.conf /etc/nginx/conf.d/default.conf
