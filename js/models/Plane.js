import Bullet from "./Bullet.js";
export default class Plane extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "plane");
        this.play("planes");
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.body.gravity.set(0,4000);
        this.setCollideWorldBounds(true);
        this.timeToShoot = 0;
        this.velocity = 150;
        this.bulletsMaxSize = 5;
        this.bullets = this.scene.physics.add.group({
            maxSize: this.bulletsMaxSize,
            classType: Bullet
        });
        this.maxLifes = 4; // 5 vidas max ( 4 + 1)
        // add heart icons 
        this.lifesGroup = this.scene.physics.add.group({
            repeat: this.maxLifes,
            key: 'life',
            setXY: { x: 36 * (this.maxLifes + 1), y: 36, stepX: -40 },
        });
        this.lifesGroup.children.iterate(function(heart) {
            heart.setScale(0.03);
        }, this);
        this.fireRate = 250;
    }

    update(cursors, time) {

        this.setVelocity(0);
        const width = this.scene.game.config.width;
        const height = this.scene.game.config.height;

        this.velocidadex = 0;
        this.velocidadey = 0;
        if (cursors.down.isDown) {
            this.setVelocityY(this.velocity);
            this.velocidadey = this.velocity;
        } else if (cursors.up.isDown) {
            this.setVelocityY(-this.velocity);
            this.velocidadey = -this.velocity;
        }

        if (cursors.space.isDown && this.timeToShoot < time) {
            let bullet = this.bullets.getFirstDead(true, this.x, this.y);
            if (bullet) {
                this.play("fireanim");  // gun animation
                bullet.fire(this.velocidadex, this.bullets,this.x,this.y);


            }
            this.timeToShoot = time + this.fireRate;
        }

        this.bullets.children.iterate(function(bullet) {
            if (bullet.isOutsideCanvas()) {
                this.bullets.killAndHide(bullet);
                bullet.x= -203;
                bullet.y= -203;
                bullet.setVelocityX(0);
                bullet.setVelocityY(0);
                bullet.active = false;
                bullet.visible = false;
            }
        }, this);

    }

    // metodo que tira uma vida ao passaro ou mata-o
    minus1Life() {
        console.log("entered")
        if (this.lifesGroup.getTotalUsed() == 0) {
            console.log("game over")
            this.scene.scene.stop();
            this.scene.music.stop();
            console.log(this.scene.pontos)
            this.scene.scene.start("GameOver",{points: this.scene.pontos})

        } else {
            console.log(" a tirar vida")
            let heartzito = this.lifesGroup.getFirstAlive();
            heartzito.active = false;
            heartzito.visible = false;
            //heartzito.killAndHide()
            console.log(this.lifesGroup.getTotalUsed())
        }

    }
    
    /**
     * Add a layer of powerup to this plane
     * more velocity
     */
    addPowerUp() {
        this.velocity +=50;
    }

        /**
     * Add a layer of powerup to this plane
     * more velocity
     */
    addPowerUpFire() {
        this.bullets.children.iterate(function(bullet) {
            bullet.fireFaster()
        }, this);
    }

}