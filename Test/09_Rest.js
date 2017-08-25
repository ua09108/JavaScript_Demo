//使用Rest Parameter
//...稱之為Spread Operator
function nums(...args){
    console.log("Args Type:" + typeof args);
    console.log('傳入參數個數:' + args.length);
    console.log(args);
    console.log('傳入參數如下:');
    for(let a of args){
        console.log(a);
    }

}


nums(1,2,3,4);


//Rest進階塵用
console.log('進階應用');

let arr1 = [1,2];
let arr2 = [3,4];

arr1.push(...arr2);

console.log(arr1);



//物件測試
let o1 ={
    id : '001',
    empname : 'pter'
}

let o2 ={
    id : '002',
    empname : 'amy'
}

o1.push(...o2)






