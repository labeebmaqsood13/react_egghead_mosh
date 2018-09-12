import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary ml-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// Stateless functional component (use 'sfc' to generate stateless functional component from react snippets extension)
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
