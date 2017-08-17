//ES5 寫法
function func1(a,b){
    console.log("您輸入的參數:" + arguments.length);
    let a1 = (typeof a != 'undefined')?a:0;
    let b1 = (typeof b != 'undefined')?b:0;

    console.log(a1+b1);
}

func1(5,5);               //10
func1(15);                //15


//ES6 寫法
function func2(a=0,b=0){
    console.log("您輸入的參數:" + arguments.length);
    console.log(a+b);
}

func2(5,5);
func2(15);



function hello(){
    return "Hi ";
}

function callFunc(userName,msg=hello()){
    console.log(msg +userName);
}

callFunc("Peter");

console.log(hello.name);
console.log(callFunc.name);





