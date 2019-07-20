FROM node:8

COPY . /app/
WORKDIR /app/

RUN apt-get update
RUN npm rebuild
CMD ["node" , "server.js"]

EXPOSE 80
