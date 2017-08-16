let employees = ["mary"];

let [s1,s2,...others] = employees;

console.log(s1);
console.log(s2);

console.log(Array.isArray(others));
console.log(others.length);
console.log(others.toString());
console.log(others);


let employees = ["Mary","peter","lili","jane"];
[...employees2] = employees;

console.log(employees2);


let employees = ["Mary","peter","lili","jane"];
let [s1,...[s2,...s3]] = employees;
console.log(s1);
console.log(s2);
console.log(s3);