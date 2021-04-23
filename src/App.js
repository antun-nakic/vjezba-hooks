import React from "react";
import Prva from "./components/Prva";
import Druga from "./components/Druga";
import Treca from "./components/Treca";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Treca />
      <hr />
      <Druga />
      <hr />
      <Prva />
    </div>
  );
}

export default App;
