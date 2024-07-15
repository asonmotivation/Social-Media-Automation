const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
      userId: String,
      type: String,
      message: String,
      read: Boolean
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;

const Notification = require('./notification');

const createNotification = async (userId, type, message) => {
      const notification = new Notification({ userId, type, message, read: false });
      await notification.save();
};

const getNotifications = async (userId) => {
      const notifications = await Notification.find({ userId });
      return notifications;
};

const markNotificationAsRead = async (notificationId) => {
      const notification = await Notification.findById(notificationId);
      notification.read = true;
      await notification.save();
};

module.exports = { createNotification, getNotifications, markNotificationAsRead };