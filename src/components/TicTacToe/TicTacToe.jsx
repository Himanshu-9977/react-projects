import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <button
        key={i}
        className="w-20 h-20 border border-gray-600 text-3xl font-bold text-white bg-gray-800 hover:bg-gray-700"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(Boolean)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col items-center justify-center py-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe</h1>
      <div className="mb-4 text-xl">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
      </div>
      <button 
        className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setXIsNext(true);
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
