const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(isNaN(date)) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)) {
    throw new Error('Error');
  }
  let month = date.getMonth();
  if(month >= 2 && month < 5) {
    return 'spring';
  }
  else if(month >= 5 && month < 8) {
    return 'summer';
  }
  else if(month >= 8 && month < 11){
    return 'autumn';
  }
  else {
    return 'winter';
  }
};
