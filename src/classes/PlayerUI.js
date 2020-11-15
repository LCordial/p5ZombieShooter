class PlayerUI{
    constructor(){

        this.Playerhealth = playerController.health;
        this.PlayerAmmo = playerController.ammo;
        this.PlayerWave = playerController.waves;
        this.PlayerKills = playerController.kills;
        
    }
    
    HealthGUI(){
       

        
    }

    AmmoGUI(){


        
    }

    waveGUI(){

        textSize(40);
        text(`${this.PlayerWave} waves`, 50, 50)

    }


    renderGUI(){

        this.HealthGUI();
        this.AmmoGUI();
        this.waveGUI();
        
    }
}