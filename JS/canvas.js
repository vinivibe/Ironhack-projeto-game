

function fundo(){
  if(frame >= 0 && frame <= 1500){
    fundoImg.src = "Img/fundo.jpg";
    context.drawImage(fundoImg, 0, 0); 
  } else if(frame > 1500 && frame <= 2500){
    fundodois.src = "Img/fundo5.png";
    context.drawImage(fundodois, 0, 0); 
  } else if (frame > 2500 && frame <= 3500 ) {
    fundotres.src = "Img/fundo6.png";
    context.drawImage(fundotres, 0, 0); 
  } else if (frame > 3500 && frame <= 4500) {
    fundoquatro.src = "Img/fundo8.jpg";
    context.drawImage(fundoquatro, 0, 0);
  } else if (frame > 4500 && frame <= 5000){
    fundocinco.src = "Img/fundo9.jpg";
    context.drawImage(fundocinco, 0, 0);
  } else {
    fundodez.src = "Img/fundo10.png";
    context.drawImage(fundodez, 0, 0);
    mortalkombat.src = "Img/Toasty.png";
    context.drawImage(mortalkombat, 600, 40);
}
}

function drawLife(){
    
  // context.font = "25px serif";
  // context.fillStyle = "black";
  // context.fillText("Life: " + life, 100, 50);


  if(life === 1){
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,100,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,150,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,200,30)
  } else if (life === 2){
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,100,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,150,30)
    lifeImg.src='Img/hearts.png';
  } else if (life === 3){
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,100,30)
    lifeImg.src='Img/hearts.png';
  } else if (life === 4){
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
  } else {
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,100,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,150,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,200,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,250,30)
  }
   
}

function score() {
  var points = Math.floor(frame / 10);
  context.font = "29px fantasy";
  context.fillStyle = "black";
  context.fillText("SCORE  " + points, 600, 50);
}


  function drawGameOver(){
    gameOverimg.src='Img/gameover.png';
    context.drawImage(gameOverimg, 0, 0)
  }

let ninja = new Ninja(300,400,100,109);


document.onkeydown = function(e) {
switch (e.keyCode) {
        case 38: // up arrow
        //   ninja.eixoY -= 2
        //   console.log('up')
          break;
        case 40: // down arrow
        //   ninja.eixoY += 2;
        // console.log('down')
          break;
        case 37: // left arrow
        if (ninja.eixoX < 8){
            ninja.eixoX = 5;
            // console.log('Bateu!')
        } else {
            ninja.eixoX -= 30;
        } 
        // console.log('left')
          break;
        case 39: // right arrow
        if(ninja.eixoX + ninja.width >= canvas.width){
            ninja.eixoX = canvas.width - ninja.width;
            // console.log('Bateu!')
        // } else if (ninja.eixoX > (enemy.eixoX -47)){
        //     ninja.eixoX - enemy.eixoY;
        }
        else {
            ninja.eixoX += 10;
        } 
        // console.log('right')
          break;
        case 32 : //space
        attack()
        attackBIG()  

        break;
      }
      }

      function machineZumbi(){
        if(frame % 120 === 0){
          enemies.push(new Enemy(canvas.width,400,70,107));
      };
      enemies.forEach(function(zumbi,idx) {
          zumbi.drawEnemy();
          zumbi.moving();
          if(zumbi.eixoX < 0 - zumbi.width){
              enemies.splice(idx,1)
              life -=1

          }
      })
      }

      function machineBigZumbi(){
        if(frame % 4000 === 0){
          bigenemies.push(new BigEnemy(canvas.width,200,220,300));
      };

      bigenemies.forEach(function(bigzumbi,idx) {
          bigzumbi.drawBigEnemy();
          bigzumbi.movingg();
          if(bigzumbi.eixoX < -50){
              bigenemies.splice(idx,1)
              life -=1
          }
      })
      }
let count = 0
function attack(){
  setInterval(() => {
    if (count <= 9) {
      ninja.drawAttack(count);
      count += 1;
    } else {
      clearInterval();
    }
  }, 1000)
  count = 0;
  enemies.forEach(function(zumbi,idx){
    if(zumbi.eixoX <= ninja.eixoX +120 && zumbi.eixoX >= ninja.eixoX +40){
      zumbi.receiveDamage()
      // console.log(zumbi.life)
      // console.log(attackstatus)
    }
  });
}

function attackBIG(){
  attackstatus = true;
  bigenemies.forEach((bigzumbi,idx) => {
  if(bigzumbi.eixoX <= ninja.eixoX +120 && bigzumbi.eixoX >= ninja.eixoX +40){
     bigzumbi.receiveDamage()
    //  console.log(bigzumbi.life)
    //  console.log(attackstatus)
  }
});
  // attackstatus = false;
}

function death(){
  enemies.forEach(function(zumbi,idx){
    if (zumbi.life === 0){
      enemies.splice(idx,1)
    }
  })
}

function deathBigZumbi(){
  bigenemies.forEach(function(bigzumbi,idx){
    if (bigzumbi.life === 0){
      bigenemies.splice(idx,1)

    }
  })
}


  function gameOver(){
  enemies.forEach(function(zumbi,idx){
    // console.log(zumbi.eixoX)
  });
  if (life >= 5){
    drawGameOver()
    return
    cancelAnimationFrame(myReq);
  }
}




const updateGameArea = () => {
    fundo();
    drawLife();
    ninja.drawPlayer(playerImg);
    machineBigZumbi()
    machineZumbi()
    frame += 1;
    score()    
    death()
    deathBigZumbi()
    myReq = requestAnimationFrame(updateGameArea);
    // gameOver()
    console.log(life)
  }

  myReq = requestAnimationFrame(updateGameArea);


