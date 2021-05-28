class BaseClass {
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y, width, height, d) {
        //like string concatenation (score)
        var options = {
            restitution: 0.2,
            friction: 10,
            density:d
        }
        //this acts as a placeholder
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body)
        this.image = loadImage("sprites/base.png")
        this.width = width;
        this.height = height;
    }

    //functions
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill("#592400");
        strokeWeight(2);
        stroke("black")
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}