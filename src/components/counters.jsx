import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 }
    ]
  };

  handleIncrement = counter => {
    // console.log("Counter", counter);
    const counters = [...this.state.counters];
    counters[0] = { ...counter };
    counters[0].value++;
    console.log(this.state.counters[0]);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    // console.log("Event handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset state
          </button>
        </div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
