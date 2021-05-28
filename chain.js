class Chain {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.05,
            length: 10
          }
          this.image1 = loadImage("sprites/sling1.png")
          this.image2 = loadImage("sprites/sling2.png")
          this.image3 = loadImage("sprites/sling3.png")
          this.chain = Constraint.create(options);
          World.add(myWorld,this.chain);
        
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image1, 200, 200)
        image(this.image2, 173, 155)
        //image(this.image3, 200, 200)
        if(this.chain.bodyA) {
            var pointA = this.chain.bodyA.position
            var pointB = this.chain.pointB
            strokeWeight(5)
            stroke("#301608")
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            line(pointA.x, pointA.y, pointB.x-25, pointB.y)
        }
        pop()
    }
    fly() {
        this.chain.bodyA = null
    }
    attach(bodyX) {
       this.chain.bodyA = bodyX
    }
}