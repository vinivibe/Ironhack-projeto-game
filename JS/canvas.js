const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const enemies =[];
const bigenemies = [];

let fundoImg = new Image();
let playerImg = new Image();
playerImg.src = 'Img/Attack0.png';
let enemyImg = new Image();
let lifeImg = new Image();
let attackImg = new Image();
let gameOverimg= new Image();
attackImg.src = 'Img/Attack5.png';
let bigzumbi = new Image();
bigzumbi.src ='Img/boss.png';
let fundodois = new Image();
let fundotres = new Image();
let fundoquatro = new Image();
let fundocinco = new Image();
let fundodez = new Image();
let fundoonze = new Image();
let mortalkombat = new Image();
let kunaiImg = new Image();
let attackstatus = false;
let life = 5;
let frame = 0;
let myReq;
let attackMove = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const startgame = () =>{
myReq = requestAnimationFrame(updateGameArea);
} 

const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function fundo() {
  if (frame <= 1500) {
    canvas.style.backgroundImage = 'url("Img/fundo.jpg")';
  } else if (frame <= 2500) {
    canvas.style.backgroundImage = 'url("Img/fundo5.png")';
  } else if (frame <= 3500) {
    canvas.style.backgroundImage = 'url("Img/fundo6.png")';
  } else if (frame <= 4500) {
    canvas.style.backgroundImage = 'url("Img/fundo8.jpg")';
  } else if (frame <= 5000) {
    canvas.style.backgroundImage = 'url("Img/fundo9.jpg")';
  } else if ( frame <= 6000) {
    canvas.style.backgroundImage = 'url("Img/fundo2.png")';
  } else if ( frame <= 7000){
    canvas.style.backgroundImage = 'url("Img/fundo10.png")';
  } else {
    canvas.style.backgroundImage = 'url("Img/fundo.jpg")';
  }
}

function drawLife() {
  let heartX = 50;
  for (let i = 0; i < life; i += 1) {
    lifeImg.src='Img/hearts.png';
    context.drawImage(lifeImg, heartX, 30);
    heartX += 50;
  }
}

function score() {
  var points = Math.floor(frame / 10);
  context.font = '29px fantasy';
  context.fillStyle = 'black';
  context.fillText('SCORE  ' + points, 600, 50);
}


function drawGameOver() {
  gameOverimg.src='Img/gameover.png';
  context.drawImage(gameOverimg, 0, 0);
}

let ninja = new Ninja(300, 400, 100, 109);


document.onkeydown = function(e) {
  switch (e.keyCode) {
    // case 38:  // up arrow
      //ninja.eixoY -= 2
      // break;
    // case 40: // down arrow
      // ninja.eixoY += 2;
      // break;
    case 37: // left arrow
      if (ninja.eixoX < 8){
        ninja.eixoX = 5;
      } else {
        ninja.eixoX -= 30;
      }
      break;
    case 39: // right arrow
      if(ninja.eixoX + ninja.width >= canvas.width){
        ninja.eixoX = canvas.width - ninja.width;
      // } else if (ninja.eixoX > (enemy.eixoX -47)){
      //     ninja.eixoX - enemy.eixoY;
      } else {
        ninja.eixoX += 10;
      }
      break;
    case 32 : //space
      attack();
      attackBIG();
      break;
    case 80: //P
      pauseGame();
      break;
    case 13 : // enter
      startgame();
      break;
    case 82 : // ult
      special();
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
              if (life > 0) {
                life -=1
              }

          }
      })
      }

      function machineBigZumbi(){
        if(frame % 1000 === 0){
          bigenemies.push(new BigEnemy(canvas.width,200,220,300));
      };

      bigenemies.forEach(function(bigzumbi,idx) {
          bigzumbi.drawBigEnemy();
          bigzumbi.movingg();
          if(bigzumbi.eixoX < -50){
              bigenemies.splice(idx,1)
              if (life > 0) {
                life -=1
              }
          }
      })
      }
let count = 0;
let attackStatus = false;

function attack() {
  attackStatus = true;
  const intervalId = setInterval(() => {
    if (count <= 9) {
      // attackImg.src = `Img/Attack${count}.png`;
      // ninja.drawPlayer(attackImg);
      // console.log(attackImg);
      count += 1;
    } else {
      clearInterval(intervalId);
      attackStatus = false;
    }
  }, 40);
  count = 0;
  // setTimeout(() => {
  //   attackStatus = false;
  // }, 50);
  enemies.forEach((zumbi) => {
    if (zumbi.eixoX <= ninja.eixoX + 120 && zumbi.eixoX >= ninja.eixoX + 40) {
      zumbi.receiveDamage();
      console.log(zumbi.life)
    }
  });
}

function attackBIG() {
  bigenemies.forEach((bigzumbi,idx) => {
  if(bigzumbi.eixoX <= ninja.eixoX +120 && bigzumbi.eixoX >= ninja.eixoX +40){
     bigzumbi.receiveDamage()
  }
});
}

const special = () => {

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

function gameOver() {
  if (life <= 0) {
    drawGameOver();
    setTimeout(() => cancelAnimationFrame(myReq), 200);
  }
}
let pause = false;
const pauseGame = () => {
  pause = !pause;
  if (pause) {
    cancelAnimationFrame(myReq);
  } else {
    requestAnimationFrame(updateGameArea);
  }
}

const updateGameArea = () => {
  clearCanvas();
  fundo();
  drawLife();
  if (!attackStatus) {
    ninja.drawPlayer(playerImg);
  // } else if (attackStatus && count % 2 === 0) {
  //   attackImg.src = 'Img/Attack1.png';
  //   ninja.drawPlayer(attackImg);
  // } else if (attackStatus && frame % 3 === 0) {
  //   attackImg.src = 'Img/Attack3.png';
  //   ninja.drawPlayer(attackImg);
  // } else if (attackStatus && frame % 4 === 0) {
  //   attackImg.src = 'Img/Attack5.png';
  //   ninja.drawPlayer(attackImg);
  // } else if (attackStatus && frame % 5 === 0) {
  //   attackImg.src = 'Img/Attack7.png';
  //   ninja.drawPlayer(attackImg);
  } else {
    attackImg.src = 'Img/Attack6.png';
    ninja.drawPlayer(attackImg);
  }
  machineBigZumbi()
  machineZumbi()
  frame += 1;
  score()    
  death()
  deathBigZumbi()
  myReq = requestAnimationFrame(updateGameArea);
  gameOver();
};


