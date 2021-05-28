class Pig {
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y) {
        //like string concatenation (score)
        var options = {
            restitution: 0.2,
            friction: 1000000,
            density: 1
        }
        //this acts as a placeholder
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(myWorld, this.body);
        this.image = loadImage("sprites/enemy.png")
        this.width = 50;
        this.height = 50;
        this.visibility= 255;
    }

    //functions
    display() {
       
        if(this.body.speed<12) {
            var pos = this.body.position;
            var angle = this.body.angle;
            push()
            translate(pos.x, pos.y)
            rotate(angle)
            imageMode(CENTER);
            fill("#ffabf2");
            strokeWeight(2);
            stroke("black")
            image(this.image, 0, 0, this.width, this.height);
            pop()
        }
        else {
            World.remove(myWorld, this.body)
            push()
            this.visibility = this.visibility-5
            tint(255, this.visibility)
            var pos = this.body.position;
            image(this.image, pos.x, pos.y, 50, 50)
            pop()
        }
    }
}