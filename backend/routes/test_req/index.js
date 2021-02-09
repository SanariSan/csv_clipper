const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  res.json({
    status: 'OK',
    dir: 'test_req',
  });
};
