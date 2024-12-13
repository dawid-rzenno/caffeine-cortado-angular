FROM httpd:2.4
COPY ./dist/cortado/browser /usr/local/apache2/htdocs/
