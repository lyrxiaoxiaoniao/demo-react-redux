import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import TodoListRedux from '../TodoListRedux';
import TodoList from '../TodoList';
import './index.less';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="menu">
              <Link to="todolist">TodoListRedux</Link>
              <Link to="list">Todolist</Link>
            </div>
            <Switch>
              <Route path="/todolist" component={TodoListRedux} />
              <Route path="/list" component={TodoList} />
              {/* 放在Route后面 */}
              <Redirect from="/" to="/todolist" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default TodoApp;
