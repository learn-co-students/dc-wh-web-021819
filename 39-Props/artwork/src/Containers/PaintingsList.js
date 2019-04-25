import React, {Component} from 'react'
import Painting from '../Components/Painting'
import paintingsData from '../paintings'

class PaintingsList extends Component {

  generateArrayOfPaintingJSX = () => {
    return paintingsData.map(painting => <Painting
      key={painting.id}
      paintingObj={painting}
      metadata="I am some data"
    />)
  }

  render(){
    return (
      <div className="paintings-list">
        {this.generateArrayOfPaintingJSX()}
      </div>
    )
  }
}

export default PaintingsList
