// Given an array containing numbers from 1 to N, with one number missing, find the missing number.
// consider array is sorted could start from any point
arr =[1,2,3,5,6]

for(i=1;i<arr.length; i++){
    
        if(arr[i] != (arr[i-1] +1)){
            console.log("missing number",arr[i-1]+1)
        }
    

}

