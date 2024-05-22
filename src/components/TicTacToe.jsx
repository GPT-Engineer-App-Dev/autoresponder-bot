import React, { useState } from 'react';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  const calculateWinner = (board) => {
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

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const renderSquare = (index) => (
    <Button
      h="100px"
      w="100px"
      fontSize="2xl"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <VStack spacing={4}>
      <Heading>Tic Tac Toe</Heading>
      <Text>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {board.map((_, index) => renderSquare(index))}
      </Grid>
      <Button onClick={resetGame} mt={4}>Reset Game</Button>
    </VStack>
  );
};

export default TicTacToe;