import React from 'react'

//functional component
const Searchbar = (props) => {
  console.log(props.onSearch)
  return (
    <input type="text" className="item"
      onChange={props.onSearch}
      value={props.text}
    ></input>
  )
}

export default Searchbar
