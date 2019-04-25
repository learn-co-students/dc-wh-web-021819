import React, { Component } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar'
import PaintingsList from './PaintingsList'

class App extends Component {
  state = {
    searchTerm: ''
  }

  changeSearchTerm = (event) => {
    // event.persist()
    // console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
    //this.state.searchTerm = "" THIS IS BAD
  }

  render() {
    return (
      <div className="App">
        <Navbar
          color="yellow"
          title="Elephant"
          subtitle="It's irrelephant"
          icon="comment icon"
          onSearch={this.changeSearchTerm}
          text={this.state.searchTerm}
        />
        <PaintingsList searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
