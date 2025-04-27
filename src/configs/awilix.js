import { createContainer, asClass, asValue } from 'awilix';
import axios from 'axios';
import logger from '../middleware/logger.js';
import NotificationController from '../controller/notification.controller.js';

const container = createContainer();

const axiosClient = axios.create({
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

container.register({
    axios: asValue(axiosClient),
    logger: asValue(logger),
});

container.register({
    notificationController: asClass(NotificationController)
        .inject(() => ({
            logger: container.resolve('logger'),
            axios: container.resolve('axios')
        }))
        .singleton()
});

export default container;
