//ES5
//相關變數,是由後面蓋前面 (3.15)
{
    var pi = 3.14;
    var pi = 3.15;

    console.log(pi);
}


var pi = 3.14;
{
    var pi = 3.15;
    console.log(pi);
}


//ES6 經過const 宣告過的常數則無法再更改
{
    const pi = 3.14;
    console.log(pi);

    pi = 3.15;
}



//ES6 : pi has already been declared
{
    const pi = 3.14;
    const pi = 3.15;

    console.log(pi);
}



//同樣宣告二個相同變數,但一個在外面,一個在裡面 (不管用const 或 let 結果都一樣)
//沒有錯誤,印出 3.15 及 3.14
 const  pi = 3.14
{
    //console.log(pi);
    const pi = 3.15
    console.log(pi);     //3.15
}
console.log(pi);         //3.14

