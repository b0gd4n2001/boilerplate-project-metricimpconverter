function ConvertHandler() {

  this.getNum = function (input) {
    let num = input.match(/^\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?(?=[a-z])/i)?.[0];
    let unit = input.match(/[a-z].*/i)?.[0];
    if ((num?.length ?? 0) + (unit?.length ?? 0) !== input?.length) return 'invalid number'
    num = num ?? 1;
    return eval(num);
  };

  this.getUnit = function (input) {
    let unit = input.match(/(?<=\d*)(?:gal|l|lbs|kg|mi|km)$/i)?.[0] ?? "invalid unit";
    if (unit == 'invalid unit') return unit
    unit = /^l$/i.test(unit) ? 'L' : unit.toLowerCase();
    return unit;
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
    };
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = initNum;
    switch (initUnit) {
      case 'gal':
        result *= galToL;
        break;
      case 'L':
        result /= galToL;
        break;
      case 'lbs':
        result *= lbsToKg;
        break;
      case 'kg':
        result /= lbsToKg;
        break;
      case 'mi':
        result *= miToKm;
        break;
      case 'km':
        result /= miToKm;
        break;
    };
    return Math.round(result * (10 ** 5)) / (10 ** 5)
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    switch (initUnit) {
      case 'gal':
        initUnit = 'gallons';
        returnUnit = 'liters';
        break;
      case 'L':
        initUnit = 'liters';
        returnUnit = 'gallons';
        break;
      case 'lbs':
        initUnit = 'pounds';
        returnUnit = 'kilograms';
        break;
      case 'kg':
        initUnit = 'kilograms';
        returnUnit = 'pounds';
        break;
      case 'mi':
        initUnit = 'miles';
        returnUnit = 'kilometers';
        break;
      case 'km':
        initUnit = 'kilometers';
        returnUnit = 'miles';
        break;
    };
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;
