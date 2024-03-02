// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

stringData = "i am happy person";
result = stringData.split(" ").map((strValue)=> {return strValue[0].toUpperCase() +strValue.split('').splice(1).join('')})
console.log(result.join(' '))
// console.log(stringData)