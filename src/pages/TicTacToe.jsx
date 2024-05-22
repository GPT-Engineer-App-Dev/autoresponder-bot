import React, { useState } from 'react';
import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react';

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
    calculateWinner(newBoard);
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
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>Tic Tac Toe</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} maxW="300px" mx="auto">
        {board.map((value, index) => (
          <Button key={index} h="100px" w="100px" fontSize="2xl" onClick={() => handleClick(index)}>
            {value}
          </Button>
        ))}
      </Grid>
      {winner && (
        <Text fontSize="2xl" mt={6}>
          {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
        </Text>
      )}
      <Button mt={6} onClick={handleReset}>Reset Game</Button>
    </Box>
  );
};

export default TicTacToe;