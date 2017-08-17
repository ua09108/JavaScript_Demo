let id1 = Symbol.for("id");

let employee = {
    empName:"mary",
    [id1]: "123"
};

console.log(employee[id1]);
console.log(id1);

let id2 = Symbol.for("id");
let sales = {
    [id2]:"123"
}
console.log(sales[id2]);;
console.log(id2);
console.log(id1==id2);
console.log(Object.getOwnPropertyNames(employee));
console.log(Object.getOwnPropertySymbols(employee));

for(var key in employee)
    {
        console.log(key);
    }

    let s = JSON.stringify(employee);
    console.log(s);