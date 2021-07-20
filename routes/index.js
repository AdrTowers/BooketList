const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Home Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// booketlist
router.get('/booketlist', ensureAuthenticated, (req, res) =>
  res.render('booketlist', {
    user: req.user
  })
);

module.exports = router;