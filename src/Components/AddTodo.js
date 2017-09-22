import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    todo:''
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.todo === ''){
      alert('Todo is required');
    } else {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: '' });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>Add Todo</h4>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className="form-horizontal"
          >
            <div className="form-group">
              <label htmlFor="todo" className="col-sm-2 control-label">Todo</label>
              <div className="col-sm-10">
                <input
                  onChange={ e => this.setState({ todo: e.target.value }) }
                  value={this.state.todo}
                  type="text"
                  className="form-control"
                  placeholder="Todo"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
