class Enemy {
    constructor(){

        this.r = Math.floor(Math.random() * 25) + 20;
        this.y = 0;
        this.x = 0;

        this.rotation = atan2(Player.y - this.y, Player.x - this.y);
        this.enemySpeed = 4;

    }
    show(){

        push()

        //Drawing Player
        stroke("#c9001b");
        strokeWeight(4);
        ellipse(100,100, this.r * 2);

        pop();

    }

    renderEnemy(){

        this.show();
        
    }
    moveToPlayer(){

    }
    
}