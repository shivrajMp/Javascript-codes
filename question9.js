// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
a = "cbc";
reverse = a.split("").reverse().join("");
if (a == reverse) {
  console.log("palindrome");
}

// without using reverse

forward = 0;
reverse = a.length - 1;
same = true;

while (forward <= reverse && same) {
    console.log(a.charAt(forward))
  if (a.charAt(forward) != a.charAt(reverse)) {
    same = false;
  }
  forward++;
  reverse--;
}
console.log(same);
