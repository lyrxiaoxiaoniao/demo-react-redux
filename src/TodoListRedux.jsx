import React, { Fragment, Component } from 'react';
import { Input, List, Button } from 'antd';
import { connect } from 'react-redux';
import TodoTitle from './components/TodoTitle';
import * as actionTypes from './store/actionTypes';
import './redux.css';

const mapStateToProps = state => {
  return {
    title: state.title,
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: e => {
      const value = e.target.value;
      dispatch({ type: actionTypes.CHANGE_INPUTVALUE, inputValue: value });
    },
    onBtnClick: () => {
      dispatch({ type: actionTypes.HANDLE_BTN_CLICK });
    },
    onItemDelete: index => {
      dispatch({ type: actionTypes.HANDLE_CLICK_DELETE, index });
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class TodoList extends Component {
  render() {
    const { title, list, inputValue, onChangeValue, onBtnClick } = this.props;
    return (
      <Fragment>
        <div className="app">
          <TodoTitle title={title} />
          <Input
            value={inputValue}
            onChange={onChangeValue}
            className="top"
            placeholder="todolist"
          />
          <Button onClick={onBtnClick}>提交</Button>
          <List
            className="toplist"
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handelDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }
  handelDelete = index => {
    this.props.onItemDelete(index);
  };
}
export default TodoList;
