FROM node:9.9.0

WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY . /usr/src/app

RUN npm install

ENV NODE_ENV production

CMD ["nodemon", "app.js"]

EXPOSE 80
