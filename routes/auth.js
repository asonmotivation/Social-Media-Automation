const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.post('/login', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
}));

module.exports = router;