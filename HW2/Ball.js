import {ctx, rand, randColor} from './utile.js'

export class Ball{
    x = rand(innerWidth - 100, 100)
    y = rand(innerHeight - 100, 100)
    r = 30
    col = randColor()
    dx = rand(8, -8)
    dy = rand(8, -8)
    move(){
        this.draw()
        this.x += this.dx
        this.y += this.dy
        if(this.x + this.r >= innerWidth || this.x - this.r <= 0){
            this.dx =- this.dx
        }
        if(this.y + this.r >= innerHeight || this.y - this.r <= 0){
            this.dy =-this.dy
        }
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.col
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}