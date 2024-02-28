// Print the first “n” prime numbers. “n” is anything a user might enter.
// Example n = 5 Output is 2,3,5,7,11
// Example n = 8 Output is 2,3,5,7,11,13,17,19
input = 8;
primeNumbers = [2];
i = 3;

while (true) {
  isPrime = true;
  for (let j = 2; j < i; j++) {

    if (!(i % j)) {
      isPrime = false;
    }
  }
  if (isPrime) primeNumbers.push(i);

  if (primeNumbers.length == input) {
    break;
  }
  i++;
}
console.log(primeNumbers);
