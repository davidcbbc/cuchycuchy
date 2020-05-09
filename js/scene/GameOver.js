export default class gameOver extends Phaser.Scene {
    constructor(points) {
      super("GameOver");
    }
    create() {
      const widht = this.game.config.width;
      const height = this.game.config.height;
      this.back = this.add.tileSprite(0,0,900,506,'bg').setDisplayOrigin(0,0).setDisplaySize(widht, height);

      var menuImage = this.add.image(widht/2,height/2,"backmenu")
      menuImage.setScale(0.7)
      this.cursors = this.input.keyboard.createCursorKeys();
      this.add.text(widht/2-200,height/2-130,'Oh no! Gameover!',{
        fontSize: '30px',
        color: '#323106',
      })
      this.add.text(widht/2-200,height/2-50,'Your score: ' + this.points,{
        fontSize: '30px',
        color: '#323106',
      })

      this.add.text(widht/2-250,height/2,'To play again press Space',{
        fontSize: '30px',
        color: '#ACA916',
      })

      this.introSound = this.sound.add("backmusic2", { volume: 0.1 });
      this.introSound.play();
  
      this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
      if (this.cursors.space.isDown) {
        this.scene.stop();
  
        this.introSound.stop();
  
        this.scene.start("PlayGame");
      }
    }


    init(data) {
        this.points = data.points;
        }
  }
