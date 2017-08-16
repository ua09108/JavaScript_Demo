let employee = {
    id : 1,
    empName: "mary"
}

let id , empName;

({id,empName} = employee);
console.log(id);
console.log(empName);


let o = Object.getOwnPropertyDescriptor(employee,"empName");
console.log(o);

let {value,writable,enumerable,configurable} = Object.getOwnPropertyDescriptor(employee,"empName");
console.log(writable);
console.log(enumerable);
console.log(value);