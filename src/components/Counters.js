import React, { Component } from "react";
import Counter from "./Counter";
import "./Counters.css";
import "tachyons";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
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
          <button
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green"
            onClick={this.addCounters}
          >
            Add Counter
          </button>
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
