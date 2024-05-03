import {Ball} from './Ball.js'
import {ctx, canvas} from './utile.js'

export class Animation{
    gndakner = new Array(50).fill(null).map(x => new Ball())
    constructor(){
        this.id = requestAnimationFrame(() => this.run())
    }
    run(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.id = requestAnimationFrame(() => this.run())
        this.gndakner.forEach(ball => ball.move())
    }
}