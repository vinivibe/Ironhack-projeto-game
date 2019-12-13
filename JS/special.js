class Special{
    constructor (x,y,width,height){
        this.eixoX = x;
        this.eixoY = y;
        this.width = width;
        this.height = height;
    }

    drawKunai(){
        kunaiImg.src = 'Img/Kunai.png'
        context.drawImage(kunaiImg,this.eixoX, this.eixoY,this.width,this.height);
    }
    movingg(){   
    this.eixoX += 1;  
    } 
    
}