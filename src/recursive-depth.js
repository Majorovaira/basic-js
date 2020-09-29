const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let pre = 1;
    
      for(let i = 0; i < arr.length; i ++){
      if(Array.isArray(arr[i])) {
         pre = 1 + this.calculateDepth(arr[i]);
         if(pre > result) {
           result = pre;
         }
      }
      pre = 1;

    }
    return result;
    
  
}
};