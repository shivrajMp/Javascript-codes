s1 = "Nitin";
s2 = "Nikhil";
//t k n h l
// find duplicate
s1 = [...new Set(s1.split(""))];
s2 = [...new Set(s2.split(""))];
length = s1.length < s2.length ? s1.length : s2.length;

for (let i = 0; i < length; i++) {
  console.log(s1[i]);
  if (s2[i] == s1[i]) {
    s1[i] = "";
    s2[i] = "";
  } else {
    break;
  }
}
console.log(s1.join("") + s2.join(""));

// 2 nd solution
s1 = "Nitin";
s2 = "Nikhil";
//t k n h l
// find duplicate
function checkUnique(firstStr, secondStr) {
  let resultStr = "";
  for (let i = 0; i < firstStr.length; i++) {
    let ifExist = false;
    for (let j = 0; j < secondStr.length; j++) {
      if (firstStr.charAt(i) == secondStr.charAt(j)) {
        ifExist = true;
      }
    }
    if (!ifExist) resultStr += firstStr.charAt(i);
  }

  return resultStr;
}
// console.log(checkUnique(s1,s2))
console.log(checkUnique(s1, s2) + checkUnique(s2, s1));

s1 = "Nitin";
s2 = "Nikhil";
//t k n h l
// find duplicate
//    3rd solution
// var filteredArray = (s1.split('')||[])?.filter(function (n) {
//   return (s2.split('')||[]).indexOf(n) !== -1;
// });
// console.log(filteredArray)