const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
      content: String,
      scheduledAt: Date
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;