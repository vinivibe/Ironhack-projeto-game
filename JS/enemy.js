class Enemy{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
        this.life = 2;

    }

    drawEnemy(){
        enemyImg.src = 'Img/zumbi1.png'
        context.drawImage(enemyImg,this.eixoX, this.eixoY,this.width,this.height);
    }
    moving(){
       if(frame <= 1500){
        this.eixoX -= 2;
        console.log('stg 1') 
       } else if (frame > 1500 && frame <= 2500){
        this.eixoX -= 3;
        console.log('stg2')
       } else if (frame > 2500 && frame <= 3500){
        this.eixoX -= 4;
        console.log('stg3')
       } else if (frame > 3500 && frame <= 4500){
        this.eixoX -= 5;
        console.log('stg4')
       } else if (frame > 4500){
        this.eixoX -= 10;
        console.log('stg5')
       }

    } 
    receiveDamage(){
        this.life -= 1;
    }


}
// 