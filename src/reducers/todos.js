const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action)
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