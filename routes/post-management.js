const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/post-management', async (req, res) => {
      const posts = await Post.find().sort({ scheduledAt: -1 });
      res.render('post-management', { posts });
});

router.get('/post-management/:id', async (req, res) => {
      const post = await Post.findById((link unavailable));
res.render('post-edit', { post });
});

router.post('/post-management/:id', async (req, res) => {
      const post = await Post.findById((link unavailable));
post.content = req.body.content;
post.scheduledAt = req.body.scheduledAt;
await post.save();
res.redirect('/post-management');
});

router.delete('/post-management/:id', async (req, res) => {
      await Post.findByIdAndDelete((link unavailable));
res.redirect('/post-management');
});

module.exports = router;