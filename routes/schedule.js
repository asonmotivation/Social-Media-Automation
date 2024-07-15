const express = require('express');
const router = express.Router();
const { schedulePost } = require('./schedule');

router.post('/schedule', schedulePost);

module.exports = router;
const { publishScheduledPosts } = require('./schedule');

setInterval(async () => {
      await publishScheduledPosts();
}, 60000); // Run every minute