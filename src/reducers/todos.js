const todos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos