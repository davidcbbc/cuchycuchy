import Enemy from "../Enemy.js";

export default class Pig extends Enemy{
    // Pig only has 1 life and 100 baseVelocity
    constructor(scene,x,y){
        super(scene,x,y,'pig1',1,100);
        this.setScale(0.1);
        this.scene.anims.create({
            key: 'piganim',
            frames: [
                {key : 'pig1', frame : null},
                {key : 'pig2', frame : null},
                {key : 'pig3', frame : null},
                {key : 'pig4', frame : null},
                {key : 'pig5', frame : null},
                {key : 'pig6', frame : null},
                {key : 'pig7', frame : null},
                {key : 'pig8', frame : null},
                {key : 'pig9', frame : null},
                {key : 'pig10', frame : null},
                {key : 'pig11', frame : null},
                {key : 'pig12', frame : null},
                {key : 'pig13', frame : null},
            ],
            frameRate: 8,
            repeat: -1
        })

        this.play("piganim");
    }
}