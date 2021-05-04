import homeRouter from '../home/Routes.js';
import infoRouter from '../info/Routes.js';
import userRouter from '../users/Routes.js';

export default function routes(app) {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
  app.use('/users', userRouter);
}
