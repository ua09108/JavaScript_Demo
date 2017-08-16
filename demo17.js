
let empName = "Mary";

let o = {
    [empName]: "Mary",
    age : 42,
    dept: "IT"
};

// console.log(o[empName]);
// console.log(o.Mary);

for (var key in o){
    console.log(key);
}