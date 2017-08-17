const Point = class{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    toString(){
        return `(${this.x},${this.y})`;
    }
    static create(x,y){
        return new Point(x,y)
    }
}

var p = Point.create(50,20)

console.log(p.toString());