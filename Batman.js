class Batman{
    constructor(x,y,width,height){
        this.height = height
        this.width = width
        var options = {
            isStatic:false
        }
        this.image = loadImage("images/WalkingFrame/walking_1.png")
        this.batman = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.batman)

    }
    display(){
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height);

    }
}