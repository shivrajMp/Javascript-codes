// reverse each word in string
const stringData ="I am happy person"
a = stringData.split(' ');
resu= (stringData.split(' ')).map((a)=>a.split('').reverse().join(''))
console.log(resu.join(' '))
