var ar = [10,5,25,75,56,96];

var r = ar.find(function(n){
    return n >=15;
});

console.log(r);


var ar = [10,5,25,75,56,96];

var r = ar.find(n => n>=15);

console.log(r);



var ar = [10,5,25,75,56,96];

var r = ar.findIndex(function(n){
    return n >=15;
});

console.log(r);




var ar = Array.apply(null,new Array(5)).map(function(x){
    return 100
});

console.log(ar);

var ar = new Array(5).fill(100);
console.log(ar);



var ar = [1,2,3,4,5,6];

ar.copyWithin(1,3);
console.log(ar);
