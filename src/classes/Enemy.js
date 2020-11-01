class Enemy {
    constructor(){

        //Creating different size enemys
        this.r = Math.floor(Math.random() * 25) + 20;
        this.y = 0;
        this.x = 0;
        
        //Movement variables
        this.speed = 2;

        //Information variables
        this.damage = 1;
        this.playerHealth = playerController.health;


    }

    show(){

        push()

        rotate(this.rotation); //Useless rotation that doesn't do anything

        translate(this.x, this.y) //Translating thingy

        //Drawing Player
        stroke("#c9001b");
        strokeWeight(4);
        ellipse(0, 0, this.r * 2);

        pop();

    }

    movement(){

        // Grabbing player size and position every frame
        this.playery = playerController.y;
        this.playerx = playerController.x;
        this.playerr = playerController.r;

        // Make player go in direction of player
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

    }

    checkCollision(){
        
        var hit = false;

        // Making hit variable into Collide 2D external library
        hit = collideCircleCircle(this.x, this.y, this.r * 2, this.playerx, this.playery, this.playerr * 2);

        // If bullet has hit change playerHealth by player damage, else don't do anything
        if(hit){
            console.log(`${hit} & ${this.playerHealth}`);
            
            this.playerHealth -= this.damage;
            playerUI.HealthGUI();        
        }else{
            console.log(`${hit}`);
        }

    }

    renderEnemy(){

        this.show();
        this.movement();
        this.checkCollision();
        
    }
    
}