let set = new Set([10,20,30]);
console.log(set.has(10));


let set1 = new Set([10,20,30]);
if(set1.has(10)){
    set1.delete(10);
}
console.log(set1);


let set2 = new Set([10,20,30]);
console.log(set2.size);
set2.clear();
console.log(set2.size);


let set3 = new Set();
set3.add(10).add(20).add(30).add(40);

set.forEach(function(value,key,ste){
    console.log(key);
    console.log(value);
})


let ar = [...set3];
console.log(ar);


