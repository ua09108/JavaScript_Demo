// function *getIerator(){
//     yield 100;
//     yield 200;
//     yield 300;
//     yield 400;
//     yield 500;
// }

function *getIerator(){
    for(let i = 100 ; i < 600 ; i+=100){
        yield i ;
    }
}


let ite = getIerator();
console.log(ite.next().value);
console.log("xxx");
console.log(ite.next().value);
