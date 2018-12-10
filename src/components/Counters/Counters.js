import React, { Component } from "react";
import Counter from "../Counter/Counter";
import "./Counters.css";
import "tachyons";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  addCounters = () => {
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

  handleReset = () => {
    const { counters } = this.state;
    this.setState(counters.map(c => (c.value = 0)));
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
      <div className="Counters">
        <div className="list pl0 ml0 center mw6 ba b--light-silver br2">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green"
              onClick={this.addCounters}
            >
              Add Counter
            </button>
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
