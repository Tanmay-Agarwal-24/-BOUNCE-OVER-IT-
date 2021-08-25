var gameState = 'intro'
var player

function preload() {
  titleImg = loadImage('images/intro.png')
  playButtonImg = loadImage('images/playButton.png')
  ballImg = loadImage('images/ball.png')
  l1img = loadImage('images/1.png')
  l2img = loadImage('images/2.png')
  l3img = loadImage('images/3.png')
  l4img = loadImage('images/4.png')
  l5img = loadImage('images/5.png')
  l6img = loadImage('images/6.png')
  l7img = loadImage('images/2.png')
  l8img = loadImage('images/8.png')
  l9img = loadImage('images/9.png')
  l10img = loadImage('images/10.png')
  l11img = loadImage('images/11.png')
  l12img = loadImage('images/12.png')
  l13img = loadImage('images/13.png')
  l14img = loadImage('images/14.png')
  l15img = loadImage('images/15.png')
  l16img = loadImage('images/16.png')
  l17img = loadImage('images/17.png')
  l18img = loadImage('images/18.png')
  l19img = loadImage('images/19.png')
  l20img = loadImage('images/15.png')
  l22img = loadImage('images/22.png')
  starimg = loadImage('images/star.png')
}

function setup() {
  createCanvas(400, 400)
  title = createSprite(190, 50)
  title.addImage(titleImg)
  title.scale = 0.6
  play = createSprite(200, 200)
  play.addImage(playButtonImg)
  play.scale = 0.1
  border1 = createSprite(900, 200, 5, 9000)
  border2 = createSprite(4500, 448, 9000, 100)
  player = createSprite(1450, 200, 20, 20)

  spritess()
}


function draw() {
  background('black')
  player.velocityY = player.velocityY + 0.8
  all()

  if (gameState === 'intro') {
    if (keyDown(32)) {
      gameState = 'play'
      camera.x = 900
      background('skyblue')
    }
    textAlign('center')
    textSize(27)
    fill('yellow')
    text('Drag mouse to control', 200, 130)
    text('press Space to start', 200, 160)
  }

  if (gameState === 'play') {
    background('skyblue')
    control()
    player.friction = 0.05
    border2.depth = l4.depth + 1
    border2.depth = l11.depth + 1
    border2.depth = l12.depth + 1

  }

  if (player.isTouching(star)) {
    gameState = 'end'

  }

  if (gameState === 'end') {

    background('black')
    camera.x = 10000
    camera.y = 240
    textAlign('center')
    textSize(40)
    fill('yellow')
    text('Thank for', 10000, 100)
    text('playing', 10000, 150)
    textSize(20)
    text('made by Tanmay agarwal', 10000, 200)
    text('java editing', 10000, 230)
    text('java editing', 10000, 230)

  }

  drawSprites()
}
