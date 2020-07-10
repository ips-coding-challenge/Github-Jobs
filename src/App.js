import React from "react";
import "./assets/css/main.scss";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="container">
      <Router>
        <Home path="/" />
        <Details path="/job/:jobId" />
      </Router>
    </div>
  );
}

export default App;
