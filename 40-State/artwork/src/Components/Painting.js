import React from 'react'

//functional syntax
const Painting = (props) => {
  let {clickOfPainting, paintingObj} = props
  let {id, image, title, date, artist:{name}, dimensions:{height, width}} = paintingObj
  console.log(paintingObj)
  return (
    <div className="ui card" onClick={()=>{clickOfPainting(paintingObj)}} data-id={id}>
      <div>
        <div data-id={id}>{`${title} by ${name}`}</div>
      </div>
    </div>
  )
}

export default Painting

/*
<img src={image} alt=""/>
<div>{`${title} by ${name}`}</div>
<div>{date}</div>
<div>{height}in. x {width}in.</div>
{metadata}*/
