import Bullet from "../models/Bullet.js";
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y,texture,lifes, baseVelocity) {
        super(scene, x, y, texture);
        this.lifes = lifes;
        this.maxLifes = lifes;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.baseVelocity = baseVelocity;
        this.deadSoud = this.scene.sound.add("dead", {
            volume: 0.05,
            delay: 0
          });
        // overlap w/ plane
        this.scene.physics.add.overlap(this, this.scene.plane, (enemy, plane) => {
            console.log("Enemy hitted the plane :(");
            plane.minus1Life();
            //enemy.minus1Life();
            this.scene.enemies.killAndHide(enemy);
            this.deadSoud.play()
            enemy.destroy()
        });
        // overlap w/ bullet
        this.scene.physics.add.overlap(this, this.scene.plane.bullets, (enemy, bullet) => {
            this.minus1Life();
            bullet.x= -203;
            bullet.y= -203;
            bullet.setVelocityX(0);
            bullet.setVelocityY(0);
            this.scene.plane.bullets.killAndHide(bullet);
            bullet.active = false;
            bullet.visible = false;
            console.log("hit on bullet");
        });

        console.log(baseVelocity)
    }

    update() {
        this.setVelocityX(-this.baseVelocity);
        if (this.x < 0) {
            this.lifes = this.maxLifes;
            this.clearTint()
            this.scene.enemies.killAndHide(this);
        }
    }

    minus1Life(){
        if(this.lifes == 1) {
            this.scene.addPoint()
            console.log("DIED x(")
            this.scene.enemies.killAndHide(this);
            this.x = -100;
            this.y = -100;
            this.lifes = this.maxLifes; // reseting the enemy's lifes.
            this.deadSoud.play()
            this.clearTint()
        }else if(this.lifes == this.maxLifes){
            // first shoot
            this.color = 0xcf9595;
            this.tint = 0xcf9595;
            this.lifes = this.lifes-1;
        }else {
            console.log("1 LIFE MORE")
            this.lifes = this.lifes-1;
            this.tint = 0xbb6b6b;
        }
    }


}