export default class bootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    preload() {

        this.load.spritesheet("enemy", "assets/enemies.png", {
            frameWidth: 96,
            frameHeight: 96,
        });


        // ==================== PLANE  ====================
        this.load.image("plane", "assets/png/Plane/fly1.png");
        this.load.image("plane2", "assets/png/Plane/fly2.png");
        // ==================== PLANE  ====================

        // ==================== PLANE SHOOTING ====================
        this.load.image("shoot1", "assets/png/Plane/shoot1.png");
        this.load.image("shoot2", "assets/png/Plane/shoot2.png");
        this.load.image("shoot3", "assets/png/Plane/shoot3.png");
        this.load.image("shoot4", "assets/png/Plane/shoot4.png");
        this.load.image("shoot5", "assets/png/Plane/shoot5.png");
        // ==================== PLANE SHOOTING ====================

        // ==================== BACKGROUND ====================
        this.load.image("bg", "assets/back.jpg");
         // ==================== BACKGROUND ====================


        // ==================== LIFES ====================
        this.load.image("life", "assets/heart.png");
        // ==================== LIFES ====================



        // ========================= PIG ==========================
        this.load.image("pig1","assets/monsters/PNG/Pig/Pig_1.png");
        this.load.image("pig2","assets/monsters/PNG/Pig/Pig_2.png");
        this.load.image("pig3","assets/monsters/PNG/Pig/Pig_3.png");
        this.load.image("pig4","assets/monsters/PNG/Pig/Pig_4.png");
        this.load.image("pig5","assets/monsters/PNG/Pig/Pig_5.png");
        this.load.image("pig6","assets/monsters/PNG/Pig/Pig_6.png");
        this.load.image("pig7","assets/monsters/PNG/Pig/Pig_7.png");
        this.load.image("pig8","assets/monsters/PNG/Pig/Pig_8.png");
        this.load.image("pig9","assets/monsters/PNG/Pig/Pig_9.png");
        this.load.image("pig10","assets/monsters/PNG/Pig/Pig_10.png");
        this.load.image("pig11","assets/monsters/PNG/Pig/Pig_11.png");
        this.load.image("pig12","assets/monsters/PNG/Pig/Pig_12.png");
        this.load.image("pig13","assets/monsters/PNG/Pig/Pig_13.png");
        // ========================= PIG ==========================

        // ========================= LIZARD ==========================
        this.load.image("lizard1","assets/monsters/PNG/Lizard/Lizard_1.png");
        this.load.image("lizard2","assets/monsters/PNG/Lizard/Lizard_2.png");
        this.load.image("lizard3","assets/monsters/PNG/Lizard/Lizard_3.png");
        this.load.image("lizard4","assets/monsters/PNG/Lizard/Lizard_4.png");
        this.load.image("lizard5","assets/monsters/PNG/Lizard/Lizard_5.png");
        this.load.image("lizard6","assets/monsters/PNG/Lizard/Lizard_6.png");
        this.load.image("lizard7","assets/monsters/PNG/Lizard/Lizard_7.png");
        this.load.image("lizard8","assets/monsters/PNG/Lizard/Lizard_8.png");
        // ========================= LIZARD ==========================

        // ========================= OCTOPUS ==========================
        this.load.image("oct1","assets/monsters/PNG/Octopus/Octopus_1.png");
        this.load.image("oct2","assets/monsters/PNG/Octopus/Octopus_2.png");
        this.load.image("oct3","assets/monsters/PNG/Octopus/Octopus_3.png");
        this.load.image("oct4","assets/monsters/PNG/Octopus/Octopus_4.png");
        this.load.image("oct5","assets/monsters/PNG/Octopus/Octopus_5.png");
        this.load.image("oct6","assets/monsters/PNG/Octopus/Octopus_6.png");
        this.load.image("oct7","assets/monsters/PNG/Octopus/Octopus_7.png");
        this.load.image("oct8","assets/monsters/PNG/Octopus/Octopus_8.png");
        this.load.image("oct9","assets/monsters/PNG/Octopus/Octopus_9.png");
        // ========================= OCTOPUS ==========================

        // ==================== BULLETS ============================
        this.load.image("bullet1", "assets/png/Bullet/bullet1.png");
        this.load.image("bullet2", "assets/png/Bullet/bullet2.png");
        this.load.image("bullet3", "assets/png/Bullet/bullet3.png");
        this.load.image("bullet4", "assets/png/Bullet/bullet4.png");
        this.load.image("bullet5", "assets/png/Bullet/bullet5.png");
        // ==================== BULLETS ============================

        this.load.image('power','/assets/monsters/PNG/items/Vertical_arrow.png')
        this.load.image('powerBullet','/assets/monsters/PNG/items/Horizontal_arrow.png')

        // audios
        this.load.audio("backmusic","assets/back.mp3");
        this.load.audio("backmusic2","assets/back2.mp3");
        this.load.audio("powerup","assets/power.mp3");
        this.load.audio("fire","assets/pew.mp3");
        this.load.audio("dead","assets/dead.mp3");

        //trophy image
        this.load.image("trophy", "assets/trophy.png");

        // Image from menus
        this.load.image("backmenu","assets/menuBack.png")
    }
    create() {
        this.scene.start("IntroGame");

        //plane flying animation
        this.anims.create({
            key: 'planes',
            frames: [
                { key: 'plane', frame: null },
                { key: 'plane2', frame: null },
            ],
            frameRate: 8,
            repeat: -1
        });

        //plane firing animation
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

        //bullet animation
        this.anims.create({
            key: 'bulletanim',
            frames: [
                { key: 'bullet1', frame: null },
                { key: 'bullet2', frame: null },
                { key: 'bullet3', frame: null },
                { key: 'bullet4', frame: null },
                { key: 'bullet5', frame: null },
            ],
            frameRate: 60,
            repeat: -1
        });
    }
}