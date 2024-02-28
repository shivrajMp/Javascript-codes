const users = [{ name: 'abc', age: 35, isAdmin: true }, 
{ name: 'xyz', age: 25, isAdmin: true }, { name: 'pqr', age: 30, isAdmin: false}];
// write logic eldest user with highest age?

result = users.reduce((prev,user)=>{
    if(prev <user.age) {
        prev =user.age
    } 
    return prev
},0)

console.log(result)