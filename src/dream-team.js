const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let result = '';
 members.forEach(element => {
   if (typeof element === 'string'){
   result =  `${result}${element.trim().substring(0,1).toUpperCase()}`;
   }
 });
 let asAr = result.split('');
 asAr.sort();

 return asAr.join('');
};

