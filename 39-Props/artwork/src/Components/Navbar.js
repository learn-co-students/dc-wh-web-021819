import React from 'react'

//class syntax
class Navbar extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
        <a href="https://google.com" className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon}`}></i>
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.subtitle}</div>
          </h2>
        </a>
      </div>
    )
  }
}

export default Navbar
