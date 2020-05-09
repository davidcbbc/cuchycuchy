export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "bullet1");
        this.play("bulletanim").setScale(0.4);
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.baseVelocity = 350;
        this.baseGravity = 200;
        this.pew = this.scene.sound.add("fire", {
            volume: 0.05,
            delay: 0
          });
    }

    /**
     * Fire horizontally a bullet
     * @param {*int} x 
     * @param {*Group} bullets 
     */
    fire(x, bullets) {
        this.setScale(0.2);
        this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        if (x == 0) {
            x = this.baseVelocity;
        } else {
            if (x > 0) x = this.baseVelocity;
            else x = -this.baseVelocity;
        }
        this.setVelocityX(x);
        this.active = true;
        this.visible = true;
        this.body.gravity.set(0,this.baseGravity);
        this.pew.play()
    }



    /**
     * Fire to given enemy
     * @param {*GameObject} enemy 
     */
    fireToEnemy(enemy) {
        this.scene.physics.add.overlap(this, enemy, (bullet, enemy) => {
            bullet.destroy()
            enemy.destroy();
            console.log("hit");
        });
        this.scene.physics.moveToObject(this, enemy, this.baseVelocity);
        this.active = true;music
    }

    /**
     * If bullet goes outside canvas
     */
    isOutsideCanvas() {
        const width = this.scene.game.config.width;
        const height = this.scene.game.config.height;
        return this.x > width || this.x < 0 || this.y > height || this.y < 0;
    }
    /**
     * Aumenta a velocidade das balas
     */
    fireFaster(){
        this.baseVelocity +=50;
    }


}