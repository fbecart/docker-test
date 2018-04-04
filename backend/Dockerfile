FROM node:9.9.0-alpine

COPY index.js todoDao.js package.json yarn.lock /opt/todos/
WORKDIR /opt/todos
RUN yarn install

ENV MONGODB_URL mongodb://mongo:27017
ENV MONGODB_DATABASE todos
ENV PORT 4000

EXPOSE 4000/tcp

CMD node index.js
