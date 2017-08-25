//JSON字串拆解出來

let json_data = `{
    "id" : 1,
    "empName" : "Peter"
}`;


let o = JSON.parse(json_data);

let {id,empName} = o;

console.log(id);
console.log(empName);


