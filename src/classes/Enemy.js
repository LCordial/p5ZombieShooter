class Enemy {
    constructor(){

        this.r = Math.floor(Math.random() * 25) + 20;
        this.y = 0;
        this.x = 0;
        
        this.enemySpeed = 4;

    }

    calculatePlayerRotation(){

        this.rotation = atan2(this.y - this.playerY, this.x - this.playerX) * -1;

    }

    show(){

        push()

        //rotate(this.rotation);

        translate(this.x, this.y)

        //Drawing Player
        stroke("#c9001b");
        strokeWeight(4);
        ellipse(0, 0, this.r * 2);

        pop();

    }

    renderEnemy(){

        this.calculatePlayerRotation();
        this.show();
        
    }
    
}