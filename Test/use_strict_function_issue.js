
//當有使用use strict 模式下
//如果參數有預設值會出現下面錯誤
//'use strict' directive in function with non-sample parameter list 
function func1(a = 1){
    'use strict'
    let userName = "peter";
    console.log(userName);
    console.log(a);
}

func1();