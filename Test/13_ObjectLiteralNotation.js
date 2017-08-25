
//ES5 Object Literal Notatoin
let EMP = {
    id : 1 ,
    empName : 'Peter',
    getName : function(){
        return this.id + "," + this.empName
    }
}

console.log(EMP.getName());


//ES6 
let EMP = {
    id : 1 ,
    empName : 'Peter',
    getName() { return this.id + "," + this.empName }  
}

console.log(EMP.getName());




//ES6 
let x = 'getName';
let EMP = {
    id : 1 ,
    empName : 'Peter',
    [x]() { return this.id + "," + this.empName }  
}

console.log(EMP.getName());


let getName = 'getName';
let emp = {
    id : '001',
    empName : 'peter',
    [getName]()  { return this.id + ',' + this.empName}
}

console.log(emp.getName());



