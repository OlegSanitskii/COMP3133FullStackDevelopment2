var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware for parsing application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

// middleware for parsing application/json
router.use(bodyParser.json());

// GET route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route
router.post('/', function(req, res, next) {
  console.log('POST parameters received:');
  console.log(req.body);

  res.send('POST received!');
});

module.exports = router;