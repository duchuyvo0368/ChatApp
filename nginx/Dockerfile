#
FROM nginx:alpine


COPY default.conf /etc/nginx/conf.d/default.conf


COPY certs/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY certs/privkey.pem /etc/ssl/certs/privkey.pem
