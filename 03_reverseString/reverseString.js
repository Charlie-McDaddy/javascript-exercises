let charArr,
  reverseArr,
  joinArr = [];

const reverseString = function (str) {
  charArr = str.split("");
  reverseArr = charArr.reverse();
  joinArr = reverseArr.join("");
  return joinArr;
};

// Do not edit below this line
module.exports = reverseString;
