class Gift {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction:10,
            density:10,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("gift.jpeg");
        this.width = 100;
      this.height = 100;
        Matter.World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

};