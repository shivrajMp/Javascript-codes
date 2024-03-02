// delete duplicate from array
arr = [
  1, 4, 43, 54, 66, 657, 73, 34, 2, 4, 24, 5, 5342, 2425, 2, 1, 3, 5, 5, 3, 2,
  4, 5, 3, 25, 6, 6,
];

jas = new Set();
current = new Set();
for (let i = 0; i < arr.length; i++) {
  if (!jas.has(arr[i])) {
    jas.add(arr[i]);
    current.add(arr[i]);
  } else {
    current.delete(arr[i]);
  }
}

console.log([...current]);

// 2nd way
result = [];
for (i = 0; i < arr.length; i++) {
  count = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) {
      count++;
    }
  }
  if (!count) result.push(arr[i]);
}

console.log(result);

// third way
result = []
for (let i = 0; i < arr.length; i++) {
  let firstPart = arr.slice(0, i);
  let secondPart = arr.slice(i + 1);
  let newArray = firstPart.concat(secondPart);
  if(!newArray.includes(arr[i])){
    result.push(arr[i])
  }
}

console.log(result)