var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height= innerHeight;

let mouse ={
    x: undefined,
    y: undefined,
}

let colors = ['#8D11FF','#37A5E8','#49FF6D','#49FF6D','#FFA050']

let gravity = 0;
let friction = 1;

addEventListener("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

class Ball {
    constructor(x,y,dx,dy,radius,color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy= dy;
        this.radius = radius;
        this.color = color;
    }

    update() {
        if(this.y + this.radius + this.dy> canvas.height ||
            this.y - this.radius < 0){
            this.dy = -this.dy *friction;
        } else {
            this.dy += gravity;
        }
        if(this.x + this.radius + this.dx > canvas.width ||
            this.x - this.radius < 0){
                this.dx = -this.dx;
            }
        if((Math.abs(this.y-mouse.y)<100)&&(Math.abs(this.x-mouse.x)<100)){    
            if(this.y <= mouse.y ){
                this.dy = Math.abs(this.dy)
                this.dy +=.1
            } else {
                this.dy = -Math.abs(this.dy)
                this.dy -=.1
            }
            if(this.x <= mouse.x ){
                this.dx = Math.abs(this.dx)
                this.dx +=.1
            } else {
                this.dx = -Math.abs(this.dx)
                this.dx -=.1
            }
        }
        this.draw();
        this.y +=this.dy;
        this.x +=this.dx;
    };

    draw() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI* 2, false);
        c.fill();
        c.stroke();
        c.fillStyle= this.color;
        c.closePath();
    };
}
let ball;
let ballArray = [];

function init() {
    for(let i=0;i<500;i++){
        let x = Math.random() * canvas.width/1.1 + 25;
        let y = Math.random() * canvas.height /3 +200;
        let radius = Math.random() * 20 +5;
        let dx = (Math.random() -0.5) *4;
        let dy = (Math.random() -0.5) *4;
        let color = colors[Math.floor(Math.random()*5)]
        ballArray.push(new Ball(x,y,dx,dy,radius,color));
    }
    console.log(ballArray)
}
init();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<ballArray.length;i++){
        ballArray[i].update();
    }
    //ball.update();
}

animate();