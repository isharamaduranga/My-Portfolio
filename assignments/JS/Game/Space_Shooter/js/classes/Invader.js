// ================================================================================================== //
/**                                         INVADER CLASS                                             */
// ================================================================================================== //
class Invader {
    constructor({position}) {

        /** player speed */
        this.velocity = {
            x: 0,
            y: 0
        }
        /** Customized for invader varieties */
        const image = new Image();
        image.src = './img/invader.png'
        image.onload = () => {
            const scale = 0.065
            this.image = image
            this.width = image.width * scale;
            this.height = image.height * scale;

            /** invader Location and Adjust center of canvas */
            this.position = {
                x: position.x,
                y: position.y
            }
        }
    }

    draw() {
        /*  c.fillStyle = 'red'
          c.fillRect(this.position.x,this.position.y,this.width,this.height);*/

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    /** Press (Arrow keys & Shift update invader position ..) */
    update({velocity}) {
        if (this.image) {
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y
        }
    }

    shoot(invaderProjectiles) {
        audio.enemyShoot.play()
        invaderProjectiles.push(new InvaderProjectile({

            position: {
                x: this.position.x + this.width / 2,
                y: this.position.y + this.height
            },
            velocity: {
                x: 0,
                y: 5
            }
        }));
    }
}