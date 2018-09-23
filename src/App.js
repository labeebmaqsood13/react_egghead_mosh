// ------------------ Basic Prop ------------------------ //

// import React from 'react';

// // const App = () => <h1>Hello</h1>

// // export default App

// class App extends React.Component{
//   render(){
//     return(
//       <h1>{this.props.txt}</h1>
//     )
//   }
// }

// // App.propTypes = {
// //   txt: React.PropTypes.string
// // }

// // Default prop value for txt key
// App.defaultProps = {
//   txt: "this is the default txt"
// }

// export default App

// ----------------- Basic  State -------------- //

// import React from 'react';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt : "this is the state txt",
//       cat : 0
//     }
//   }
//   update(e){
//     this.setState({txt:e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//       </div>
//     )
//   }
// }

// export default App

// ----------------- 6th tutorial - Use React Components as Children for Other Components -------------- //

// import React from 'react'

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt : "this is the state txt",
//       cat : 0
//     }
//   }
//   update(e){
//     this.setState({txt:e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//       </div>
//     )
//   }
// }

// const Widget = (props) => <input type="text" onChange={props.update} />

// export default App

// ----------------- 7th tutorial - Access Nested DAta with Reacts props.children -------------- //
// import React from 'react'

// class App extends React.Component{
//   render(){
//     return <Button>I <Heart /> React</Button>
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component{
//   render(){
//     return <span>&hearts;</span>
//   }
// }

// export default App

// ----------------- 8th tutorial - Add Custom propType Validation to React Components -------------- //
// import React from 'react'

// class App extends React.Component{
//   render(){
//     return <Title text="This is from text prop" />
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// // Title.propTypes = {
// //   text: React.PropTypes.string.isRequired
// // }

// export default App

// ----------------- 9th tutorial - Normalize Events with Reacts Synthetic Event System -------------- //

// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {currentEvent: '__'}
//     this.update = this.update.bind(this);
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render(){
//     return(
//       <div>
//         <textarea cols="30" rows="10" onKeyPress={this.update} onCopy={this.update} onCut/>
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }

// export default App

// ----------------- 11th n 12th tutorial - Manage React Component State with Lifecycle methods -------------- //

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {val: 0};
//     this.update = this.update.bind(this);
//   }
//   update(e){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log('component will mount');
//     this.setState({m: 2});
//   }
//   render(){
//     console.log('render');
//     return(
//       <button onClick={this.update}>{this.state.val * this.state.m}</button>
//     )
//   }
//   componentDidMount(){
//     console.log('component did mount');
//     // console.log(ReactDOM.findDOMNode(this))
//     // Saving this setinterval call as a component class property in order to umnount or use it further
//     this.new = setInterval(this.update, 500)
//   }
//   componentWillUnmount(){
//     console.log('component will unmount');
//     clearInterval(this.new);
//   }
// }

// class Wrapper extends React.Component{

//     mount(){
//       ReactDOM.render(<App />, document.getElementById('a'));
//     }
//     unmount(){
//       ReactDOM.unmountComponentAtNode(document.getElementById('a'));
//     }
//     render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }

// export default Wrapper

// ----------------- 13th tutorial - Control React Component Updates When New Props Are Received -------------- //
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {increasing: false}
//   }
//   update(){
//     // console.log('here')
//     ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'))
//   }
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val});
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     // Prevents re-render
//     return nextProps.val % 5 === 0;
//   }
//   render(){
//     console.log(this.state.increasing)
//     return(
//       <button onClick={this.update.bind(this)} >
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log(`prevProps: ${prevProps.val}`)
//   }
// }

// App.defaultProps = {val: 0}
// export default App

// ----------------- 14th tutorial - Use map to Create React Components from Arrays of Data -------------- //
// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount(){
//     fetch( 'https://swapi.co/api/people/?format=json' )
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}) )
//   }
//   filter(e){
//     this.setState({filter: e.target.value});
//   }
//   render(){
//     let items = this.state.items;
//     if(this.state.filter){
//       items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
//       )
//     }
//     return(
//       <div>
//         <input onChange={this.filter.bind(this)} />
//         {items.map(item =>
//           // <h4 key={item.name}>{item.name}</h4>
//           <Person key={item.name} person={item} />)
//         }
//       </div>
//     )
//   }
// }

// const Person = (props) => <h4>{props.person.name}</h4>

// export default App

// // ----------------- 15th tutorial - Compose React Component Behavior with Higher Order Components -------------- //
// // WHY HOC:
// // 1) to share info or some new thing between all components or the ones we want
// // 2) hide or show something in some place and inverse in other place
// import React from 'react'

// const HOC = (InnerComponent) => class extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {count: 0};
// 		// this.update = this.bind.update(this); //How can we do it here??
// 	}
// 	update(){
// 		this.setState({count: this.state.count+1});
// 	}
// 	componentWillMount(){
// 		console.log('component will mount using hoc')
// 	}
// 	render(){
// 		return(
// 			<InnerComponent
// 				{...this.props}
// 				{...this.state}
// 				update={this.update.bind(this)}
// 			/>
// 		)
// 	}
// }

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Button>button</Button>
//         <hr />
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }

// const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

// class Label extends React.Component{
//   componentWillMount(){
//   	console.log('labeb will mount')
//   }

//   render(){
//     return(
//       <label onMouseMove={this.props.update} >
//       	{this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }

// const LabelHOC = HOC(Label)

// export default App




// // ----------------- 16th tutorial - Build a JSX Live Compiler as a React Component -------------- //

// import React from 'react'

// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>Hello</div>
// 		)
// 	}
// }

// export default App

