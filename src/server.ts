import dotenv from 'dotenv';
import express, { Express } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';
import routesApi from './microservice/api/routes';

dotenv.config();

class Server {
  private express: Express;

  private PORT = process.env.PORT;

  constructor() {
    this.express = express();
  }

  init() {
    this.middlewares();
    this.routes();

    this.express.listen(this.PORT, () => console.log(`server online in port ${this.PORT}`));
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.json());
  }

  routes() {
    this.express.use(routes);
    this.express.use(routesApi);
  }
}

const server = new Server();
server.init();
