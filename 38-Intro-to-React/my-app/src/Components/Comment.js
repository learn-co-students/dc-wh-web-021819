import React from 'react'

//Functional Component
//access props by using props parameter
const Comment = (props) => {
  return <p className="comment">{props.commentObj.content} - {props.commentObj.author}</p>
}


// class Comment extends React.Component {
//   render(){
//     let comment = this.props.commentObj
//     console.log(this.props.commentObj.author)
//     return (
//       <p className="comment">{comment.content} - {comment.author}</p>
//     )
//   }
// }
//
export default Comment



//convert class to a function
//get rid of the render()
//change this.props to just props

//convert function to a class
//crate class thatn extends React.Component
//create the render() instance method
//change props to this.props
