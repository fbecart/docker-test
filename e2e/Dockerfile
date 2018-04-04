FROM node:9.9.0

COPY package.json yarn.lock nightwatch.json wait-for-it.sh /opt/tests/e2e/
COPY src /opt/tests/e2e/src/

WORKDIR /opt/tests/e2e

VOLUME /opt/tests/e2e/target

RUN yarn install
