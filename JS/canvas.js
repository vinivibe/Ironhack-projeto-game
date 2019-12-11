console.log('Salve!!!')
let fundoImg = new Image();
let playerImg = new Image();
playerImg.src = 'Img/Attack__000.png';
let enemyImg = new Image();
let lifeImg = new Image();
let attackImg = new Image();
let gameOverimg= new Image();
attackImg.src = 'Img/Attack__001.png'
let bigzumbi = new Image(); 
bigzumbi.src ='Img/boss.png';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const enemies =[];
const bigenemies = [];
let attackstatus = false;
let zumbiswin = 0
let frame = 0;
let myReq;



function fundo(){
    fundoImg.src = "Img/fundo.jpg";
    context.drawImage(fundoImg, 0, 0); 
}

function drawLife(){
  lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,50,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,150,30)
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg,250,30)
}

function score() {
  var points = Math.floor(frame / 10);
  context.font = "18px serif";
  context.fillStyle = "black";
  context.fillText("Score: " + points, 700, 50);
}

  function drawGameOver(){
    gameOverimg.src='Img/gameover.png';
    context.drawImage(gameOverimg, 0, 0)
  }

let ninja = new Ninja(300,400,80,107);


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
            console.log('Bateu!')
        } else {
            ninja.eixoX -= 30;
        } console.log('left')
          break;
        case 39: // right arrow
        if(ninja.eixoX + ninja.width >= canvas.width){
            ninja.eixoX = canvas.width - ninja.width;
            console.log('Bateu!')
        // } else if (ninja.eixoX > (enemy.eixoX -47)){
        //     ninja.eixoX - enemy.eixoY;
        }
        else {
            ninja.eixoX += 10;
        } console.log('right')
          break;
        case 32 : //space
        attack()
        attackBIG()  

        break;
      }
      }

      function machineZumbi(){
        if(frame % 340 === 0){
          enemies.push(new Enemy(canvas.width,400,90,107));
      };
      enemies.forEach(function(zumbi,idx) {
          zumbi.drawEnemy();
          zumbi.moving();
          if(zumbi.eixoX < -50){
              enemies.splice(idx,1)
          }
      })
      }

      function machineBigZumbi(){
        if(frame % 4000 === 0){
          bigenemies.push(new BigEnemy(canvas.width,200,220,300));
      };
      // console.log(updateGameArea)
      bigenemies.forEach(function(bigzumbi,idx) {
          bigzumbi.drawBigEnemy();
          bigzumbi.movingg();
          if(bigzumbi.eixoX < -50){
              bigenemies.splice(idx,1)
          }
      })
      }

function attack(){
  attackstatus = true;
  enemies.forEach(function(zumbi,idx){
  if(zumbi.eixoX <= ninja.eixoX +120 && zumbi.eixoX >= ninja.eixoX +40){
     zumbi.receiveDamage()
     console.log(zumbi.life)
     console.log(attackstatus)
  }
});
  // attackstatus = false;
}

function attackBIG(){
  attackstatus = true;
  bigenemies.forEach(function(bigzumbi,idx){
  if(bigzumbi.eixoX <= ninja.eixoX +120 && bigzumbi.eixoX >= ninja.eixoX +40){
     bigzumbi.receiveDamage()
     console.log(bigzumbi.life)
     console.log(attackstatus)
  }
});
  // attackstatus = false;
}

function death(){
  enemies.forEach(function(zumbi,idx){
    if (zumbi.life == 0){
      zumbi.eixoX = 1000
    }
  })
}

function deathBigZumbi(){
  bigenemies.forEach(function(bigzumbi,idx){
    if (bigzumbi.life == 0){
      bigzumbi.eixoX = 1000
    }
  })
}


  function gameOver(){
  enemies.forEach(function(zumbi,idx){
    if (zumbi.eixoX < -49 ){
      zumbiswin +=1
    }
  });
  if (zumbiswin >= 5){
    drawGameOver()
    return
    cancelAnimationFrame(myReq);
  }
}




// function updateGameArea()
const updateGameArea = () => {
    fundo();
    drawLife();
    if(attackstatus){
      ninja.drawAttack();
    } else {
      ninja.drawPlayer(playerImg)
    }
    attackstatus = false;

    machineBigZumbi()
    machineZumbi()
    //  adicione aqui 
    
    frame += 2;
    score()    
    death()
    deathBigZumbi()
    myReq = requestAnimationFrame(updateGameArea);
    gameOver()
  }

  myReq = requestAnimationFrame(updateGameArea);


