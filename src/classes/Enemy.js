class Enemy {
    constructor(){
        this.r = Math.floor(Math.random() * 30) + 25;
        this.width = 10;

        this.randomColor = color(random(255),random(255),random(255));
    }
    renderEnemy(){
        //Drawing Player
        stroke(this.randomColor);
        strokeWeight(4);
        ellipse(100,100, this.r * 2)
    }
}