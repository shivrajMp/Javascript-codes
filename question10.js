// . Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arrayData =[1,5,7,8,45,12,65,7,45,1,56,45,2,45,78,5]
const result = arrayData.filter((value)=>value % 2 == 0)
console.log(result)
