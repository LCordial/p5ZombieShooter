class PlayerUI{
    constructor(){

        this.Playerhealth = playerController.health;
        this.PlayerAmmo = playerController.ammo;
        this.PlayerWave = playerController.waves;
        this.PlayerKills = playerController.kills;
        
    }
    
    HealthGUI(){
       
        push();

        textAlign(CENTER, CENTER)

        textSize(35);

        //Changing color of health text once health has reached certain threshold
        if(this.Playerhealth >= 1){
            fill("#f54a00");
            if(this.Playerhealth >= 25){
                fill("#f5c000")
                if(this.Playerhealth >= 50){
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

    waveGUI(){

        textSize(40);
        text(`${this.PlayerWave} waves`, 50, 50)

    }

    killsGUI(){

        textSize(40);
        text(`${this.PlayerKills} kills`, 250, 50)

    }

    renderGUI(){

        //this.HealthGUI();
        //this.AmmoGUI();
        this.waveGUI();
        this.killsGUI()
        
    }
}