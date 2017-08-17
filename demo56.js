class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `(${this.x},${this.y})`
    }
}

class PointList{
    *[Symbol.iterator](){
        yield new Point(10,20)
        yield new Point(20,20)
        yield new Point(30,20)

    }
}

for(var item of new PointList()){
    console.log(item.toString());
}