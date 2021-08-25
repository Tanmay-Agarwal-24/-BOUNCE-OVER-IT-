function all() {
    player.collide(border1)
    player.collide(border2)
    player.collide(IN1)
    player.collide(IN2)
    player.collide(IN3)
    player.collide(l1)
    player.collide(l2)
    player.collide(l3)
    player.collide(l4)
    player.collide(l5)
    player.collide(l6)
    player.collide(l7)
    player.collide(l8)
    player.collide(l9)
    player.collide(l10)
    player.collide(l11)
    player.collide(l12)
    player.collide(l13)
    player.collide(l14)
    player.collide(l15)
    player.collide(l16)
    player.collide(l17)
    player.collide(l18)
    player.collide(l19)
    player.collide(l20)
    player.collide(l21)
    player.collide(l22)
    player.collide(l23)
    player.collide(l24)
    player.collide(l25)

    player.shapeColor = 'red'
    border1.shapeColor = 'black'
    border2.shapeColor = 'black'

    l4.setCollider('circle', 0, 0, 52)
    l8.setCollider('circle', 0, 0, 10)
    l9.setCollider('circle', 0, 0, 15)

    IN1.visible = false
    IN2.visible = false
    IN3.visible = false

}