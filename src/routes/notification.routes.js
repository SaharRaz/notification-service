import express from 'express';

export default function (controller) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const source = req.headers['x-source-service'] || 'unknown';
            const result = await controller.createNotification(req.body, source);
            res.status(200).json(result);
        } catch (err) {
            console.error('POST /notifications - Error:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    return router;
}
