console.log("Hi");
{
    var userName = "Peter";
}

console.log(userName);      // userName會變成全域變數


{
    let userName = "Peter";  //userName is not defined Error
}

console.log(userName);


//建議寫法
{
    let userName = "peter";
    console.log(userName);
}



//測試變數可視圍
//外面宣告的變數,裡面無法認得
let userName = "peter"
{
    console.log(userName);    // userName is not defined error
    let userName = "Amy";
    console.log(userName);
}

console.log(userName);