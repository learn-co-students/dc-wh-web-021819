import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  increment = (num) => {
    this.props.dispatch({type: "PLUS", payload: num})
  };

  decrement = (num) => {
    this.props.dispatch({type: "MINUS", payload: num})
  };

  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <h3>{`The current count is less than ${this.props.count + 5 - this.props.count % 5}`}</h3>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {count: store.count}
}

export default connect(mapStateToProps)(Counter)
