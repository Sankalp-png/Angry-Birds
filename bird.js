class Bird extends BaseClass { 
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y, width, height) {
        
        //like string concatenation (score)
        super(x, y, width, height, 7);
        //this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
    }

    //functions
    display() {
        /*
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        */
       super.display();

       if(this.body.velocity.x>10 && this.body.position.x>200) {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position)
       }
       
       for(var i=0; i<=this.trajectory.length-1; i++) {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
       }
    }

    tra() {
        this.trajectory = [];
    }
}
