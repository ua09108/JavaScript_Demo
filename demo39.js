var ar = new Array(10);
console.log(ar);


var ar1 = new Array('10');
console.log(ar1);

var ar2 = new Array(10,20);
console.log(ar2);

//
var ar = [10,20,30];


var ar = Array.of(10);
console.log(ar.length);
console.log(ar[0]);

function getArray(){
    var result = Array.from(arguments);
    console.log(result);
}

getArray(10,20,30);



//
var ar = [10,20,30];

var newar = Array.from(ar);
console.log(newar);
ar[0] = 90;
console.log(newar);


//
var ar = [10,20,30];

var newar = Array.from(ar,(i)=>i*i);
console.log(newar);
ar[0] = 90;
console.log(newar);



//
var ar = [10,20,30];

let calc = {
    double(i){return i*i;}
}

var newar = Array.from(ar,calc.double);
console.log(newar);
ar[0] = 90;
console.log(newar);


