var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
//     this cycles through ten times so you get 2e10
    result = result * base;
  console.log();
  return result;
};

console.log(power(2, 10));