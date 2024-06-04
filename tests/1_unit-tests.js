const chai = require('chai');
let assert = chai.assert;
const convertHandler = require('../controllers/convertHandler.js');
let conHan = new convertHandler();

suite('Unit Tests', function () {
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a decimal number input.', function () {
        assert.isNumber(conHan.getNum('1.1mi'));
    });
    test('convertHandler should correctly read a fractional input.', function () {
        assert.isNumber(conHan.getNum('1/2mi'));
    });
    test('convertHandler should correctly read a fractional input with a decimal.', function () {
        assert.isNumber(conHan.getNum('1.1/2mi'));
    });
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', function () {
        assert.equal(conHan.getNum('3/2/3mi'), 'invalid number');
    });
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
        assert.isNumber(conHan.getNum('mi'));
    });
    test('convertHandler should correctly read each valid input unit.', function () {
        assert.equal(conHan.getUnit('gal'), 'gal');
        assert.equal(conHan.getUnit('L'), 'L');
        assert.equal(conHan.getUnit('mi'), 'mi');
        assert.equal(conHan.getUnit('km'), 'km');
        assert.equal(conHan.getUnit('kg'), 'kg');
        assert.equal(conHan.getUnit('lbs'), 'lbs');
    });
    test('convertHandler should return the correct return unit for each valid input unit.', function () {
        assert.equal(conHan.getReturnUnit('gal'), 'L');
        assert.equal(conHan.getReturnUnit('L'), 'gal');
        assert.equal(conHan.getReturnUnit('mi'), 'km');
        assert.equal(conHan.getReturnUnit('km'), 'mi');
        assert.equal(conHan.getReturnUnit('kg'), 'lbs');
        assert.equal(conHan.getReturnUnit('lbs'), 'kg');
    });
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function () {
        assert.equal(conHan.getString(0,'gal', 0, 'L'), "0 gallons converts to 0 liters");
        assert.equal(conHan.getString(0,'L', 0, 'gal'), "0 liters converts to 0 gallons");
        assert.equal(conHan.getString(0,'mi', 0, 'km'), "0 miles converts to 0 kilometers");
        assert.equal(conHan.getString(0,'km', 0, 'mi'), "0 kilometers converts to 0 miles");
        assert.equal(conHan.getString(0,'kg', 0, 'lbs'), "0 kilograms converts to 0 pounds");
        assert.equal(conHan.getString(0,'lbs', 0, 'kg'), "0 pounds converts to 0 kilograms");
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    test('convertHandler should correctly read a whole number input.', function () {
        assert.isNumber(conHan.getNum('1mi'));
    });
    
});