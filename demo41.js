let set =new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(10);

//set.add(10).add(20).add(30);

console.log(set.size);
console.log(set);

set.add(10).add(20).add(30);


let set = new Set([10,20,30,10])
console.log(set.size);

for (let item of set){
    console.log(item);
}



let emp1 = {
    empName : "peter",
    age : 30
}

let set1 = new Set();
set1.add(emp1);
set1.add(emp1);
set1.add(emp1);

console.log(set1.size);


