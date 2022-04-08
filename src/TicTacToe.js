import React, { useState } from 'react';
import Board from './Board';


function TicTacToe() {
  const [winner, setWinner] = useState(null);
  
  function win(square) {
    const wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return setWinner(square[a]);
      }
    }
    return null;
  }

  return (
    <>
      <Board win={win} winner={winner} />
      <div className="winner">
        {winner !== null ? `${winner} WON!!!` : null}
      </div>
    </>
  );  
}

export default TicTacToe;