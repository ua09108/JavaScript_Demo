
//使用變數當作物件的屬性名稱
let empName = 'peter';

let EMP = {
    [empName] : 'Mary',
    age : 30,
    dept : 'IT'
};

console.log(EMP[empName]);
console.log(EMP.peter);


//印出所有屬性名稱
for(let o in EMP){
    console.log(o);
}


//想印出所有屬性值 (會有問題)
//EMP[Symbol.iterator] is not a function
for(let o in EMP){
    console.log(o);
}