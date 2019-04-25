import React from 'react'

const Details = (props) => {
  // if(props.paintingObj){
  //   let {paintingObj: {image, title, date, artist:{name}, dimensions:{height, width}}} = props
  // }
  return props.paintingObj === null ? null : (
    <div className="ui card">
      <div>
        <img src={props.paintingObj.image} alt=""/>
        <div>{`${props.paintingObj.title} by ${props.paintingObj.artist.name}`}</div>
        <div>{props.paintingObj.date}</div>
        <div>{props.paintingObj.dimensions.height}in. x {props.paintingObj.dimensions.width}in.</div>
      </div>
    </div>
  )
}

export default Details
