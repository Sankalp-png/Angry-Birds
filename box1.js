class Box extends BaseClass { 
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y, width, height) {
        //like string concatenation (score)
        super(x, y, width, height, 2)
        this.image = loadImage("sprites/wood1.png")
    }

    //functions
    display() {
       super.display();
    }
}