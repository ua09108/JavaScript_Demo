

//使用var宣告變數自動會昇級到function下面
//所以沒有任何錯誤發生
function func1(){
    userName = "Mary";
    var userName;

    console.log(userName);
}

func1();


//使用Let宣告變數
//得到userName is not defined Error
function func1(){
    userName = "Mary";
    let userName;

    console.log(userName);
}

func1();


//建議做法
function func1(){
    let userName = "Mary";
    console.log(userName);
}
func1();

