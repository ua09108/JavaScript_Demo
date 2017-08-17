function Point(x,y){
    this.x = x;
    this.y = y;
}

Point.create = function (x,y){
    return new Point(x,y);
}


Point.prototype.toString = function(){
    console.log("(" + this.x + "," + this.y + ")");
}

var p = new Point(50,20);
console.log(p.x);
console.log(p.y);

var p2 = Point.create(50,20);
p2.toString();