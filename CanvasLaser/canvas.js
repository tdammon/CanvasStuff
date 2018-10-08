let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

let c = canvas.getContext('2d');
let mouse ={
    x:undefined,
    y:undefined,
}

window.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    xbeg = mouse.x;
    ybeg = mouse.y;
})

class Line {
    constructor(begx,begy,endx,endy,dx,dy,slope){
        this.begx = begx;
        this.begy = begy;
        this.endx = endx;
        this.endy = endy;
        this.dx = (endx-begx);
        this.dy = (endy-begy);
        this.slope= dy/dx
    }

    draw() {
        c.beginPath();
        c.moveTo(this.begx,this.begy);
        c.lineTo(this.endx,this.endy);
        c.stroke();
    }

    // update() {
        
    //     this.begx +=this.dx;
    //     this.begy +=this.dy;
    //     this.endx += this.dx;
    //     this.endy += this.dy;
    // }
}

//let xbeg = mouse.x;
//let ybeg = mouse.y;
let xend = 420;
let yend = 220;
// let xinflection;
// let yinflection;
// let xflip;
// let yflip;
// let dx = xend-xbeg;
// let dy = yend-ybeg;

function animate() {
    
    requestAnimationFrame(animate);
    //c.clearRect(0,0,innerWidth,innerHeight);
    
    new Line(xbeg,ybeg,xbeg+10,ybeg+10,10,10,1)

    c.beginPath();
    c.moveTo(xbeg,ybeg);
    // c.lineTo(xinflection,yinflection)
    c.lineTo(xbeg+10,ybeg+10);
    c.stroke();

    xbeg += 1;
    xend+= 1;
    ybeg += 1;
    yend +=1;

    // slope=(yend-ybeg)/(xend-xbeg);

    // if(xend >= innerWidth || xend <=0){
    //     xinflection = xend;
    //     yinflection = yend;
    //     dx=-dx;
    //     xflip=xend;
    //     xend=xbeg;
    //     xbeg=xflip;
    //     yflip=yend;
    //     yend= ybeg+ 2*dy
    //     ybeg=yflip;
    //     if(xbeg >= innerWidth || xbeg <=0){
    //         xinflection = undefined;
    //         yinflection = undefined
    //     }
    // }
    // if(yend >= innerHeight || yend <=0){
    //     xinflection = xend;
    //     yinflection = yend;
    //     dy = -dy;
    //     xflip=xend;
    //     xend = xbeg+ 2*dx;
    //     xbeg = xflip;
    //     yflip = yend;
    //     yend = ybeg;
    //     ybeg = yflip;
    //     if(ybeg >= innerWidth || ybeg <=0){
    //         xinflection = undefined;
    //         yinflection = undefined
    //     }
    // }
    // xbeg+=1
    // ybeg+=1
    // xend+=1
    // yend+=1
    // console.log(xbeg,ybeg,xend,yend);

}

animate();