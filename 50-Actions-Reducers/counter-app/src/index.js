import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const initialState = {
  count: 123
}

const reducer = (oldState=initialState, action) => {
  console.log("Old State:", oldState, "Action:", action)
  switch(action.type){
    case "PLUS":
      return {...oldState, count: oldState.count + action.payload}
    case "MINUS":
      return {...oldState, count: oldState.count - action.payload}
    default:
      return oldState
  }
  // if(oldState === undefined){
  //   return {count: 123}
  // }
}

let store = createStore(reducer)
console.log("STORE IS SET UP: ", store.getState())

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (num) => {
    store.dispatch({type: "PLUS", payload: num})
  };

  decrement = (num) => {
    store.dispatch({type: "MINUS", payload: num})
  };

  render() {
    return (
      <header className="App-header">
      <h1>{store.getState().count}</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </header>
    );
  }
}

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <h3>{`The current count is less than ${store.getState().count + 5 - store.getState().count % 5}`}</h3>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
