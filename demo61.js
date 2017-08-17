
let p = new Promise(function (resolve,reject){
    throw new Error("xxxxx");
    console.log("promise");
    resolve();
});

p.then(function(){
    console.log("resolve!");
});

p.catch(function(error){
    console.log("xxxxxxxx");
    console.log(error);
})

console.log("finish");
