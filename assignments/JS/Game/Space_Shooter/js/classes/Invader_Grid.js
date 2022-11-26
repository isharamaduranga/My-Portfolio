class Invader_Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 3,
            y: 0
        }
        this.invaders = []
        /** Randomly changed grid columns  & rows , count and position */
        const columns = Math.floor(Math.random() * 10 + 5);
        const rows = Math.floor(Math.random() * 5 + 2);
        this.width = columns * 35
        /** Randomly Defined grid columns  & rows in canvas */
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                this.invaders.push(new Invader({
                            position: {
                                x: x * 35,
                                y: y * 35
                            }
                        }
                    )
                );
            }
        }
    }
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 90
        }
    }
}