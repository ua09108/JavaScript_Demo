var Point = function (x,y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function(){
    return "(" + this.x + " , " + this.y + ")";
}


var Circle = function(x,y,r){
    Point.call(this,x,y);
    this.r=r;
}

Circle.prototype = new Point();
Circle.prototype.constructor = Circle;

var shape = new Circle(10,20,2.5);

console.log(shape.toString());



