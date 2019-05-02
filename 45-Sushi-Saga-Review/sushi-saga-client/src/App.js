import React, { Component } from 'react';
import FundsForm from './components/FundsForm';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    currentSushi: [],
    displayIndex: 0,
    eaten: [],
    money: 100,
    showForm: false,
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(allSushi => {
      this.setState({
        allSushi,
        currentSushi: allSushi.slice(0, 4),
      });
    })
  }

  moreSushi = () => {
    const displayIndex = this.state.displayIndex + 4;
    this.setState({
      displayIndex,
      currentSushi: this.state.allSushi.slice(displayIndex, displayIndex+4),
    })
  }

  eatSushi = sushi => {
    const alreadyEaten = this.state.eaten.find(eatenSushi => eatenSushi.id === sushi.id);

    if (!alreadyEaten) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
      });
    } else {
      console.log("NO.");
    }
  }

  updateMoney = amount => {
    console.log("here", amount);
  }

  renderBanner = () => {
    if (this.state.showForm) {
      return (
        <FundsForm updateMoney={this.updateMoney}/>
      )
    } else {
      return (
        <SushiContainer
          currentSushi={this.state.currentSushi}
          eatenSushi={this.state.eaten}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
        />
      )
    }
  }

  render() {
    const banner = this.renderBanner();
    return (
      <div className="app">
        {banner}
      <Table eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
