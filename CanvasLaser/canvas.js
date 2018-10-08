let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

let c = canvas.getContext('2d');
let mouse ={
    x:undefined,
    y:undefined,
}

let lines= [];
let xbeg, ybeg;
// let xinflection;
// let yinflection;
// let xflip;
// let yflip;
// let dx = xend-xbeg;
// let dy = yend-ybeg;
let endx = xbeg+(Math.random() - 0.5)*20
let endy= ybeg + (Math.random() - 0.5) *20
let hasBounced=false

window.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    xbeg = mouse.x;
    ybeg = mouse.y;
})

class Line {
    constructor(begx,begy,endx,endy,dx,dy,slope,hasBounced){
        this.begx = begx;
        this.begy = begy;
        this.endx = endx;
        this.endy = endy;
        this.dx = (this.endx-this.begx);
        this.dy = (this.endy-this.begy);
        this.slope= this.dy/this.dx
        this.hasBounced= hasBounced;
    }

    draw() {
        if(!this.hasBounced && (this.endx >= canvas.width || this.endx<= 0)){
            this.hasBounced = true;
            this.dx = -this.dx;
            xflip= this.endx;
            this.endx=this.begx;
            this.begx=xflip;
            yflip=this.endy;
            this.endy= this.begy+ 2*this.dy
            this.begy=yflip;
            
        }
        if(!this.hasBounced && (this.endy >= canvas.height || this.endy <=0)){
            this.hasBounced = true;
            this.dy = -this.dy;
            this.endx = this.begx+ 2*this.dx;
            this.begx = xflip;
            yflip = this.endy;
            this.endy = this.begy;
            this.begy = yflip;
        }
        this.endx+= this.dx *0.2;
        this.endy+= this.dy *0.2;
        this.begx+= this.dx *0.2;
        this.begy+= this.dy *0.2;
        c.beginPath();
        c.moveTo(this.begx,this.begy);
        c.lineTo(this.endx,this.endy);
        c.strokeStyle='green';
        c.stroke();
    }

    // update() {
        
    //     this.begx +=this.dx;
    //     this.begy +=this.dy;
    //     this.endx += this.dx;
    //     this.endy += this.dy;
    // }
}




function animate() {
    
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    lines.push(new Line(xbeg,ybeg,xbeg+(Math.random() - 0.5)*30+5,ybeg+(Math.random() - 0.5) *30+5,2,2,1));

    for(let i=0;i<100;i++){
        lines[i].draw();
    }

    //for loop using forEach

    /*lines.forEach(l => {
        l.draw();
    })*/


    // c.beginPath();
    // c.moveTo(xbeg,ybeg);
    // c.lineTo(xinflection,yinflection)
    // c.lineTo(xbeg+10,ybeg+10);
    // c.stroke();

    // xbeg += 1;
    // xend+= 1;
    // ybeg += 1;
    // yend +=1;

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