class Enemy{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
        this.life = 3;

    }

    drawEnemy(){
        enemyImg.src = '../Img/Zumbi1.png'
        context.drawImage(enemyImg,this.eixoX, this.eixoY,this.width,this.height);
    }
    moving(){
        this.eixoX -= 2.5
    }
    receiveDamage(){
        this.life -= 1;
    }


}
// 