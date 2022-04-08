import React from 'react';
import { useState } from 'react';
import Square from './Square';


function Board(props) {
  const [square, setSquare] = useState({});
  const [Xturn, setXTurn] = useState(true);
  console.log(square);

  function renderSquare(i) {
    return ( 
      <Square 
        sqrs={square[i]} 
        onClick={() => handleClick(i)} />
    )
  }

  function handleClick(i) {
    if (props.winner !== null) {
      return;
    }
    if (Xturn) {
      square[i] = 'X';
      setSquare({...square, i: square});
      setXTurn(false);
    } else {
      square[i] = 'O';
      setSquare({...square, i: square});
      setXTurn(true);
    }
    props.win(square);
  }

  return(
    <>
    <table className="board">
      <caption>Tic-Tac-Toe</caption>
      <tbody>
        <tr>
          <td>{renderSquare(0)}</td>
          <td>{renderSquare(1)}</td>
          <td>{renderSquare(2)}</td>
        </tr>
        <tr>
          <td>{renderSquare(3)}</td>
          <td>{renderSquare(4)}</td>
          <td>{renderSquare(5)}</td> 
        </tr>
        <tr>
          <td>{renderSquare(6)}</td>
          <td>{renderSquare(7)}</td>
          <td>{renderSquare(8)}</td>
        </tr>
      </tbody>
    </table>
    <div><p>Next player: {Xturn ? 'X' : 'O'}</p></div>
    
    </>
  );
}

export default Board;