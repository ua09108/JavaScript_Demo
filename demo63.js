let target = {
    name: "target"
  };
 
  let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
      if (isNaN(value)) {
        throw new TypeError("屬性值必需為數字!");
      }
      return Reflect.set(trapTarget, key, value, receiver);
    }
  });
 
  proxy.num = 1;
  console.log(proxy.num);       // 1
  console.log(target.num);      // 1
  proxy.anotherNum = "proxy"; // TypeError: 屬性值必需為數字!