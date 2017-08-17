const Point = class{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    get Coord(){
        return `(${this.x},${this.y})`
    }
    set Coord(value){
        [this.x,this.y] = value;
    }    
}

var p = new Point(50,20);
p.Coord = [50,60];
console.log(p.Coord);
