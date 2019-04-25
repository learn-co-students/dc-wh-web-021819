import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogPen from './HogPen';

class App extends Component {
  state = {
    hogsList: hogs,
    filterGreased: true,
    filterName: '',
    filterWeight: ''
  }

  returnAllFilteredHogs = () => {
    const result = filterGreasedHogs()
    const r2 = this.filterNameHogs(result)
  }

  filterWeightHogs = () => {

  }

  filterNameHogs = () => {
    
  }

  filterGreasedHogs = () => {
    if (this.filterGreased) {
      return this.state.hogsList.filter(hog => hog.greased)
    } else {
      return this.state.hogsList
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogPen hogs={this.returnAllFilteredHogs()} />
      </div>
    )
  }
}

export default App;
