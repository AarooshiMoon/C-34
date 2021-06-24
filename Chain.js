class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5
        }
        this.Chain=Constraint.create(options);
        World.add(myWorld,this.Chain)
    }
    show(){
        var pos1=this.Chain.bodyA.position
        var pos2=this.Chain.bodyB.position
        strokeWeight(4);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}