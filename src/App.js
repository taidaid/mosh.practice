import React, { Component } from "react";
import Counters from "./components/Counters/Counters";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "tachyons";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Counters />
        <Navbar />
      </div>
    );
  }
}

export default App;
