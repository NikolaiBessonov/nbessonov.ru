FROM nginx:alpine
COPY index.html styles.css script.js favicon.svg robots.txt sitemap.xml /usr/share/nginx/html/
COPY icons/ /usr/share/nginx/html/icons/
