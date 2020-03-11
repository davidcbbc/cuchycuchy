import Plane from "../models/Plane.js";
import Enemy from "../models/Enemy.js";
export default class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        console.log("Starting game");
        const widht = this.game.config.width;
        const height = this.game.config.height;
        this.add.image(0, 0, "bg").setDisplayOrigin(0, 0).setDisplaySize(widht, height);
        this.plane = new Plane(this, 100, 100);
        this.plane.setScale(0.2);
        this.enemies = this.physics.add.group({
            classType: Enemy
        });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(this.plane, this.enemy, (plane, enemy) => {
            console.log(this);
        });
        this.timeToRespawnEnemy = 0;
        this.enemySpawnRate = 2500;
        this.pontos = 0; // mata um inimigo ganha 1 ponto

    }

    update(time, delta) {
        this.plane.update(this.cursors, time);
        this.enemies.children.iterate(function(enemy) {
            if (enemy.active == true)
                enemy.update(time, delta);
        }, this);
        if (this.timeToRespawnEnemy < time) {
            //spawn aos enemigos
            const width = this.game.config.width;
            const height = this.game.config.height;
            let enemy = new Enemy(this, width, Math.floor(Math.random() * (height - 96)));
            enemy.setScale(0.5);
            this.enemies.add(enemy);
            this.timeToRespawnEnemy = time + this.enemySpawnRate;
        }
    }

     
}