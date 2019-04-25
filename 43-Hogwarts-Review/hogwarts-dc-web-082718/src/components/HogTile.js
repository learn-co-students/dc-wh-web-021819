import React, { Component, Fragment } from 'react';

// This class will take hog data and render it to the page
class HogTile extends Component {
    state = {
        showDetails: false
    }

    imageNameConverter = (name) => {
        return require('../hog-imgs/' + name.replace(/\s/g, "_").toLowerCase() + '.jpg')
    }

    showDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        const { name, specialty, greased } = this.props.hog
        const fridge = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        const medal = this.props.hog['highest medal achieved']
        console.log(name, specialty, greased, fridge, medal)
        return (
            <Fragment>
                <div className="pigTile">
                    <h3>{name}</h3>
                    <img src={this.imageNameConverter(name)}/>
                    <br/>
                    <button onClick={this.showDetails}>Show me the bacon</button>
                    {this.state.showDetails ? <div>
                        <p>Specialty: {specialty}</p>
                        <p>Is a greasy hog? {greased.toString()}</p>
                        <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {fridge}</p>
                        <p>Highest Medal Achieved: {medal}</p>
                        </div>
                    : null
                    }
                </div>

            </Fragment>
        )
    }
}

export default HogTile