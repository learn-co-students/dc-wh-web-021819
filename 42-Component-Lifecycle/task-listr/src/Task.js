import React from 'react'

//  this.props.task = {id:1, text: "wake up", done: true}
class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${props.task.id} constructor`)
  }

  onCheck = () => {
    this.setState({done: !this.state.done})
  }

  sayHi = () => {
    console.log('HI!!!')
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount`)
    window.addEventListener('resize', this.sayHi)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount`)
    window.removeEventListener('resize', this.sayHi)
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    return(
      <div>
        <button onClick={() => this.props.onDelete(this.props.task.id)} data-id={this.props.task.id}>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={this.onCheck}/>
      </div>
    )
  }
}

export default Task
