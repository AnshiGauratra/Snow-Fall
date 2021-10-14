class createSnow{
    constructor(x,y){
        var options = {
            friction: 0.006,
            restitution:1,
            density: 2,
            isStatic:false           
        }
        this.snow = Bodies.circle(x,y,5,options)
        // Matter.Body.setVelocity(this.body,2)

        this.radius = 5;
        var rand=Math.round(random(1,2))
        var img;
        if(rand===1){
            img="snow4.webp";
        }
     
        if(rand===2){
            img="flake4.png";
        }

        this.image=loadImage(img);
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,1350), y:random(-100,1350)})
        }
    }

    showDrop(){
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,40,40);
    }
}