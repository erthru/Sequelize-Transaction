var express = require('express');
var router = express.Router();

// home Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sequelize Transaction' });
});

module.exports = router;
