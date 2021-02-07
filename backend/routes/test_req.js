const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  let a = fs.readdirSync('./');
  let b = fs.readdirSync(__dirname);

  let test = require(process.env.mainDir + '/test.js');
  // let converter = require(process.env.csvLogicDir + '/index.js');

  let ok = require(path.join(process.env.mainDir, '/routes'));
  console.log(ok);
  // await converter(process.env.mainDir);

  // res.send(JSON.stringify(converter));

  res.json({
    status: 'OK',
    dir: 'test_req',
    test: test(),
    a,
    b
  });
};
