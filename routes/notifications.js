const express = require('express');
const router = express.Router();
const { getNotifications, markNotificationAsRead } = require('./notification');

router.get('/notifications', async (req, res) => {
      const userId = req.user._id;
      const notifications = await getNotifications(userId);
      res.json(notifications);
});

router.post('/notifications/:id', async (req, res) => {
      const notificationId = (link unavailable);
await markNotificationAsRead(notificationId);
res.json({ message: 'Notification marked as read' });
});

module.exports = router;