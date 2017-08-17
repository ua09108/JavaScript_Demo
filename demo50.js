const Point = class{
    constructor(x,y){
        this.x = x ,
        this.y =y ;
    }
    printPoint(){
        return `(${this.x},${this.y})`
    }
}

var p = new Point(50,20);
console.log(p.printPoint());