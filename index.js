// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius= radius 
    }

    get diameter(){
        return this.radius * 2;
    }
    set diameter(newDiam){
        this.radius = newDiam/2; 
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    set circumference(newCircum){
        this.diameter = newCircum/Math.PI
    }
    get area(){
        return Math.PI * (this.radius*this.radius)
    }
    set area(newArea){
        this.radius = Math.sqrt((this.area/Math.PI)) + 1 
    }
}

const circle = new Circle(3)
console.log(circle.radius)
console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area)
circle.diameter = 10;
console.log(circle.radius)
console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area)
