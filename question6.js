arr = [10,20,10]
k=3
// find nth maximun number
// [1,2,4,6,7,9,10,11,15]
// 1st way
data = arr.sort()
console.log(data[2])

// 2nd way
arr = [21,2,4,64,7,59,106,11,15]
if(k>0 && k<=arr.length){

    for(let i= 0;i<arr.length ;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]> arr[j]){
            temp = arr[i];
            arr[i] =arr[j];
            arr[j] =temp}
        }
    }
}

console.log(arr[(k-1)])


// optimized
arr = [21,2,4,64,7,59,106,11,15]
if(k>0 && k<=arr.length){

    for(let i= 0;i<arr.length ;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]> arr[j]){
            temp = arr[i];
            arr[i] =arr[j];
            arr[j] =temp}
        }
        if((k-1) ==i){
            return
        }
    }
}

console.log(arr[(k-1)])
