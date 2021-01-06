class Rain{
    constructor(x,y){
        var options = {
            density:0.4,
            friction:0.004,
            restitution:0.1
        }
        this.raindrop = Bodies.circle(x,y,10,options)
        World.add(world,this.raindrop)
    }
    display(){
        fill(0, 199, 255)
        ellipse(this.raindrop.position.x,this.raindrop.position.y,10,10)
    }
    updateY(){
    if( this.raindrop.position.y>300){
        Matter.Body.setPosition(this.raindrop,{x:random(1,1199),y:random(1,390)})
    }
    }
}