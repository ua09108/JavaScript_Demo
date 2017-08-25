
let o = {
    id : 1,
    empName : 'Peter',
    deptName : {
        first : 'IT',
        second : 'Support'
    },
    age : 30
};



let {id,empName,deptName:{first:TFirst,second:TSecond},age} = o;

console.log(id);
console.log(empName);
console.log(age);
console.log(TFirst);
console.log(TSecond);