class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
        
    }
    display(){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
         
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           // line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
           
         
    }
    
}