let map1 = new Map([["id",1],["name","mary"]]);
console.log(map1);


let map = new Map([
    ['name','mary'],
    [true,'false'],
    [1,'one'],
    [{},'object'],
    [function(){},'function']
]);


for(let [key,value] of map){
    console.log(key + " , " + value);
}



