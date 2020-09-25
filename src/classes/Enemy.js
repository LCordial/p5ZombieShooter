class Enemy {
    constructor(){
        this.r = Math.floor(Math.random() * 25) + 20;


        //this.randomColor = color(random(255),random(255),random(255));
    }
    renderEnemy(){

        //Drawing Player
        stroke("#c9001b");
        strokeWeight(4);
        ellipse(100,100, this.r * 2);

    }
}