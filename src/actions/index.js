export const addTodo = (todo, callback) => dispatch => {
  return fetch("https://lumen-todo-api.herokuapp.com/todos/add", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
    .then(result => result.json())
    .then(json => {
      dispatch({
        ...json,
        type: "ADD_TODO"
      })

      if (callback) {
        callback(json);
      }
    });
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const loadTodos = callback => dispatch => {
  return fetch("https://lumen-todo-api.herokuapp.com/todos", {
    method: "POST"
  })
    .then(result => result.json())
    .then(json => {
      dispatch({
        type: "SET_TODOS",
        todos: json
      })

      if (callback) {
        callback(json);
      }
    });
};
