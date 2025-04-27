import express from 'express';
import dotenv from 'dotenv';
import container from './configs/awilix.js';
import { env } from './configs/config.js';
import createRoutes from './routes/notification.routes.js';
import { SERVICE_NAME } from './configs/constants.js';
import logger from './middleware/logger.js';

dotenv.config();

const app = express();
app.use(express.json());

const notificationController = container.resolve('notificationController');
const notificationRouter = createRoutes(notificationController);
app.use('/notifications', notificationRouter);

app.listen(env.PORT, () => {
    logger.info(`${SERVICE_NAME}[index] Service running at http://localhost:${env.PORT}`);
});
