import React, { useState } from 'react';

import './App.css';
import Square from './components/Square';

function App() {
  const [xIsNext, setXIsNext] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null));

  let winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = 'Next Player is ' + (xIsNext ? 'X' : 'O');
  }

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    
    // 이미 값이 있거나 승자가 나왔다먄 return
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }


  return (
    <>
      <p>{status}</p>
      <div className="square-wrap">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

export default App;

const calculateWinner = (squares) => {
  
  // 빙고 라인
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c]) {
       return squares[a];
    } 
  }

  return null;
}