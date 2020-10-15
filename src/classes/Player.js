class Player {
    constructor(){

        this.r = 40;
        this.width = 75;
        this.height = 75

        this.angle = 0;

        this.speed = 8;

        this.x = 500 / 2 ;
        this.y = 200 / 2;
        
    }

    angleCalculation(){
        this.angle = Math.atan2( this.x - mouseX, this.y - mouseY) * -1; //Multiplying by -1 to change direction
    }

    show(){

        push();

        //Grabbing Vector from mouse position and position
        translate(this.x, this.y);
        rotate(this.angle);

        // //Drawning Weapon
        stroke("#5c5c5c");
        strokeWeight(4);
        rect(this.x + 50, this.y, 50, 20);
        
        //Drawning Player
        stroke("#0891a1");
        strokeWeight(4);
        //rect(this.x, this.y, windowWidth/20, windowHeight/20);
        rect(this.x, this.y, this.width, this.height);

        pop();
        
    }


}
