import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TicTacToe from "./pages/TicTacToe.jsx"; // Import the TicTacToe component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} /> {/* Add route for TicTacToe */}
      </Routes>
    </Router>
  );
}

export default App;
