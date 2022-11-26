Howler.volume(0.5);
const audio = {
    backgroundMusic: new Howl({
        src: './audio/backgroundMusic.wav',
        loop: true
    }),
    enemyShoot: new Howl({
        src: './audio/enemyShoot.wav'
    }),
    explode: new Howl({
        src: './audio/explode.wav'
    }),
    gameOver: new Howl({
        src: './audio/gameOver.mp3'
    }),
    select: new Howl({
        src: './audio/select.mp3'
    }),
    shoot: new Howl({
        src: './audio/shoot.wav'
    }),
    start: new Howl({
        src: './audio/start.mp3'
    })
}