class Ground {
    //characteristics
    constructor(x, y, width, height) {
        //like string concatenation (score)
        var options = {
            isStatic : true
        }
        //"this" acts as a placeholder
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/cliff.png")
        this.groundImage = loadImage("sprites/ground.png")
        World.add(myWorld, this.body)
    }

    //functions
    display() {
        push()
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        imageMode(CENTER)
        image(this.image, 200, 400, 250, 280)
        image(this.groundImage, 685, 485, 1370, 30)
        //rect(pos.x, pos.y, this.width, this.height);
        pop()
    }
}