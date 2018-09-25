import React, {
  Component
} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import TodoListRedux from '../TodoListRedux'
import TodoList from '../TodoList';

class TodoApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route path='/todolist' component={TodoListRedux} />
              <Route path='/list' component={TodoList} />
              {/* 放在Route后面 */}
              <Redirect from='/' to='/todolist' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default TodoApp