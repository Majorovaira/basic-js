const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  let res = [];
  const len = arr.length;
  if(len === 1) {
    return '[]';
  }
  let i = 0;
  while(i < len) {
    if(arr[i] === `--discard-next` && i !== len - 1) {
      if(i + 3 < len && (arr[i + 2] == `--double-prev` || arr[i + 2] == `--discard-prev`)) {
        i = i + 3;
      }
      else{
      i = i + 2;
      }
    }
    else if(arr[i] === `--discard-prev` && i !== 0) {
     res.pop();
      i ++;
    }
    else if(arr[i] === `--double-next` && i !== len - 1) {
     
      res.push(arr[i + 1]);
      res.push(arr[i + 1]);
      i = i + 2;
      
    }
    else if(arr[i] === `--double-prev` && i !== 0){
      res.push(arr[i - 1]);
      i ++;
    }
    else {
      if(arr[i] !== `--double-prev` && arr[i] !== `--double-next` 
      && arr[i] !== `--discard-prev` && arr[i] !== `--discard-next`
      ){
      res.push(arr[i]);
      i++;
      }
      else {
        i ++;
      }
    }
  }
  
  return res;
};
