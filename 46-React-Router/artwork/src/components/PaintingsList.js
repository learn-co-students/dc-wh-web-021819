import React from 'react'
import Painting from './Painting'
import Searchbar from './Searchbar'

class PaintingsList extends React.Component{
  componentDidUpdate(){
    console.log('PaintingsList componentDidUpdate')
  }

  componentDidMount(){
    console.log('PaintingsList componentDidMount')
  }

  render(){
    console.log('PaintingsList render')
    let {onSearchHandler, filterTerm, paintings} = this.props
    let filteredPaintings = paintings.filter((painting) => painting.title.includes(filterTerm))
    return(
      <div>
      <Searchbar onChangeHandler={onSearchHandler} value={filterTerm}/>
      {filteredPaintings.map(painting => <Painting
        key={painting.id}
        painting={painting}
      />)}
      </div>
    )
    }
}
export default PaintingsList
