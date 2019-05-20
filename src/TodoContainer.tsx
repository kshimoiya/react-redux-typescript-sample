import * as React from 'react';
import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {todoActionCreator} from './action';
import {IRootState} from './store';
import TodoComponent from './TodoComponent';
import { type } from 'os';

interface IStateToProps {
  todos: string[];
}

interface IDispatchToProps {
  addTodo: (todo: string) => void;
}

type IProps = IStateToProps & IDispatchToProps;

class TodoContainer extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const {todos} = this.props;
    return (
      <TodoComponent todos={todos} onClickAddButton={this.onClickAddButton}/>
    );
  }

  private onClickAddButton = (todo: string) => {
    const {addTodo} = this.props;
    addTodo(todo);
  };
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const {todoState} = state;
  return {
    todos: todoState.todos
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    addTodo: (todo: string) => {
      dispatch(todoActionCreator.addTodoAction(todo));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);