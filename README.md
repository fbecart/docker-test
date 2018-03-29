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
