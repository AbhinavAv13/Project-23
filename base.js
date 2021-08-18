class base {
 constructer(x,y,width,height) {
     var option = {
         isStatic: true
     }
    
 this.down = Bodies.rectangle(x,y,width,height,option);
 this.width =   width;
 this.height = height;
 this.image = loadImage("./assests/base2.png");

 World.add(world,this.body);


    }

    display
    }
    