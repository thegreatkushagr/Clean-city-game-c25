class Paper {
    constructor(x,y,dia) {
      var options = {
          isStatic: false,
      }
      this.body = Matter.Bodies.circle(x, y, dia, options)

      this.width = dia;
      this.height = dia;
      this.image = loadImage("assets/paper.png")
      World.add(world, this.body);
    }
    display(){
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      var pos =this.body.position;

      fill("blue");
    }
}