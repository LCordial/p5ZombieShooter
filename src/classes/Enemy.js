class Enemy {
    constructor(){

        this.r = Math.floor(Math.random() * 25) + 20;
        this.y = 0;
        this.x = 0;
        
        this.speed = 1;
        this.damage = 1;

        this.hit = false;

        this.enemy;
        this.player;

    }

    show(){

        push()

        rotate(this.rotation);

        translate(this.x, this.y)

        //Drawing Player
        stroke("#c9001b");
        strokeWeight(4);
        ellipse(0, 0, this.r * 2);

        pop();

    }

    movement(){

        this.playery = playerController.y;
        this.playerx = playerController.x;

        if (this.playerx > this.x){
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }
        if (this.playery > this.y){
            this.y += this.speed;
        } else{
            this.y -= this.speed;
        }

        this.enemy.position(x, y);

        if(this.enemy.overlap(player)){
            playerController.health -= damage;
            this.hit = true;
        }else{
            this.hit = false;
        }

    }

    renderEnemy(){

        this.show();
        this.movement();
        
    }
    
}