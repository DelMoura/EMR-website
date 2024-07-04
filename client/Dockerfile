FROM node:18-alpine

WORKDIR /app/

COPY . .
COPY package.json/ .
COPY package-lock.json/ .

RUN npm install -ci

EXPOSE 3000

CMD npm start