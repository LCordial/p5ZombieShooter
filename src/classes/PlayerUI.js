class PlayerUI{
    constructor(){
        this.Playerhealth = playerController.health;
        this.PlayerAmmo = playerController.ammo;
    }
    
    HealthGUI(){

        console.log(`Player health is ${this.Playerhealth}`)

        push();

        textSize(35);

        if(this.Playerhealth >= 1){
            fill("#f54a00");
            if(this.Playerhealth >= 2){
                fill("#f5c000")
                if(this.Playerhealth >= 3){
                    fill("#08cc33");
                }
            }
        }
        
        text(`${this.Playerhealth}`, playerController.x + -10, playerController.y - 50);
        

        pop();
        
    }
    AmmoGUI(){

        push();

        textSize(25);

        text(`${this.PlayerAmmo}`, playerController.x -12, playerController.y + 65);

        pop();
    }

    renderGUI(){
        this.HealthGUI();
        this.AmmoGUI();
    }
}