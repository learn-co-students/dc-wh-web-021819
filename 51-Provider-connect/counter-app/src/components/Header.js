import React, {Component} from 'react'
import logo from '../logo.svg'
import {connect} from 'react-redux'

// props=  {count: store.getState().count }
class Header extends Component {
  render() {
    console.log("Header's props:", this.props)
    return (
      <header className="App-header">
      <h1>{this.props.count}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: this.props.color}}>Welcome to React</h1>
      </header>
    );
  }
}

//mapStateToProps is a function that returns an obj that specifices how to map props to the store
const mapStateToProps = (store) => {
  return {count: store.count}
}

// connect is a function that returns a HOC
export default connect(mapStateToProps)(Header)








//Aside: High Order Components (a function that takes in SomeComponent, return an EnhancedComponent)
// const withColor = (SomeComponent, color) => {
//   class EnhancedComponent extends React.Component{
//     render(){
//       return <SomeComponent {...this.props} color={color}/>
//     }
//   }
//   return EnhancedComponent
// }
//
// let BlueHeader = withColor(Header, "blue")
// let RedHeader = withColor(Header, "red")
// let GreenHeader = withColor(Header, "green")
//
// const withCount = (SomeComponent) => {
//   class EnhancedComponent extends React.Component{
//     render(){
//       return <SomeComponent {...this.props} count={store.getState().count}/>
//     }
//   }
// }
