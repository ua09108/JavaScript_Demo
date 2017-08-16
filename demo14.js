var empName = "xxx";
//this
function Employee(n){
    this.empName = n;
    this.getName= function() {
        return function(){
            return this.empName;
        }
    }
}

var e = new Employee("mary");
console.log(e.getName()());