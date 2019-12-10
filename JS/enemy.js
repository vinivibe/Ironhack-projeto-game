class Enemy{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
    }

    drawEnemy(){
        enemyImg.src = '../Img/Zumbi1.png'
        context.drawImage(enemyImg,this.eixoX, this.eixoY,this.width,this.height);
    }
    moving(){
        this.eixoX -= 1
    }

}