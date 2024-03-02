// Write a JavaScript program to find the maximum number in an array. 
a=[2,5,6,3,24,5,6,72,6]

result = a.reduce((prev,next)=>{
    if(prev<next){
        prev =next
    }
    return prev
},0)

console.log(result)