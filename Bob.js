class Bob{
    constructor(x,y,radius){
    var options ={
   isStatic:false,
   restitution:1,
   friction:0,
   density:0.5
    }
    this.body=Matter.Bodies.circle(x,y,radius,options)
World.add(world,this.body)
}
display(){
var pos=this.body.position;
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,30,30)

}


}