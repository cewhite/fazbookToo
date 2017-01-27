var express = require('express');
var router = express.Router();
var models = require('../server/models/index');
/* GET users listing. */
router.get('/', function(req, res,next) {
  models.User.findAll( { } ).then(function(users) {
    res.render('users/index', {
      title: 'all fazbook users',
      users:users
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'new fazbook users' });
});

module.exports = router;
