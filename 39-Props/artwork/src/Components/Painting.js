import React from 'react'

//functional syntax
const Painting = ({metadata, paintingObj: {image, title, date, artist:{name}, dimensions:{height, width}}}) => {
  return (
    <div className="ui card centered">
      <div>
        <img src={image} alt="image"/>
        <div>{`${title} by ${name}`}</div>
        <div>{date}</div>
        <div>{height}in. x {width}in.</div>
        {metadata}
      </div>
    </div>
  )
}

export default Painting
