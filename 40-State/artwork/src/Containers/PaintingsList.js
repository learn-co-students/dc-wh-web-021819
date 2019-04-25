import React, {Component} from 'react'
import Painting from '../Components/Painting'
import paintingsData from '../paintings'
import Searchbar from '../Components/Searchbar'
import Details from '../Components/Details'

class PaintingsList extends Component {
  constructor(){
    super()
    this.state = {
      selectedPainting: null
    }
  }

  changeSelectedPainting = (painting) => {
    console.log(painting)
    // event.persist()
    // let id = event.target.dataset.id
    // let painting = paintingsData.find(painting => painting.id === id)
    this.setState({selectedPainting: painting})
  }

  generateFilteredListOfPaintings = () => {
    return paintingsData.filter(painting =>
      painting.title.includes(this.props.searchTerm))
  }

  generateArrayOfPaintingJSX = () => {
    return this.generateFilteredListOfPaintings().map(painting =>
      <Painting
        key={painting.id}
        paintingObj={painting}
        clickOfPainting={this.changeSelectedPainting}
      />)
  }

  render(){
    return (
      <div className="paintings-list">
      <Details paintingObj={this.state.selectedPainting}/>

        {this.generateArrayOfPaintingJSX()}
      </div>
    )
  }
}

export default PaintingsList
