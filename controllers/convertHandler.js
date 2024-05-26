function ConvertHandler() {

  this.getNum = function (input) {
    let num = input.match(/^\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?(?=gal|l|lbs|kg|mi|km)/i);
    let unit = input.match(/(?<=\d*)(?:gal|l|lbs|kg|mi|km)$/i);
    if (unit == null) return "invalid unit";
    if (num == null && input.length != unit[0].length) return "invalid number";
    num = num ? num[0] : 1;
    return num;
  };

  this.getUnit = function (input) {
    let unit = input.match(/(?<=\d*)(?:gal|l|lbs|kg|mi|km)$/i)[0] ?? "invalid unit";
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
    switch (initUnit) {
      case 'gal':
        return initNum * galToL;
      case 'L':
        return initNum / galToL;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
    };
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum}${initUnit}${returnNum}${returnUnit}`;

    return result;
  };

}

module.exports = ConvertHandler;
