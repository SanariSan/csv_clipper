var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    status: 'OK',
    dir: 'test_req'
  });
});

module.exports = router;
