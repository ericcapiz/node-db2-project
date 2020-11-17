const express = require('express');
const helmet = require('helmet');

const carRouter = ('../cars/car-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('api/cars',carRouter);

module.exports = server;