var express = require('express');
var router = express.Router();

// test routes
var testController = require('../controllers/test');
router.get('/tests', testController.all);
router.get('/test/:id', testController.findOne);
router.post('/test', testController.add);

// test logs routes
var testLogsController = require('../controllers/test_logs');

module.exports = router;
