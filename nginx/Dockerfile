FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in "conf.d" dir get included in main config
# COPY ./nginx.conf /etc/nginx/conf.d/

ADD nginx.conf /etc/nginx/nginx.conf
COPY ./conf /etc/nginx/sites-enabled

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]


