class rope{
	constructor(body1,pointB)
	{
		var options={
			bodyA:body1,
			pointB:pointB,
			stiffness:0.05,
			length:200
		}
        this.pointB=pointB
		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		//this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		line (pointA.x,pointA.y,pointB.x,pointB.y);
	}

}