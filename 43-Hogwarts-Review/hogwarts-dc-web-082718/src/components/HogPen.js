import React, { Component } from 'react';
import HogTile from './HogTile';

// This class should contain HogTiles
class HogPen extends Component {
    render() {
        return(
            <div>
                {this.props.hogs.map(hog => <HogTile hog={hog} />)}
            </div>
        )
    }
}

export default HogPen