// ================================================================================================== //
/**                                          PLAYER CLASS                                             */
// ================================================================================================== //

class Player {
    constructor() {

        /** player speed */
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0;
        this.opacity = 1

        /** Customized for player varieties */
        const image = new Image();
        image.src = './img/jet2.png'
        image.onload = () => {
            const scale = 0.30
            this.image = image
            this.width = image.width * scale;
            this.height = image.height * scale;

            /** player Location and Adjust center of canvas */
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }

        this.particles = []
        this.frames = 0
    }

    draw() {
        /*  c.fillStyle = 'red'
          c.fillRect(this.position.x,this.position.y,this.width,this.height);*/
        c.save()
        c.globalAlpha =this.opacity
        c.translate(
            player.position.x + player.width / 2,
            player.position.y + player.height / 2)

        c.rotate(this.rotation)

        c.translate(
            -player.position.x - player.width / 2,
            -player.position.y - player.height / 2)

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        c.restore();
    }

    update() {
        if (!this.image) return;

        this.draw()

        this.position.x += this.velocity.x

        if (this.opacity !== 1) return;

        this.frames++
        if (this.frames % 2 === 0) {
            this.particles.push(
                new Particle({
                    position: {
                        x: this.position.x + this.width / 2,
                        y: this.position.y + this.height-25
                    },
                    velocity: {
                        x: (Math.random() - 0.5) * 1.5,
                        y: 1.4
                    },
                    radius: Math.random() * 4,
                    color: 'rgb(13,147,218)',
                    fades: true
                })
            )}
    }
}