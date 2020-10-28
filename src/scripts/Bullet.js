var bullets = [];

var score = 0;

let keepbullets = []
let anyhit = false;

for (let i=0; i < bullets.length; ++ i) {
    
    bullets[i].toMouse()
    let hit = dist(bullets[i].x, bullets[i].y, enemy.x, enemy.y) <= enemy.r;
    anyhit = anyhit || hit
    if (!hit && bullets[i].onScreen()) {
        keepbullets.push(bullets[i]);
        bullets[i].show();
    }
}
bullets = keepbullets;
if (anyhit) {
    enemy = new Enemy();
    score += 100;
}


function mousePressed(){

    if (mouseX != playerController.x || mouseY != playerController.y ) {
        bullets.push( new Bullet(mouseX,mouseY,playerController.x,playerController.y) )
    }

}

function Bullet(X,Y,PX,PY){

    this.speed = 2;
    this.x = PX;
    this.y = PY;
    this.dir = createVector(X-PX, Y-PY).normalize()
    this.r = 5;
    
    this.show = function(){
    fill(255,255,0);
    stroke(128,128,0);
    circle(this.x,this.y,this.r);
    }
    this.toMouse = function() {
        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;
    }
    
    this.onScreen = function() {
    return this.x > -this.r && this.x < width+this.r && this.y > -this.r && this.y < height+this.r;

    }
}