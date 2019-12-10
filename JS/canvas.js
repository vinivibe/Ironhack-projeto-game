console.log('Salve!!!')
let fundoImg = new Image();
let playerImg = new Image();
let enemyImg = new Image();
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const enemies =[];



function fundo(){
    fundoImg.src = "../Img/fundo.jpg";
    context.drawImage(fundoImg, 0, 0);  
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
            ninja.eixoX -= 3;
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
            ninja.eixoX += 3;
        } console.log('right')
          break;
      }
      }


let frame = 0;

function updateGameArea() {
    fundo();
    ninja.drawPlayer();
    if(frame % 120 === 0){
        enemies.push(new Enemy(canvas.width,400,90,107));
    };
    console.log(updateGameArea)
    enemies.forEach(function(zumbi,idx) {
        zumbi.drawEnemy();
        zumbi.moving();
        if(zumbi.eixoX < -50){
            enemies.splice(idx,1)
        }
    });
    
    frame += 1;
    requestAnimationFrame(updateGameArea);
  }

  requestAnimationFrame(updateGameArea);
  