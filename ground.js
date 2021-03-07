class Ground {
    constructor(x, y, width, height) {
        var ground_options ={
            isStatic: true
        }
      
      this.body = Bodies.rectangle(x, y, width, height, ground_options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var gr = this.body.position;
     
      rectMode(CENTER);
      fill("skyblue");
      rect(gr.x, gr.y, this.width, this.height);
      
    }
  };  