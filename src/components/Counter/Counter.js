import React, { Component } from "react";
import "./Counter.css";
import "tachyons";

class Counter extends Component {
  render() {
    const {
      counter,
      onIncrement,
      onDelete,
      onResetCounter,
      onDecrement
    } = this.props;
    return (
      <div>
        <h4>{counter.name}</h4>
        <div className="Counter">
          <div className="Amount">
            <button
              className={
                counter.value === 0
                  ? "f6 link dim br3 ph3 pv2 mb2 dib black b bg-gold"
                  : "f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
              }
            >
              {counter.value === 0 ? "Zero" : counter.value}
            </button>
          </div>
          <div className="Increment">
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black"
              onClick={() => onIncrement(counter.id)}
            >
              Increment
            </button>
          </div>
          <div className="Decrement">
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black"
              onClick={() => {
                if (counter.value === 0 && window.confirm("Delete this?")) {
                  onDelete(counter.id);
                }
                if (counter.value === 0) {
                  onResetCounter(counter);
                } else {
                  onDecrement(counter.id);
                }
              }}
            >
              Decrement
            </button>
          </div>
          <div className="Delete">
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib bg-dark-red"
              onClick={() => onDelete(counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
