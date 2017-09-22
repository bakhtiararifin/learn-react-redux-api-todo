import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import { addTodo } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => {
        dispatch(addTodo(todo))
    }
  }
}

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer