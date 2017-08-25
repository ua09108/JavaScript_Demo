
//解構使用

let o = {
    id : 1 ,
    empName : 'Peter',
    age : 30
};


//let {id,empName} = o;

let id , empName;
({id,empName} = o);

console.log(id + "," + empName);



//解構當函數使用
let o = {
    id : 1 ,
    empName : 'Peter',
    age : 30
};

// function func1({id,empName,age}){
//     console.log(id);
//     console.log(empName);
//     console.log(age);
// }

let func1 = function({id,empName,age}){
    console.log(id);
    console.log(empName);
    console.log(age);
}


func1(o);



//解構使用預設值
let o = {
    id : 1 ,
    empName : 'Peter',
    age : 30
};


let {id,empName,age=20,address= 'Taichung'} = o;

console.log(id);
console.log(empName);
console.log(age);
console.log(address);



//解構使用預設值,並使用不同變數名稱
let o = {
    id : 1 ,
    empName : 'Peter',
    age : 30
};


let {id:myID,empName,age:NewAge=20,address:Addr= 'Taichung'} = o;

console.log(myID);
console.log(empName);
console.log(NewAge);
console.log(Addr);











