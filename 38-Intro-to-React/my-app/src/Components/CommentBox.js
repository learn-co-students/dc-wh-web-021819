import React, {Component} from 'react'
import Comment from './Comment'

const commentsData = [
  {id: 1, content: 'hello', author: 'Ann'},
  {id: 2, content: 'wassup', author: 'Lane'},
  {id: 3, content: 'hi', author: 'Trevor'}
]

//class extend React.Component
//MUST have an instance method named render()
//render() MUST return some JSX
//access props using this.props
export default class CommentBox extends Component {
  render(){
    return (
      <div className='comment-box'>
        {
          commentsData.map(comment => (
            <Comment key={comment.id} commentObj={comment}/>
          ))
        }
      </div>
    )
  }
}
