import React, { Fragment } from 'react'


// {
//   "id": 1,
//   "name": "Tako Supreme",
//   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
// }
const Sushi = ({sushi, eatSushi, eatenSushi}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => eatSushi(sushi)}>
        {
          eatenSushi.includes(sushi) ?
          null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
