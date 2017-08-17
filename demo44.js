let map = new Map();
map.set("id",1);
map.set("name","mary");

console.log(map.has("id"));
console.log(map.has("name"));
console.log(map.has("age"));


let map1 = new Map();
map1.set("id",1);
map1.set("name","mary");

if(map1.has("id")){
    map1.delete("id");
}
console.log(map1);


let map2 = new Map();
map2.set("id",1);
map2.set("name","mary");

map2.clear();

console.log(map2);


let map3 = new Map([["id",1],["name","mary"]]);
map3.forEach(function(value,key,mpa){
    console.log(key + " , " + value + map3);
});


let map4 = new Map([["id",1],["name","mary"]]);
for(const k of map4.keys()){
    console.log(k);
}

let map5 = new Map([["id",1],["name","mary"]]);
for(const k of map5.values()){
    console.log(k);
}


let map6 = new Map([["id",1],["name","mary"]]);
for(const k of map6.entries()){
    console.log(k[0] + "," + k[1]);
}

