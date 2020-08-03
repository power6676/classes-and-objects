class Box {
    constructor(x, y, width, height){
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width =  width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

/*
Class -design/blueprint before creating the objects
constructor - creating properties
rotate() - about an angle
translate() - about an axis (2 points);
push() - captures new setting
pop() - reverts to the old setting
*/