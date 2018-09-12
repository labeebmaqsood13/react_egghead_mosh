// ==== Below tutorial covers ======//
//========= JSX
//======= RENDERING LISTS
//===== CONDITIONAL RENDERING
//======= HANDLING EVENTS
//====== UPDATING THE STATE

import React, { Component } from "react";

class Counter extends Component {
  state = {
    // value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // Not being used as this is a controlled component
  // handleIncrement = product => {
  //   // console.log("Increment clicked", this);
  //   this.setState({ value: this.props.counter.value + 1 });
  // };

  render() {
    return (
      // If dont want extra div to wrap h1 n btn then use React.Fragment or <> </>
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter; //Object destructuring done here.
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
