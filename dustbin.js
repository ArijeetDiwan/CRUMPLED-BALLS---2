class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
    
	this.leftBody = Bodies.rectangle(x, y, 20,100,{isStatic:true});
this.rightBody = Bodies.rectangle(x+200, y,20,100,{isStatic:true});
	this.baseBody = Bodies.rectangle(x+100, y+45, 200,20,{isStatic:true});
	//left.shapeColor="red";
//right.shapeColor="red";
//	base.shapeColor="red";
	World.add(world, this.leftBody);
	World.add(world,this.rightBody);
	World.add(world, this.baseBody);
    }
    display(){
      fill("red")
        var leftpos=this.leftBody.position;
        
     rect(leftpos.x,leftpos.y, 20,100);
    


     var rightpos=this.rightBody.position;
 
rect(rightpos.x,rightpos.y,20,100);

var basepos=this.baseBody.position;
      rect(basepos.x,basepos.y, 200,20);
      
    }
  };
  