let employee ={
    id : 1,
    name : "mray",
    depart : {deptId : 100,deptName : "IT"}
};

let {id:myID,name,age = 20 , depart : {deptId:did,deptName:dname}} = employee;

console.log(myID);
console.log(name);
console.log(age);

console.log(did);
console.log(dname);