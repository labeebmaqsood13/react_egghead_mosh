import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class MoshApp extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 }
    ]
  };

  constructor(props) {
    super(props); // Calling constructor of parent class
    console.log("App - Constructor", this.props);

    /* in constructor we set state directly and dont call setState func to set state coz this method can only
     be called when a component is rendered n placed in dom and we wont have access to this.props in constructor
     unless we have props passed as argument i.e. props to constructor and to super(parent class's constructor)
         // this.state = this.props.something
    */
  }

  componentWillMount() {
    console.log("App - Will mount");
  }

  componentDidMount() {
    // Perfect place to make ajax calls and call this.setState({ newData })
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // To update one object in counters state only clone that object out of all other objects at different indexes and update it
    // console.log("Counter", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters: counters });
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
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default MoshApp;
