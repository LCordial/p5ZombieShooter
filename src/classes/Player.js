class Player {
    constructor(){

        this.r = 40;
        this.width = 10;
        this.speed = 8;

        this.x = 0;
        this.y = 0;
        
    }

    show(){

        push();

        //Creating Variables
        const posX = width / 2;
        const posY = height / 2;

        //Grabbing Vector from mouse position and position
        const angle = Math.atan2(mouseY-posY, mouseX-posX);
        translate(posX, posY);
        rotate(angle);

        //Drawning Weapon
        stroke("#5c5c5c");
        strokeWeight(4);
        rectMode(CENTER);
        rect(50, 0, 50, 20);
        
        //Drawning Player
        stroke("#0891a1");
        strokeWeight(4);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r*2,);

        pop();
        
    }

}
