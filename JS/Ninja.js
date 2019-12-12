class Ninja{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
    }

    drawPlayer(imagem){
        context.drawImage(imagem, this.eixoX, this.eixoY, this.width, this.height);
    } 
    drawAttack(num){
        attackImg.src = `Img/Attack${num}.png`;
        context.drawImage(attackImg, this.eixoX, this.eixoY,this.width,this.height);
        console.log(attackImg);
        
    }
    
}
