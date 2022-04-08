import React from 'react';

function Square(props) { 
  console.log('props: ', props);

  return (
    <button className="square" onClick={props.onClick}>
      {props.sqrs}
    </button>
  );
}

export default Square;