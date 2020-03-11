export default class bootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    preload() {
      
        this.load.spritesheet("enemy", "assets/enemies.png", {
            frameWidth: 96,
            frameHeight: 96,
        });

        this.load.image("plane","assets/png/Plane/fly1.png");
        this.load.image("plane2","assets/png/Plane/fly2.png");

        this.load.image("shoot1","assets/png/Plane/shoot1.png");
        this.load.image("shoot2","assets/png/Plane/shoot2.png");
        this.load.image("shoot3","assets/png/Plane/shoot3.png");
        this.load.image("shoot4","assets/png/Plane/shoot4.png");
        this.load.image("shoot5","assets/png/Plane/shoot5.png");
        
        this.load.image("bg", "assets/background.png");

        this.load.image("life", "assets/heart.png");
        
        this.load.image("bullet", "assets/bullet.png");
    }
    create() {
        this.scene.start("PlayGame");
        this.anims.create({
            key: 'planes',
            frames: [
                { key: 'plane', frame: null },
                { key: 'plane2', frame: null },
            ],
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'fireanim',
            frames: [
                { key: 'shoot1', frame: null },
                { key: 'shoot2', frame: null },
                { key: 'shoot3', frame: null },
                { key: 'shoot4', frame: null },
                { key: 'shoot5', frame: null },
            ],
            frameRate: 50,
            repeat: 1
        });
    }
}