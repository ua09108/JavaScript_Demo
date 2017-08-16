function nums(first,second,...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(first);
    console.log(second);

    return arguments;
}

console.log(nums(1,2,3));

console.log(nums.length);


let a = [2,3];
var arr =[1,...a,4];

console.log(arr);

let a = [2,3];
let b = [1,4];
b.push(...a);
console.log(b);