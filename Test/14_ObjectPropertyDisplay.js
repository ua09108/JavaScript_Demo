let o = {
    id : 1,
    empName : 'peter',
    age : 30
}

let p1 = Object.getOwnPropertyDescriptor(o,'id');
let p2 = Object.getOwnPropertyDescriptor(o,'empName');


let {value,writable,enumerable,configurable} =  Object.getOwnPropertyDescriptor(o,'empName');


console.log(p1);
console.log(p2);
console.log(value);
console.log(writable);

