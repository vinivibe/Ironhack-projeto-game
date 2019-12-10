class Ninja{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
    }

    drawPlayer(){
        playerImg.src = '../Img/Attack__000.png'
        context.drawImage(playerImg, 0, 0, 70, this.height, this.eixoX, this.eixoY,this.width,this.height);
     } 
    
}

// 