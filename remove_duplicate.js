const array = [1, 4, 6, 6, 2, 4, 5, 2];
// remove duplicate

// 1)

result = array.filter((value, index) => array.indexOf(value) == index);

console.log(result);

// ------------------------------------------------------------
strData = "";

for (let i = 0; i < array.length; i++) {
  const value = `${array[i]}${i != array.length - 1 ? "," : ""}`;
  if (!strData.includes(value)) {
    strData += value;
  }
}
strData = strData.split(",");
strData.length = strData.length - 1;
console.log(strData);
