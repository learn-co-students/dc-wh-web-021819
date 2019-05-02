import React, { Component } from 'react';

class FundsForm extends Component {
  state = {
    inputValue: '',
    checked: {}, // {USD: true, Pesos: false}
    radioSelected: 'huey',
  }

  checkboxHandler = (e) => {
    console.log(e.target.name);

    const selected = {[e.target.id]: e.target.checked}
    // const checked = this.state.checked.find(el => el)
    this.setState({
      checked: {...this.state.checked, ...selected},
    },() => {console.log(this.state.checked)})
  }

  radioHandler = (e) => {
    this.setState({ radioSelected: e.target.id }, () => {console.log(this.state.radioSelected)})
  }

  render() {
    return (
      <form onSubmit={this.props.updateMoney} onChange={this.radioHandler}>
        Money:
        <input type="checkbox" id="USD" name="check" />
        <label for="USD">USD</label>

        <input type="checkbox" id="Pesos" name="check" />
        <label for="Pesos">Pesos</label>

        <br/>
        <input type="radio" id="huey" name="drone" value="huey" checked={this.state.radioSelected === 'huey'}/>
        <label for="huey">Huey</label>

        <input type="radio" id="dewey" name="drone" value="dewey" checked={this.state.radioSelected === 'dewey'}/>
        <label for="dewey">Dewey</label>

        <input type="radio" id="louie" name="drone" value="louie" checked={this.state.radioSelected === 'louie'} />
        <label for="louie">Louie</label>


        <input type='submit'/>
      </form>
    )
  }
}

export default FundsForm
