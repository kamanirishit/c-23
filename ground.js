class Ground{
constructor(){
    var option={
        isStatic:true
    }
 this.body=Bodies.rectangle(200,380,400,15,option);
 World.add(world,this.body);   
}
display(){
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y,400,15);
}
}