
let empName = Symbol();
// let employee = {};
// employee[empName] = "Mary";

let employee = {
    [empName] : "Mary"
}


console.log(employee[empName]);
console.log(typeof (empName));
console.log(empName in employee);