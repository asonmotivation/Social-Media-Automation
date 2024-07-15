const Post = require('./post');

const schedulePost = async (req, res) => {
      const { content, scheduledAt } = req.body;
      const post = new Post({ content, scheduledAt });
      await post.save();
      res.send('Post scheduled successfully');
};

const publishScheduledPosts = async () => {
      const posts = await Post.find({ scheduledAt: { $lte: new Date() } });
      posts.forEach((post) => {
            // Publish the post (e.g., send to social media APIs)
            console.log(`Publishing post: ${post.content}`);
      });
};

module.exports = { schedulePost, publishScheduledPosts };