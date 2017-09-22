import React, { Component } from 'react';
import TodoContainer from './TodoContainer';

class TodoList extends Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>All Todos</h4>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Todo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo =>
                <TodoContainer key={todo.id} todo={todo} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TodoList;
