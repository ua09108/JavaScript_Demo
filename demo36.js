var s1 = Symbol();

var s = s1 + 'xx';

console.log(s);



var s1 = Symbol();

var s = `${s1} xxxx`;

console.log(s);


var s1 = Symbol();

var s = String(s1) + 'xx';

console.log(s);

var s1 = Symbol('true');

if(s1){
    console.log("true");
}


var s1 = Symbol('101'),

var s = Number(s1);


