import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const cookieParser = require('cookie-parser');
const users = require('./routes/users');
const mail = require('./mailing');
const products = require('./routes/products');
const carts = require('./routes/carts');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/users', users);
app.use('/mail', mail);
app.use('/carts', carts);
app.use('/products', products);
require('dotenv').config();

interface Config {
  host: String;
  port: String | Number;
  apiPort: String | Number;
  database: String;
}

const apiConnData: Config = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.DATABASE_PORT || 27017,
  apiPort: process.env.API_PORT || 5432,
  database: process.env.DATABASE || 'auction_service',
};

mongoose
  .connect(
    `mongodb://${apiConnData.host}:${apiConnData.port}/${apiConnData.database}`
  )
  .then((response) => {
    console.log(
      `Connected to MongoDB. Database name: "${response.connections[0].name}"`
    );
    app.listen(apiConnData.apiPort, () => {
      console.log(
        `API server listening at http://localhost:${apiConnData.apiPort}`
      );
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB', error));
