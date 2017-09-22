import uuid from 'uuid';

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    id: uuid.v4(),
    todo
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
