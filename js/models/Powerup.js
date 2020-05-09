export class Powerup extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x, y) {
        super(scene, x, y, 'power');
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setScale(0.3)
        this.sound1 = this.scene.sound.add("powerup", {
            volume: 0.05,
          });
        // overlap w/ plane
        this.scene.physics.add.overlap(this, this.scene.plane, (pup, plane) => {
            console.log("POWERUP!");
            this.scene.enemies.killAndHide(pup);
            this.x = -100;
            this.y = -100;
            plane.addPowerUp()
            this.sound1.play()
        });
    }

    update() {
        this.setVelocityX(-100);
        if (this.x < 0) {
            this.scene.enemies.killAndHide(this);
        }
    }
}