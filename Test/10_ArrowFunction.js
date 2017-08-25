//一般函數可以使用,定義放後面

console.log(func1());

function func1(){
    return "Hi"
}


//Arrow function 則無法,必須先定義,才能使用

let func2 = () => { return 'Hi2' } ;

console.log(func2());


//配合Rest進行加總
let func3 = (...args) => { 
    let total = 0;
    for(let i of args){
        total += i;
    }
    return total;
}

console.log(func3(5,5,6));



let func_cal = (...input_values) => {
    let total = 0
    for(let i of input_values)
        total += i
    console.log(total);
}

let ar1 = [2,4,6];

func_cal(...ar1)



//回傳物件

// let func4 = () => {return {'id':100}};
let func4 = () => ({'id':100});

console.log(func4());


//IIAE
console.log((x => x + 2)(10));




//測試arguments參數
let func5 = (userName) => {    
    console.log(arguments.length);
    //console.log(arguments[0]);
    //console.log(arguments[1]);
    // console.log(arguments[2]);
    //console.log(arguments[3]);
    //console.log(arguments[5]);
}

func5('Peter123');


//Arrow Function 當做參數使用
//ES5 方式
let l_emp = ['Peter','Amy','Bill','Tom'];

let o_emp = l_emp.map(
    function (emp){
        return emp.toUpperCase();
    }
)

console.log(o_emp);





//ES6 方式
let l_emp = ['Peter','Amy','Bill','Tom'];

let o_emp = l_emp.map(
    //(emp) => emp.toUpperCase()
    (emp) => {return emp.toUpperCase()}
);

console.log(o_emp);



//物件與this
function Employee(userName){
    this.empName = userName;
    this.getName = function(){
        return this.empName;
    };
}

let emp1 = new Employee('Mary');
console.log(emp1.getName());



//當外面跟裡面各有相同參數名稱的問題 (在Chrome上面測試)
//function最裡面的this會指到Global
    var empName = "XXX";

    function Employee(userName){
        this.empName = userName;
        this.getName = function(){
            //let self = this;
            return function(){               
                return this.empName;      
            }
        };
    }
    
    var emp1 = new Employee('Mary');
    console.log(emp1.getName()());           //undefined



    //使用self先儲存目前this
    //ES5做法
    let empName = 'xxx';

    function Employee(empName){
        this.userName = empName;
        this.getName = function(){
            self = this;
            return function(){
                return self.userName;
            }
        }
    }

    let emp1 = new Employee('Peter');
    console.log(emp1.getName()());               //Peter


    

    //使用self先儲存目前this
    //ES6做法 (利用Arrow Function)
    let empName = 'xxx';
    
        function Employee(empName){
            this.userName = empName;
            this.getName = () => {return () => {return this.userName}}

        }
    
        let emp1 = new Employee('Peter');
        console.log(emp1.getName()());               //Peter
        
    


 





