let x = "getInfo";

let employee = {
    id:1,
    empName : "mary",
    [x](){return this.id + "," + this.empName}
    }


console.log(employee.getInfo());