import React, { Component } from "react";
import Counters from "./components/Counters/Counters";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "tachyons";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  handleAddCounter = () => {
    const { counters } = this.state;
    if (counters.length === 0) {
      counters.push({ id: 1, value: 0 });
    } else {
      counters.push({ id: counters[counters.length - 1].id + 1, value: 0 });
    }
    this.setState(counters);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleResetAll = () => {
    const { counters } = this.state;
    this.setState(counters.map(c => (c.value = 0)));
  };

  handleResetCounter = counterId => {
    const { counters } = this.state;
    const index = counters.indexOf(counterId);
    this.setState(Object.assign({}, (counters[index].value = 0)));
  };

  handleIncrement = counterId => {
    const { counters } = this.state;
    counters.map(c => (counterId === c.id ? c.value++ : c));
    this.setState(counters);
  };

  handleDecrement = counterId => {
    const { counters } = this.state;
    counters.map(c => (counterId === c.id ? c.value-- : c));
    this.setState(counters);
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAddCounter={this.handleAddCounter}
            onResetAll={this.handleResetAll}
            onResetCounter={this.handleResetCounter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
      </React.Fragment>
    );
  }
}

export default App;
