'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert/:input?').get((req, res) => {
    const input = req.param.input ?? req.query.input;
    const answer = {
      initNum: convertHandler.getNum(input),
      initUnit: convertHandler.getUnit(input),
    };
    answer.returnNum = convertHandler.convert(answer.initNum, answer.initUnit);
    answer.returnUnit = convertHandler.getReturnUnit(answer.initUnit);
    answer.string = convertHandler.getString(answer.initNum, answer.initUnit, answer.returnNum, answer.returnUnit);
    res.json(answer);
  })

};
