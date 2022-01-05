#FROM node:16
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#EXPOSE 5000
#CMD [ "node", "servidor.js" ]
FROM nginx:alpine 
COPY exm.html /usr/share/nginx/exm.html
#COPY formulario.html /var/www/html/
EXPOSE 5000
CMD [“nginx”,”-g”,”daemon off;”]