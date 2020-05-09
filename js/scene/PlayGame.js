import Plane from "../models/Plane.js";
import Enemy from "../models/Enemy.js";
import Pig from "../models/Enemies/Pig.js";
import Lizard from "../models/Enemies/Lizard.js";
import Octopus from "../models/Enemies/Octopus.js";
import { Powerup } from "../models/Powerup.js";
import { PowerFire } from "../models/PowerFire.js";
export default class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        console.log("Starting game...");
        // Altura e largura 
        const widht = this.game.config.width;
        const height = this.game.config.height;
        // Create background music
        this.music = this.sound.add("backmusic", {
            volume: 0.05,
            loop : true
          });
        // Plays the bg music
        this.music.play();
        // Add background image
        this.back = this.add.tileSprite(0,0,900,506,'bg').setDisplayOrigin(0,0).setDisplaySize(widht, height);
        this.plane = new Plane(this, 100, 100); // Create plane instance
        this.plane.setScale(0.2);
        this.plane.body.setAllowGravity();
        let maxSize=40;
        this.enemies = this.physics.add.group({
            classType: Enemy,
            maxSize: maxSize
        });

        // Creates 10 enemies and add to enemies Group
        for(let i=0;i<maxSize;i++){
            var randomNumber = Math.floor(Math.random() * 100) + 1; // random number between 1 and 3
            var enemy;
            if(randomNumber <= 15) {
                enemy=new PowerFire(this, -100, -100);
                // 15% chance powerup fire
            }
            else if(randomNumber >= 15 && randomNumber <=30){
                enemy=new Powerup(this, -100, -100);
                // 15% chance horizontal powerup
            } 
            else if(randomNumber > 30 && randomNumber <=60){
                enemy=new Pig(this, -100, -100);
                // 30% chance spawn a Pig
            } 
            else if(randomNumber > 60 && randomNumber <=80){
                enemy=new Lizard(this, -100, -100);
                // 20% chance spawn a Lizard
            } 
            else if(randomNumber > 80){
                enemy=new Octopus(this, -100, -100);
                // 20% chance spawn a Octopus
            } 
            enemy.setActive(false);
            enemy.setVisible(false);
            this.enemies.add(enemy);
        }
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.timeToRespawnEnemy = 0;
        this.enemySpawnRate = 100;
        this.pontos = 0; // points
        this.delay = 2000;


        this.time.addEvent({ // spawn enemies
            repeat:-1,
            callback:()=>{
                this.delay -=50;
                const width = this.game.config.width;
                const height = this.game.config.height;
                let enemy = this.enemies.getFirstDead(false);
            if(enemy){
                enemy.x=width;
                enemy.y=Math.floor(Math.random() * (height - 96));
                enemy.active = true;
                enemy.visible = true; 
                }
            },
            delay:this.delay
        })


        this.time.addEvent({ // increases background velocity , enemies velocity and delay
            repeat:-1,
            callback:()=>{
                this.backgroundVelocity +=1;
                this.enemies.children.iterate(function(enemy){
                    enemy.baseVelocity = enemy.baseVelocity + 30;
                },this);
                this.delay -= 300
                console.log(this.delay)
            },
            delay:30000
        })
        this.backgroundVelocity = 2;

        this.add.image(280,35,'trophy').setScale(0.1);
        this.pointsText = this.add.text(300,20,'0',{
            fontSize: '30px',
            color: '#ACA916',
          })

    }

    update(time, delta) {
        this.back.tilePositionX += this.backgroundVelocity;
        this.plane.update(this.cursors, time);
        this.enemies.children.iterate(function(enemy) {
            if (enemy.active == true){
                enemy.update();
            }
        }, this);
    }


    /**
     * Add a point to the points variable
     * and refresh in the game
     */
    addPoint(){
        console.log("adding point ....")
        this.pontos +=1;
        this.pointsText.setText(this.pontos)

    }
}