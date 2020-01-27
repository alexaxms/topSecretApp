import React from "react";
import { Empty } from "antd";

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ padding: 50 }}>
        <Empty
          image="https://upload.wikimedia.org/wikipedia/commons/a/af/Under_construction_icon-yellow.svg"
          imageStyle={{ height: 200 }}
          description={"Under construction..."}
        />
      </div>
    </div>
  );
};

export default App;
