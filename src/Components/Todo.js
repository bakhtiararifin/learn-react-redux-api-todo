import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo, deleteTodo } = this.props
    return (
      <tr>
        <td style={{width: 100}}>{todo.id}</td>
        <td>{todo.todo}</td>
        <td style={{width: 100}} className="text-center">
          <a
            onClick={() => deleteTodo(todo.id)}
            href="#"
            className="btn btn-danger btn-xs"
            role="button">
              delete
          </a>
        </td>
      </tr>
    );
  }
}

export default Todo;
