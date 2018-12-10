import React, { Component } from "react";
import "./Counter.css";
import "tachyons";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <div className="Counter">
          <div className="Amount">
            <button
              className={
                this.props.value === 0
                  ? "f6 link dim br3 ph3 pv2 mb2 dib black b bg-gold"
                  : "f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
              }
            >
              {this.props.counter.value === 0
                ? "Zero"
                : this.props.counter.value}
            </button>
          </div>
          <div className="Increment">
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black"
              onClick={() => this.props.onIncrement(this.props.counter.id)}
            >
              Increment
            </button>
          </div>
          <div className="Decrement">
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black"
              onClick={() =>
                this.props.counter.value === 0
                  ? this.props.onDelete(this.props.counter.id)
                  : this.props.onDecrement(this.props.counter.id)
              }
            >
              Decrement
            </button>
            <button
              className="f6 link dim br2 ph3 pv2 mb2 dib bg-dark-red"
              onClick={() => this.props.onDelete(this.props.counter.id)}
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
