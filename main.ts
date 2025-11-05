let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f d f f d f f f . . . 
    . . . f f f d d d d f f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f 1 f d d f 1 f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f d d 2 2 d d f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f f d d d d f f f . . . 
    . . . f a a d d d d a a f . . . 
    . a a a a a a 1 1 a a a a a a . 
    . a a a 1 a a a a a a 1 a a a . 
    . a a a 1 a a a a a a 1 a a a . 
    `, SpriteKind.Player)
mySprite.setPosition(43, 48)
mySprite.sayText("hello,how are you?")
pause(2000)
let mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f 1 f f f f f f 1 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f 1 f d d f 1 f f . . . 
    . . . f f d d d d d d f f . . . 
    . . . f f d d 3 3 d d f f . . . 
    . . . f f d d d d d d f f . . . 
    . . f f f f 1 1 1 1 f f f f . . 
    . 9 9 1 1 1 1 1 1 1 1 1 1 9 9 . 
    . 9 9 1 1 1 1 1 1 1 1 1 1 9 9 . 
    . 9 9 9 9 1 9 9 9 9 1 9 9 9 9 . 
    . 9 9 9 9 1 9 9 9 9 1 9 9 9 9 . 
    `, SpriteKind.Player)
mySprite2.sayText("\"hey!,im good\"")
