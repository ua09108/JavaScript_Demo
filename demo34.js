'use strict'
let empName = Symbol();
// let employee = {};
// employee[empName] = "Mary";

let employee = {
    [empName] : "Mary"
}


console.log(employee[empName]);
console.log(typeof (empName));
console.log(empName in employee);


 Object.defineProperty(employee,empName,{writable:false});
employee[empName] = "Candy"
console.log(employee[empName]);

let empName = Symbol();
let getName = Symbol();

let employee ={
    [empName]:"Mary",
    [getName]: function(){
        return this[empName];
    }
}

console.log(employee[getName]());