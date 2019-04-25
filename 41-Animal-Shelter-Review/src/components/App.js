import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

const BASE_URL = '/api/pets'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (petObj) => {
    console.log('attempting to adopt pet:', petObj)
    let newArray = this.state.pets.map(p =>
      p === petObj ? {...p, isAdopted: true} : p
    )
    let state = this.state
    debugger
    this.setState({pets: newArray})
    // let copyOfPetsArray = [...this.state.pets]
    // let pet = copyOfPetsArray.find(p => p === petObj)
    // pet.isAdopted = true

  }

  onChangeFilter = event => {
    let filterType = event.target.value
    let newState = {...this.state.filters}
    newState.type = filterType
    this.setState({filters: newState})
  }

  onFindPets = () => {
    // console.log('attempting to find pets')
    //GET fetch
    let url = this.state.filters.type === 'all' ?
      BASE_URL : `${BASE_URL}?type=${this.state.filters.type}`
    fetch(url)
    .then(res => res.json())
    .then(petsArray => {
      //goals is to this.setState({pets})
      this.setState({pets: petsArray})
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeFilter={this.onChangeFilter}
                onFindPets={this.onFindPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                listOfPets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
