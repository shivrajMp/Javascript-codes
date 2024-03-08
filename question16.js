arr = [1,2,3,4,-10,1,1,1]
arr =[1,1,3,1,1]
sum =0;
// left sum should same as right sum of index 
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

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(`array 1: length= ${ arr1.length}  last=  ${arr1.slice(-1)}`);
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

['n','h','oj']

array 1: length= 4 last= ['n']
array 2: length= 5 last= ['j','o','n','e','s']


What Would be the Result of 5+2+”7”


var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);

{key:'b'}

arr = [1,2,3,4,-10,1,1,1]


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


  // console.log((sum - (left+arr[i])),'right')
  //   console.log(left,'left')
  //   if((sum - (left+arr[i])) == (left)){
  //     console.log('index',i)
  //     console.log('value',arr[i])
  //   }
  //   left+=arr[i];
    
