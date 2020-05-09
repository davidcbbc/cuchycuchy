import Enemy from "../Enemy.js";

export default class Octopus extends Enemy{
    // Octopus has 3 life and 100 baseVelocity
    constructor(scene,x,y){
        super(scene,x,y,'oct1',4,200);
        this.setScale(0.1);
        this.scene.anims.create({
            key: 'octanim',
            frames: [
                {key : 'oct1', frame : null},
                {key : 'oct2', frame : null},
                {key : 'oct3', frame : null},
                {key : 'oct4', frame : null},
                {key : 'oct5', frame : null},
                {key : 'oct6', frame : null},
                {key : 'oct7', frame : null},
                {key : 'oct8', frame : null},
                {key : 'oct9', frame : null}
            ],
            frameRate: 8,
            repeat: -1
        })

        this.play("octanim")
    }
}