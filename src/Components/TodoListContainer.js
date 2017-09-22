import { connect } from 'react-redux'
import TodoList from './TodoList'

import { loadTodos } from '../actions'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTodos: (callback) => {
        dispatch(loadTodos(callback))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer