
const Point = class {
    constructor(x,y){
    this.x = x;
    this.y = y;
    }
    toString(){
        return "(" + this.x + " , " + this.y + ")";
    }
}

class Circle extends Point{
    constructor (x,y,r) {
        super(x,y)
        this.r = r;        
    }    
    toString(){
        //return "(" + this.x + " , " + this.y + " , " + this.r + ")";
        return super.toString() + this.r;
    }
}

const c= new Circle(10,20,2.5);
console.log(c.toString());

