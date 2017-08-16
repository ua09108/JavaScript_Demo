console.log((x=>2*x)(10));



let func1 = () => ({id:100})
console.log(func1());

let func1 = () => {return {id:100}}
console.log(func1());


let func1 = () => 1

console.log(func1());

let func2 = (x) => 2 * x;

console.log(func2(2));

let func4 = (x,y) => {
    return x + y;
}

console.log(func4(10,20));

console.log(func3());


function func3(){
    return 5;
}

