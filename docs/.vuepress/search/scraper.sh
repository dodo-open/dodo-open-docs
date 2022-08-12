docker run \
    -e APPLICATION_ID=HT0XFHIB64 \
    -e API_KEY=caf074d1176ad28db7857852c2438f2a \
    -e "CONFIG=$(cat config.json | jq -r tostring)" \
    algolia/docsearch-scraper:v1.13.0
