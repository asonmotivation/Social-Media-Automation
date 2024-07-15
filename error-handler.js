const { createNotification } = require('./notification');

const handleErrors = async (err, userId) => {
      // Create a notification for the user
      await createNotification(userId, 'error', `Error: ${err.message}`);
};