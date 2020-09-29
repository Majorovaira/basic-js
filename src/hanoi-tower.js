const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const countTurns = Math.pow(2, disksNumber) - 1;
  const sec = Math.floor(countTurns * 3600 / turnsSpeed);
  const result = {
    turns: countTurns,
    seconds: sec
  }
  return result;
};
