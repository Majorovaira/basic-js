const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
   constructor(rect = true){
     this.rect = rect;
   }
 alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N',
'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  encrypt(message, key) {
    let keyRep = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let mesAr = message.toUpperCase().split('');
    let keyArr = keyRep.split('');
    let encrMes = [];
    let j = 0;
    for(let i = 0; i < mesAr.length; i ++) {
      let position = this.alphabet.indexOf(mesAr[i]);
      if(position >= 0) {
        encrMes.push(this.alphabet[(position + this.alphabet.indexOf(keyArr[j])) % 26 ]);
        j++;
       }
       else {
         encrMes.push(mesAr[i]);
       }
    }
    if(!this.rect){
      encrMes = encrMes.reverse();
    }
    return encrMes.join('');
  }    
  decrypt(message, key) {
    let keyRep = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let mesAr = message.toUpperCase().split('');
    let keyArr = keyRep.split('');
    let encrMes = [];
    let j = 0;
    for(let i = 0; i < mesAr.length; i ++) {
      let position = this.alphabet.indexOf(mesAr[i]);
      if(position >= 0) {
        encrMes.push(this.alphabet[(26 + position - this.alphabet.indexOf(keyArr[j])) % 26 ]);
        j++;
       }
       else {
         encrMes.push(mesAr[i]);
       }
    }
    if(!this.rect){
      encrMes = encrMes.reverse();
    }
    return encrMes.join('');
  }
}

module.exports = VigenereCipheringMachine;
