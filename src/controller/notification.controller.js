import logger from '../middleware/logger.js';
import { SERVICE_NAME } from '../configs/constants.js';

class NotificationController {
    async createNotification(data, source) {
        try {
            logger.info(`${SERVICE_NAME}[createNotification] Incoming notification`, { source, data });
            return { status: 'Notification received', source };
        } catch (err) {
            logger.error(`${SERVICE_NAME}[createNotification] Error`, { error: err.message });
            throw err;
        }
    }
}

export default NotificationController;
