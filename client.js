var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');

//Make a Line
// c.beginPath();//start the line
// c.moveTo(50, 300);
// c.lineTo(300,100);
// c.lineTo(400,400);

//add color to line
// c.strokeStyle = 'pink';

//Make a Square
// c.fillRect(100,100,100,100)
// c.fillStyle= 'rgba(255,0,0,0.5)';
// c.fillRect(250,300,50,150)// x-position, y-position, height, width

// Arc / Circe
// c.beginPath();// otherwise we connect our circle to our line
// c.arc(300,300, 30, 0, Math.PI * 2, true)// x-position, y-position, radius, startAngle: float, endAngle: float, drawCounterClockwise: boolean
// c.stroke();

//make many circles
// for(let i=0;i<10;i++){
//     let x = Math.random()* window.innerWidth;
//     let y = Math.random()* window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }
let mouse = {
    x: undefined,
    y: undefined,
}

let maxRadius= 40;
let minRadius=5;

let colorArray = ['tomato','#43281C','#C06E52','#48392A','#FBF2C0']

window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
})

class Circles {
    constructor(x,y,dx,dy,radius){
        this.x =x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius= radius;
        this.color =//`rgba(${Math.random()*250},${Math.random()*250},${Math.random()*250},${Math.random()})`
        colorArray[Math.floor(Math.random()*colorArray.length)]
    }

    draw() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
        c.fillStyle= this.color;
    }

    update() {
        if(this.x+this.radius > innerWidth || this.x- this.radius < 0){
            this.dx= -this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y- this.radius < 0){
            this.dy= -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y-this.y > -50){
                if(this.radius< maxRadius){
                    this.radius +=3;
                }
            } else if(this.radius> this.minRadius) {
                this.radius -=1;
            }

        this.draw();
    }
}

let circleArray = [];

for(let i = 0; i<1500; i++){
    let radius= Math.random()*10 + 1;
    let x=Math.random() * (innerWidth - radius * 2) + radius ;
    let y=Math.random() * (innerHeight - radius * 2) + radius;
    let dy=(Math.random() -0.5) *2;
    let dx=(Math.random() -0.5) *2;
    circleArray.push(new Circles(x,y,dx,dy,radius))
}

console.log(circleArray);

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(let i = 0; i< circleArray.length; i++){
        circleArray[i].update();
    }
    
}

animate();