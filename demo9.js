function hello(){
    return "hello";
}

function greeting(msg = hello()){
    return msg;
}

console.log(hello());

console.log(`hello函式名稱:${hello.name}`);
console.log(`greeting函式名稱:${greeting.name}`);