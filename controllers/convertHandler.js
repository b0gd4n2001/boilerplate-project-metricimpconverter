function ConvertHandler() {
  
  this.getNum = function(input) {
    let num = input.match(/^\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?(?=gal|l|lbs|kg|mi|km)/i);
    let unit = input.match(/(?<=\d)(?:gal|l|lbs|kg|mi|km)$/i);
    if (unit == null) return "invalid unit";
    if (num == null && input.length != unit[0].length) return "invalid number";
    num = num ? num[0] : 1;
    return num;
  };
  
  this.getUnit = function(input) {
    let result = input;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = [initNum, initUnit];
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum}${initUnit}${returnNum}${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
