class Player {
    constructor(){

        //Position Variables
        this.r = 40;
        this.width = 75;
        this.height = 75
        this.x = canvasX / 2;
        this.y = canvasY / 2;

        //Movement Variables
        this.angle = 0;
        this.speed = 8;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.acceleration = 0.3;
        this.drag = 0.1;
        this.maxSpeed = 7;

        //Keybinds
        this.wKey = 87;
        this.aKey = 83;
        this.sKey = 65;
        this.dKey = 68;

        //Information Variables
        this.health = 5;
        this.ammo = 20;
        this.kills = 0;
        this.waves = 0;

    }

    angleCalculation(){
        //Using atan2 to calculate angle from position to mouse
        this.angle = Math.atan2( this.x - mouseX, this.y - mouseY) * -1; //Multiplying by -1 to change direction
    }

    show(){

        //Pushing and popping so only player is affected by these translating ect.
        push();

        translate(this.x, this.y); //Translating to the position (x & y)
        rotate(this.angle); //Rotating character with 'angle' variable

        //Drawning Weapon
        stroke("#5c5c5c");
        strokeWeight(4);
        rect(0,0 + -40, 20, 50);
        
        //Drawning Player
        stroke("#0891a1");
        strokeWeight(4);
        ellipse(this.x / 10000, this.y / 10000, this.width, this.height);

        pop();
        
    }

    playerController(){

        //Checking if key is down and taking away acceleration from the y/x velocity
        if (keyIsDown(this.wKey)){
            if(this.y + (-20) > 0)
                this.yVelocity -= this.acceleration;
        }
        if (keyIsDown(this.aKey)){
            if(this.y + (20) < height)
                this.yVelocity += this.acceleration;
        }
        if (keyIsDown(this.sKey)){
            if(this.x + (-20) > 0)
                this.xVelocity -= this.acceleration;
        }
        if (keyIsDown(this.dKey)){
            if(this.x + (20) < width)
             this.xVelocity += this.acceleration;
        }
        
        for(let axis = 'x'; true; axis = 'y'){

            if (((this[axis + "Velocity"] < this.drag) && (this[axis + "Velocity"] > this.drag * -1))){this[axis + "Velocity"] = 0;} 

            else if (this[axis + "Velocity"] > 0){this[axis + "Velocity"] -= this.drag;}

            else if (this[axis + "Velocity"] < 0){this[axis + "Velocity"] += this.drag;}

            if (this[axis + "Velocity"] < (this.maxSpeed * -1)){this[axis + "Velocity"] = this.maxSpeed * -1;}

            else if (this[axis + "Velocity"] > (this.maxSpeed)){this[axis + "Velocity"] = this.maxSpeed;}

            this[axis] += this[axis + "Velocity"];

            if (axis === 'y'){break;}
            
        }
    } 

    renderPlayer(){
        this.angleCalculation()
        this.playerController()
        this.show()
    }

}
