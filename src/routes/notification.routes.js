import express from 'express';
import notificationsController from '../controller/notification.controller.js';

const router = express.Router();

// Only POST is needed now (from other services, not Postman)
router.post('/', async (req, res) => {
    try {
        const source = req.headers['x-source-service'] || 'unknown';
        const result = await notificationsController.createNotification(req.body, source);
        res.status(200).json(result);
    } catch (err) {
        console.error('POST /notifications - Error:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
