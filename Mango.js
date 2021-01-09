class Mango{
    constructor(x , y ,r){
        var options ={
            isStatic: false,
            restitution: 0 ,
            friction: 1 

        }
        this.body =body.x;
        this.r = r;
        this.image = loadImage("mango.png")
        this.body = Bodies.circle(x , y , this.r , options)
        World.add(world , this.body)
    }
    dispay(){
        var pos =this.body.position;
        push();
        fill("white")
        imageMode(CENTER);
        image(this.image , pos.x, pos.y , this.image)
        pop();
        
    }
}


