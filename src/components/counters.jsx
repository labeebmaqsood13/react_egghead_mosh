//Prettier+simple react snippets imrc cc
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; // Object destructuring
    return (
      <div>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            {/* Object destructuring onReset here refers to this.props.onReset */}
            Reset state
          </button>
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
