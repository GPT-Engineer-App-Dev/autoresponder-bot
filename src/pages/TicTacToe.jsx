import React, { useState } from 'react';
import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <Button
      w="100px"
      h="100px"
      fontSize="2xl"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box textAlign="center" py={10}>
      <Heading mb={6}>Tic Tac Toe</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} justifyContent="center">
        {board.map((_, index) => (
          <Box key={index}>{renderSquare(index)}</Box>
        ))}
      </Grid>
      <Box mt={6}>
        {winner ? (
          <Text fontSize="2xl" mb={4}>
            Winner: {winner}
          </Text>
        ) : (
          <Text fontSize="2xl" mb={4}>
            Next Player: {isXNext ? 'X' : 'O'}
          </Text>
        )}
        <Button onClick={resetGame} colorScheme="teal">
          Reset Game
        </Button>
      </Box>
    </Box>
  );
};

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

export default TicTacToe;