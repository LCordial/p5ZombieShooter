class Enemy {
    constructor(){
        this.r = Math.floor(Math.random() * 30) + 20;
        this.width = 10;
    }
    renderEnemy(){
        //Drawing Player
        ellipse(100,100, this.r * 2)
    }
}