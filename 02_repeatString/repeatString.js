const repeatString = function (string, number) {
  let repString = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= number; i++) {
    repString += string;
  }
  return repString;
};

// Do not edit below this line
module.exports = repeatString;
