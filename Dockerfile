FROM nexus.ocbc.com:8443/repository/apache/httpd:latest
MAINTAINER digitalcoreteam@ocbc.com
COPY release /usr/local/apache2/htdocs/
COPY config/ocbc.conf /usr/local/apache2/conf
COPY config/start.sh /usr/local/bin/
RUN chmod a+rwx -R /usr/local/apache2/
RUN chmod a+rwx /usr/local/bin/start.sh
EXPOSE 8443
ENTRYPOINT ["start.sh"]
