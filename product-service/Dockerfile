FROM node:20-alpine as build

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]