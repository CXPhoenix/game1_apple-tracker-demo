sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(-1)
})
scene.setBackgroundColor(7)
game.splash("蘋果追逐戰")
info.setScore(0)
info.startCountdown(30)
scene.setBackgroundColor(3)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
apple.setPosition(randint(10, 150), randint(10, 110))
let rock = sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b b b d d b d d d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b b b b d d d b c c c . 
    c b b c c c c c c c c c c c c . 
    c c b b b b b b c c b d d d b c 
    c c c c c c c c c d d d d d d c 
    c c c c c c c b c b d d d d d b 
    c b b b c c c b c c b d d d c b 
    c c b b b c c b b c c c c b b c 
    c c c c c c c c b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Enemy)
rock.setPosition(randint(10, 150), randint(10, 110))
game.onUpdateInterval(1236, function () {
    rock.setPosition(randint(10, 150), randint(10, 110))
})
