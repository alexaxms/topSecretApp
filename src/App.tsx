import React from "react";
import Board from "./components/board/Board";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Container">
        <Board />
      </div>
    </div>
  );
};

export default App;
