# Todo List Application - End to End Testing in Docker


## Backend

To run locally:
```
$ yarn install
$ node index.js
```

To build Docker image:
```
docker build -t todos/backend .
```

## Frontend

To run locally:
```
$ yarn install
$ yarn start
```

To build Docker image:
```
$ yarn build
$ docker build -t todos/webapp .
```

## Full Stack

To run the full stack in Docker, you first need to follow the above instructions to build the Docker images. You can then start up the cluster by executing:
```
docker-compose up
```

from the top level of the project. This will start up a cluster consisting of:
* MongoDB
* Todo List Backend - linked to MongoDB, and exposed on port 4000
* Todo List Frontend - exposed on port 3000

Once done, you can open up http://localhost:3000 and try out the application.

If you watch the Network View in the developer tools, you will see XHR requests all going direct to http://localhost:4000 instead.

## End-to-End tests

The actual End-To-End tests can be either executed locally, or as part of the Docker environment.

### Executing Locally

Executing the tests locally can be done by starting everything up - either manually or in Docker - and executing `yarn start` from the `e2e` directory.

### Executing in Docker

Firstly, the Docker Image needs to be built, as before:

```
$ docker build -t todos/e2e .
```

Then the full E2E Cluster can be started.

```
docker-compose -f docker-compose.yml -f docker-compose.e2e.yml up --exit-code-from todos-e2e
```
