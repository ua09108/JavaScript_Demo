
let nums =  {    
    *[Symbol.iterator](){
    yield 100;
    yield 200;
    yield 300;
    yield 400;
    yield 500;
    },
    getIterator: function* (){
        yield 900;
        yield 200;
        yield 300;
        yield 400;
        yield 500;
    }
};

// let ite = nums.getIterator();


for(let n of nums){
    console.log(n);
}

var iterator = nums.getIterator();
for(let n of iterator){
    console.log(n);
}