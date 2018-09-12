// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App txt="this is the prop text"/>, document.getElementById('root'));
// registerServiceWorker();

// // class App extends React.Component{
// // 	render(){
// // 		return (
// // 			<h1>Hello World!!!</h1>
// // 		)

// // 	}
// // }

// ------------------- React tutorial youtube - MOSH HAMEDANI --------------------------- //
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter"; // 1st section mosh
import Counters from "./components/counters";

// // Stateless componenet
// const element = <h1>Hello World</h1>;
// // Rendering on dom
// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(<Counters />, document.getElementById("root"));
