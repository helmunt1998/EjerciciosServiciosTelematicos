FROM nginx:1.15.8-alpine
#RUN apk add --update sudo
#configuration

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
#content, comment out the ones you dont need!
COPY ./*.html /usr/share/nginx/html/
COPY ./css/*.css /usr/share/nginx/html/css/
#copy ./*.png /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/
#RUN apk add libcap && setcap 'cap_net_bind_service=+ep' /etc/nginx/nginx.conf
#RUN apk add libcap && setcap 'cap_net_bind_service=+ep' /usr/share/nginx/html/index.html
#ENV LISTEN_PORT 80
#RUN chown root:root /usr/bin/sudo && chmod 4755 /usr/bin/sudo
#CMD ["/bin/sh", "-c", "sudo nginx -g 'daemon off;'" ]
#CMD ["/bin/sh", "-c", "sudo", "nginx", "-g", "daemon off;"]
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
