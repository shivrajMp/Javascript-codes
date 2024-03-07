arr = [1,2,3,4,-10,1,1,1]
arr =[1,1,3,1,1]
sum =0;
for(let j=0;j<arr.length;j++){
  sum+=arr[j];
}
left =0;
for(let i=0; i< arr.length;i++){
 
  if(left === (sum - (left+arr[i]))){
    console.log("find",i)
  }
  
  left+=arr[i];
  
}