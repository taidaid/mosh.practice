import React, { Component } from "react";
import Counter from "../Counter/Counter";
import "./Counters.css";
import "tachyons";

class Counters extends Component {
  render() {
    const {
      onResetAll,
      onDelete,
      onIncrement,
      onDecrement,
      onResetCounter,
      counters
    } = this.props;

    return (
      <div className="Counters o-80">
        <div className="list pl0 ml0 center ba b--light-silver br2">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green"
              onClick={onResetAll}
            >
              Reset
            </button>
          </div>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onResetCounter={onResetCounter}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
