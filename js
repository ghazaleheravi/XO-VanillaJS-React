
 let p = document.createElement('p');
          document.body.appendChild(p);
          let para = document.querySelector('p');

          let button = document.createElement('button');
          document.body.appendChild(button);
          let btn = document.querySelector('button');
          btn.textContent = 'Play Again';

         
            for(let i = 0; i<11; i++){
              let div = document.createElement('div');
              para.appendChild(div);
              div.setAttribute('id',`div${i}`);
            } 
          
          
        

          let divs = document.querySelectorAll('div');
            
            
          

            let winCheck = false;
            let player1 = 'X';
            let player2 = 'O';
            let turn = player1;

            btn.onclick = function() {
            for(let i = 0; i<11; i++){
              divs[i].textContent = '';           
            }
             turn = player1;
          }
            para.addEventListener('click', function(e){
              if(e.target.textContent == '' && turn == player1){
                e.target.textContent = player1;
                win(player1);
                turn = player2;
                
                 
              }else if(e.target.textContent == '' && turn == player2){
                    e.target.textContent = player2;
                    win(player2);
                    turn = player1; 
                    
                }  
                draw();  
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
                 window.setTimeout(function(){alert( `${player} WON!`)},100);
                 winCheck = true;
                 break;
                }
              }
            }

     
            
           
            function draw(){
              let check = true;  
              for(let i = 0; i<11; i++){
                if(divs[i].textContent == '' && !(i == 3 || i == 7)){
                  check = false;
                  break;  
                }
               }
                if(check==true && winCheck==false){
                  window.setTimeout(function(){alert( `DRAW!`)},100);  
                }
            } 

            
         
