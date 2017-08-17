let methodName = "getCood";

const Point = class{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    [methodName](){
        return `(${this.x},${this.y})`;
    }
}

var p = new Point(50,20)
console.log(p[methodName]());
console.log(p.getCood());