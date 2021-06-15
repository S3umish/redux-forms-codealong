import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }



  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.addToDo(this.state)
    this.props.dispatch({ type: "Add_TODO", payload: this.state })
    this.setState({
      text: ''
    })
  }


  render() {
    console.log(this.state)
    return(
      <div>
        {/* Create Todo Component */}
        <form onSubmit = {this.handleSubmit}>
          <p>
            <label> add todo</label>
            <input type="text"  
            onChange={ this.handleChange}
            value = {this.state.text}
            /> 
          </p>
          <p> 
          <input type="submit"/>
          </p>
        </form>
        {this.state.text}

      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addToDo: formData => dispatch({ type: "ADD_TODO", payload: formData})
//   }
// }

// export default connect (null, mapDispatchToProps) (CreateTodo);
export default connect () (CreateTodo)
