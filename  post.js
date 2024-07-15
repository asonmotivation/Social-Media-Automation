const { createNotification } = require('./notification');

const publishPost = async (post) => {
      // Publish the post (e.g., send to social media APIs)
      console.log(`Publishing post: ${post.content}`);

      // Create a notification for the user
      await createNotification(post.userId, 'post_published', `Your post has been published!`);
};