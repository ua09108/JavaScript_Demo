let target = {}
let proxy = new Proxy(target,{});

proxy.userName = "xxx";
console.log(proxy.userName);
console.log(target.userName);