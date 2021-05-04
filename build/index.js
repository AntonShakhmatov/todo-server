import express from 'express';
const app = express();
const PORT = 5000;
import parseResponse from './modules/core/parseResponse.js';
import apiNotFound from './modules/errors/errors.js';
import logger from './modules/core/logger.js';
import cors from './modules/core/cors.js';
import routes from './modules/core/routes.js';
import dbConnect from './modules/core/db.js';
dbConnect();
logger(app);
parseResponse(app);
routes(app);
cors(app);
app.use(apiNotFound);
app.get('./src/index.js', home);

function home(req, res) {
  res.status(200).json('Hello Worlddd!.');
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});