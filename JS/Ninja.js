class Ninja{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
    }

    drawPlayer(imagem){
        context.drawImage(imagem, 0, 0, 70, this.height, this.eixoX, this.eixoY,this.width,this.height);
     } 
    drawAttack(){
        attackImg.src = 'Img/Attack__001.png'
        context.drawImage(attackImg, 0, 0, 70, this.height, this.eixoX, this.eixoY,this.width,this.height);
    }
    
}

// 