let p = document.createElement('p');
          document.body.appendChild(p);
          let para = document.querySelector('p');

          let button = document.createElement('button');
          para.appendChild(button);
          let btn = document.querySelector('button');
          btn.textContent = 'Play Again';

          for(let i = 0; i<11; i++){
            let div = document.createElement('div');
            para.appendChild(div);
            div.setAttribute('id',`div${i}`);
          }
           
            let divs = document.querySelectorAll('div');
            btn.onclick = function() {
              for(let i = 0; i<11; i++){ 
                divs[i].textContent = '';
              }
            }

            function win() {
                
            }
            
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
