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

    const styles = { display: "flex", justifyContent: "space-around" };

    return (
      <div className="Counters o-80 ml5">
        <div className="list pl0 ml0 center">
          <div style={styles}>
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray"
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
