// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// 7\
n=6
a=[0,1]
for(i=1;i<6;i++){
a.push(a[i-1]+a[i])
}
console.log(a)