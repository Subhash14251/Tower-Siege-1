class Block{
    constructor(x,y,width,height){
        var options= {
            'isStatic': false,
            'restitution': 0.8
        }
    
   
    this.body=Bodies.rectangle(x,y,width,height,options);
 
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }

    display() {
        var pos1=this.body.position;
        push();
        translate(pos1.x, pos1.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();


    }
}
