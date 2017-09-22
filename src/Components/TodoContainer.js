import { connect } from 'react-redux'
import Todo from './Todo'
import { deleteTodo } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
        dispatch(deleteTodo(id))
    }
  }
}

const TodoContainer = connect(
  null,
  mapDispatchToProps
)(Todo)

export default TodoContainer