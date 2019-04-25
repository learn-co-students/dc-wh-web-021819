import React, { Component } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar'
import PaintingsList from './PaintingsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="yellow"
          title="Elephant"
          subtitle="It's irrelephant"
          icon="comment icon"
        />
        <PaintingsList/>
      </div>
    );
  }
}

export default App;
