/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalError from './App/midlleware/global-error handler';
import notFound from './App/midlleware/not-found';
import routes from './App/routes';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalError);
app.use(notFound);
export default app;
