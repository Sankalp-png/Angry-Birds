class Log {
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y, height, angle) {
        //like string concatenation (score)
        var options = {
            friction: 0.7,
            density: 2.5
        }
        //this acts as a placeholder
        
        this.body = Bodies.rectangle(x, y, 20, height, options);
        Matter.Body.setAngle(this.body, angle)
        World.add(myWorld, this.body)
        this.image = loadImage("sprites/wood2.png")
        this.width = 20;
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