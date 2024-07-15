const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      user.save((err) => {
            if (err) { res.status(400).send(err); }
            res.send('User created successfully');
      });
});

module.exports = router;