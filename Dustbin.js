class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      //this.image = loadImage("assets/dustbin.png")

      World.add(world, this.body);
    }
    display(){
      //image(this.image, this.body.position.x, this.body.position.y, 30, 30);
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  