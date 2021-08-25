function control() {

  if (player.velocityX < 2 && player.velocityY < 1) {
    if (mouseDown("leftButton")) {
      strokeWeight(5);
      stroke("black");
      line(player.x, player.y, camera.mouseX, camera.mouseY);
    }

    if (player.x - camera.mouseX < 120) {
      if (player.x < camera.mouseX) {
        if (mouseWentUp("leftButton")) {
          player.velocityX = (player.x + camera.mouseX) / 120
        }
      }

      if (player.x > camera.mouseX) {
        if (mouseWentUp("leftButton")) {
          player.velocityX = (player.x - camera.mouseX) / -5
        }
      }
    }

    if (player.y - camera.mouseY < 130) {
      if (player.y < camera.mouseY) {
        if (mouseWentUp("leftButton")) {
          player.velocityY = (player.y + camera.mouseY) / 120
        }
      }

      else if (player.y > camera.mouseY) {
        if (mouseWentUp("leftButton")) {
          player.velocityY = (player.y - camera.mouseY) / -5
        }
      }
    }

    if (mouseDown("leftButton")) {
      if (player.y - camera.mouseY > 130 || player.x - camera.mouseX > 120) {
        textSize(30)
        textAlign('center')
        text('rope size is too big', player.x, player.y - 100)
      }
    }
  }

  camera.y = player.y - 100
  camera.x = player.x
}