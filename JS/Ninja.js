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

// const drawFrame = (frameX, frameY, canvasX, canvasY) => {
//     ctx.drawImage(
//       IMG,
//       frameX * IMG_WIDTH,
//       frameY * IMG_HEIGHT,
//       IMG_WIDTH,
//       IMG_HEIGHT,
//       canvasX,
//       canvasY,
//       SCALE_WIDTH,
//       SCALE_HEIGHT,
//     );
//   };

//   const imgone_width = 100;
//   const imgone_height = 108;
//   const imgtwo_width = 100;
//   const imgtwo_height = 108;
//   const imgthree_width = 100;
//   const imgthree_height = 108;
//   const imgfour_width = 100;
//   const imgfour_height = 108;
//   const imgfive_width = 100;
//   const imgfive_height = 108;
//   const imgsix_width = 100;
//   const imgsix_height = 108;
//   const imgseven_width = 100;
//   const imgseven_height = 108;
//   const imgeight_width = 100;
//   const imgeight_height = 108;
//   const imgten_width = 100;
//   const imgten_height = 108;
 
//   const movement_speed = 1;




// 