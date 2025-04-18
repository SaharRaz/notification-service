import express from 'express';
import notificationsRoutes from './routes/notification.routes.js';
import logger from './systems/logger.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());

// Register routes
app.use('/notifications', notificationsRoutes);

// Set port
const PORT = 5003;

// Start server
app.listen(PORT, () => {
    logger.info(`Notification service running on port ${PORT}`);
    console.log(`Notification service running on http://localhost:${PORT}`);
});
