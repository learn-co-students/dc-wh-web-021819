import React, {Component} from 'react'
import Header from './Header'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Header/>

      </div>
    );
  }
}

export default App
