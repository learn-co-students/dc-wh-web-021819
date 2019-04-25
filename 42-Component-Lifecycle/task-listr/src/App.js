import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn('App constructor')
  }

  componentDidUpdate(){
    console.warn('App componentDidUpdate')
    //this.autoSave()
  }

  componentDidMount(){
    console.warn('App componentDidMount')
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArray => {
      this.setState({taskList: tasksArray})
    })
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    //add my task on the back end
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: event.target[0].value,
        done: false
      })
    }).then(res => res.json())
    .then(newTask => {
      //add my task on my front end
      this.setState({
        taskList: [...this.state.taskList, newTask]
      })
    })
  }

  onDeleteTask = (taskId) => {
    console.log(`attempting to delete task`, taskId)
    //delete from the back end
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(() => {
      //delete from the front end
      // let taskIndex = this.state.taskList.findIndex(task => task.id === taskId)
      // let newArray = [...this.state.taskList.slice(0, taskIndex), ...this.state.taskList.slice(taskIndex+1)]
      let newArray = this.state.taskList.filter(task => task.id !== taskId)
      this.setState({taskList: newArray})
    })
  }

  render() {
    console.warn('App render')
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.taskList}
          onDeleteTask = {this.onDeleteTask}
        />
      </div>
    );
  }
}

export default App;
