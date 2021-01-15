let p = document.createElement('p');
document.body.appendChild(p);
let para = document.querySelector('p');

let button = document.createElement('button');
para.appendChild(button);
let btn = document.querySelector('button');
btn.textContent = 'Play Again';


function draw() {
  for(let i = 0; i<11; i++){
    let div = document.createElement('div');
    para.appendChild(div);
    div.setAttribute('id',`div${i}`);
   } 
}
          
draw();
           
 
let divs = document.querySelectorAll('div');

btn.onclick = function() {
  if(newGame == true){
    draw();
  }
  for(let i = 0; i<11; i++){ 
    divs[i].textContent = '';
 }
}




let newGame = false;          
let player1 = 'X';
let player2 = 'O';
let turn = player1;

para.addEventListener('click', function(e){ 
  if( (turn == player1) && e.target.textContent == ''){
    e.target.textContent = player1;
    turn = player2;
  }else if((turn == player2) && e.target.textContent == ''){
    e.target.textContent = player2;
    turn = player1;
 });
                
                
function win(player){
  let winStates = [ 
    [0,1,2],
    [4,5,6],
    [8,9,10],
    [0,4,8],
    [1,5,9],
    [2,6,10],
    [0,5,10],
    [2,5,8]  
 ];  
               
 for(i=0; i<winStates.length; i++){
   if((divs[winStates[i][0]].textContent == divs[winStates[i][1]].textContent) && (divs[winStates[i][1]].textContent == divs[winStates[i][2]].textContent) && (divs[winStates[i][2]].textContent == player)) {
     document.body.textContent = `${player} WON!`;
     newGame = true;
     break;
     }
   }
 }
              
