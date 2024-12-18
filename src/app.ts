import express from 'express';
import 'dotenv/config.js';
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/user'
import coinRoutes from './routes/coin'
import messageRoutes from './routes/feedback'
import coinTradeRoutes from './routes/coinTrade'
import chartRoutes from './routes/chart'
import followRoutes from './routes/follow';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001']
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', PORT)

app.use('/user/', userRoutes);
app.use('/coin/', coinRoutes);
app.use('/feedback/', messageRoutes);
app.use('/cointrade/', coinTradeRoutes)
app.use('/chart/', chartRoutes)
app.use('/follow/', followRoutes);

export  default app;