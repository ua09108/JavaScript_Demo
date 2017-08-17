let word1 = "  TEST  ";
console.log("[" + word1.trim().toLowerCase() + "]");



let source = "My name is peter";
let target = "peter";
console.log(source.includes(target));     //true
console.log(source.includes("peter1"));   //false


//如果有找到印出位置
console.log(source.search(target));      //11

console.log(source.search("peter1"));    //-1




