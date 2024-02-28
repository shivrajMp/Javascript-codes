// Write an algorithm which will tell if a group of characters can be a probable palindrome string with its different combination.
// Example “rarecac”….
//  Its possible combinations can be rraacec, racecar etc.
// Now “racecar” is the palindrome, hence return true.
const stringData = "rareecac";

newString = stringData;
odd = 0;
currentStr = {};
count = 0;
for (let value of stringData) {
  currentStr[value] = (currentStr[value] || 0) + 1;
}
oddnumber = 0;

for (let value of Object.values(currentStr)) {
  if (value % 2) {
    oddnumber++;
  }
}

if (oddnumber > 1) {
  console.log(false);
} else {
  console.log(true);
}
