#!/usr/bin/env bash
#/bin/bash
### only do global environment replacement. 
echo $MFE_PUBLIC_PATH
echo $PROJECT_NAME
echo $APPLICATION_NAME
sed -i 's+MFE_PUBLIC_PATH+'$MFE_PUBLIC_PATH'+g' /usr/local/apache2/htdocs/digital-core-$(DOMAIN).js
### start http service
/usr/local/apache2/bin/httpd -DFOREGROUND -f /usr/local/apache2/conf/ocbc.conf -e DEBUG