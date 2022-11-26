//================================================================================================== //
/**                                       PROJECTILES CLASS                                          */
//================================================================================================== //


class projectile {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        // for size of bullet
        this.radius = 4
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y+25,
            this.radius, 0, Math.PI * 2)
        c.fillStyle = 'lime'
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}