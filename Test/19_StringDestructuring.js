
let a1 = "One,Two,Three";

let [s1,s2,s3] = a1.split(",");

console.log(s1);
console.log(s2);
console.log(s3);


//設定預設值
let [s1="empty",s2="empty",s3="empty"] = ["ab","de"];

console.log(s1);
console.log(s2);
console.log(s3);
