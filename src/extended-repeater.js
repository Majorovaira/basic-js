const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  if(isNaN(options.repeatTimes)) { 
    options.repeatTimes = 1;
  }
  if(options.separator === undefined) { 
    options.separator = '+';
  }
  if(options.addition === undefined) { 
    options.addition = '';
  }
  if(isNaN(options.additionRepeatTimes)) { 
    options.additionRepeatTimes = 1;
  }
  if(options.additionSeparator === undefined) { 
    options.additionSeparator = '|';
  }
  

  for (let i = 0; i < options.additionRepeatTimes; i ++) { 
    arr.push(`${options.addition}`);
  }
  let addRes = arr.join(`${options.additionSeparator}`);
  let result = [];
  for (let j = 0; j < options.repeatTimes; j ++) {
    result.push(`${str}${addRes}`);
  }
  let separ = options.separator.toString();
  
  return result.join(separ);

};
  