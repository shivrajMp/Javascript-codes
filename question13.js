// Write a JavaScript function to check if a given number is prime.
input = 11;
result = false;
if (input == 2) {
  result = true;
} else if (input % 2 != 0 && input >2) {
  for (i = 3; i < input; i = i + 2) {
    result = input % i == 0 ? false : true;
  }
} else {
  result = false;
}

console.log(result);


// 2nd way
function isPrime(num) {

if (num <= 1) return false;
    console.log(Math.sqrt(num))
    // Math.sqrt(num) becuase any number is can be divide its value which is root of itself
    // example  16 can be divide by till 8 after that we cant divide 16 example 9 cannot be used to divide 16
  for (let i = 2; i <= Math.sqrt(num); i++) {

      if (num % i === 0) return false;

    }

    return true;

    
  }
console.log(isPrime(input))