FROM node:9.9.0

WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY . /usr/src/app

RUN npm install

# Build React inside /client
WORKDIR /usr/src/app/client

RUN npm install

RUN npm run-script build

# Move back to root dir
WORKDIR /usr/src/app

ENV NODE_ENV production

CMD ["nodemon", "app.js"]

EXPOSE 80
