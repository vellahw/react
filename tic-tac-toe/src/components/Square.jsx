import React, { useState } from 'react';

function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue('X');
  // }
  
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;