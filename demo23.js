let employee =`{
    "id" : 1,
    "empName" : "mray"    
}`;


let o = JSON.parse(employee);

let {id,empName} = o;

console.log(id);
console.log(empName);