
class myDate extends Date{
    constructor(){
        super();
    }

    getMyDate(){
        var months = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
        return this.getFullYear() + "年" + months[this.getMonth()] + "月" + this.getDate() + "日";
    }
}

let d = new myDate();
console.log(d.getMyDate());