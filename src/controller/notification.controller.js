const notificationsController = {
    async createNotification(data, source = 'unknown') {
        try {
            console.log(`[NOTIFICATION SERVICE] 🔔 Notification received from ${source}`);
            console.log(`[NOTIFICATION SERVICE] 📦 Data:`, data);

            // Simulated "save"
            console.log(`[NOTIFICATION SERVICE] ✅ Notification processed for user ${data.userId}`);
            return { success: true, message: 'Notification handled (no DB)' };
        } catch (err) {
            console.error(`[NOTIFICATION SERVICE] ❌ Failed to handle notification from ${source}`, err.message);
            throw err;
        }
    },
};

export default notificationsController;
