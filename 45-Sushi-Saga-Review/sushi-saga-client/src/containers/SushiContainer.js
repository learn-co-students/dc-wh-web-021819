import React, { Fragment } from 'react'
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.map(sushi => (
          <Sushi sushi={sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
          ))}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
