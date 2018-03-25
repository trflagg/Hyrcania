FROM node:9.9.0

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
