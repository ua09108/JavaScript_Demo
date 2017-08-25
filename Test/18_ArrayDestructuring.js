let a1 = ["peter","amy","john"];

let [s1,,s3] = a1;

console.log(s1,s3);


//區域變數及全域變數
//區域變數
{
    let s1 , s2 , s3 , s4;
    let emp = ["peter","amy","bill","cho"];
    [s1,s2,s3,s4] = emp;

    console.log(s1);
    console.log(s2);
}

console.log(s3);


//全域變數
{
    // let s1 , s2 , s3 , s4;
    let emp = ["peter","amy","bill","cho"];
    [s1,s2,s3,s4] = emp;

    console.log(s1);
    console.log(s2);
}

console.log(s3);
