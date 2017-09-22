import React, { Component } from 'react';
import TodoListContainer from './Components/TodoListContainer';
import AddTodoContainer from './Components/AddTodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="header clearfix">
            <h3 className="text-muted">TODO FORM</h3>
          </div>

          <AddTodoContainer />
          <hr />
          <TodoListContainer />
      </div>
    );
  }
}

export default App;
