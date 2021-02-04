const fs = require('fs');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  let a = fs.readdirSync('./');
  let b = fs.readdirSync(__dirname);

  let test = require(req.mainDir + '/test.js');
  let converter = require(req.csvLogicDir + '/index.js');
  await converter(req.mainDir);

  // res.send(JSON.stringify(converter));

  res.json({
    status: 'OK',
    dir: 'main',
    test: test(),
    a,
    b
  });
});

module.exports = router;
