class BigEnemy{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
        this.life = 12;

    }

    drawBigEnemy(){
        enemyImg.src = 'Img/boss.png'
        context.drawImage(bigzumbi,this.eixoX, this.eixoY,this.width,this.height);
    }
    movingg(){
        this.eixoX -= 1
    }
    receiveDamage(){
        this.life -= 1;
    }


}