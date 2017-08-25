//陣列配合解構使用
let emp = ["one","two","three"]

let [s1,...others] = emp;

console.log(s1);
console.log(others.length);
console.log(others.toString());
console.log(Array.isArray(others));
console.log(typeof others);

for(let o of others){
    console.log(o);
}


//複制陣列
let a1 = ["one","two","three"];

[...a2] = a1;

for(let o of a2){
    console.log(o);
}