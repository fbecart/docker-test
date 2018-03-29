FROM nginx:1.13.7

COPY ./build /usr/share/nginx/html

ENV API_URI=
CMD echo "window.API_URL_BASE = '$API_URI';" > /usr/share/nginx/html/api.js && nginx -g 'daemon off;'
