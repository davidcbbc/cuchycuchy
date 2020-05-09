import Enemy from "../Enemy.js";

export default class Lizard extends Enemy{
    // Lizard has 2 life and 200 baseVelocity
    constructor(scene,x,y){
        super(scene,x,y,'lizard1',3,200);
        this.setScale(0.1);
        this.scene.anims.create({
            key: 'lizardanim',
            frames: [
                {key : 'lizard1', frame : null},
                {key : 'lizard2', frame : null},
                {key : 'lizard3', frame : null},
                {key : 'lizard4', frame : null},
                {key : 'lizard5', frame : null},
                {key : 'lizard6', frame : null},
                {key : 'lizard7', frame : null},
                {key : 'lizard8', frame : null},
                
            ],
            frameRate: 3,
            repeat: -1
        })

        this.play("lizardanim");
    }
}