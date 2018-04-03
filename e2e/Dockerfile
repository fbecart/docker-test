FROM node:9.9.0

COPY package.json /opt/tests/e2e/
COPY yarn.lock /opt/tests/e2e/
COPY nightwatch.json /opt/tests/e2e/
COPY wait-for-it.sh /opt/tests/e2e/
COPY src /opt/tests/e2e/src

WORKDIR /opt/tests/e2e

VOLUME /opt/tests/e2e/target

RUN yarn install
