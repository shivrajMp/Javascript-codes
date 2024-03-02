// find factorial of given number
// recursion
numberInput = 5;
findFact = (number) => {
  if (number <= 1) {
    return 1;
  } else {
    return number * findFact(number - 1);
  }
};

console.log(findFact(numberInput));

// 2nd way

result = 1;
for (let i = numberInput; i >= 1; i--) {
  result *= i;
}
console.log(result);
