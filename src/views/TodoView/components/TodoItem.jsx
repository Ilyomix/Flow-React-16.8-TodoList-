// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import {
  Label,
  Checkbox,
  Header,
  Segment,
  Input,
  Grid,
  Icon,
} from 'semantic-ui-react';

import '../assets/todo-item.css';

type Props = {
  todoName: string,
  todoStatus: boolean,
  handleDelete: () => void,
  handleEdit: (index: number, name: string) => void,
  handleUpdateStatus: () => void,
  index: number,
};

type State = {
  isEditMode: boolean,
  newTodoName: string,
}

export class TodoItem extends Component<Props, State> {
  state = {
    isEditMode: false,
    newTodoName: this.props.todoName,
  }

  handleEditName = (name: string | void): void => {
    this.setState({
      newTodoName: name,
    });
  }

  handleEditTodoInput = (index: number): void => {
    const { handleEdit, todoName }: { handleEdit: (index: number, name: string) => void, todoName: string } = this.props;
    const { isEditMode, newTodoName }: State = this.state;
  
    isEditMode && handleEdit(index, newTodoName);
  
    this.setState({
      isEditMode: !isEditMode,
      newTodoName: todoName,
    });
  }

  render(): Node {
    const { 
      todoName,
      todoStatus,
      handleDelete,
      index,
      handleUpdateStatus,
    }: Props = this.props;

    const {
      isEditMode,
      newTodoName
    }: State = this.state;

    const todoNameData: string = todoName || 'No data';
    const headerContent: Node = isEditMode ?
      <div className="todo-item-edit-input-container ">
        <Input 
          className="todo-item-edit-input"
          defaultValue={todoName}
          label="Edit your todo"
          size="mini"
          onChange={
            (e: SyntheticInputEvent<HTMLInputElement>): void =>
              this.handleEditName(e.target.value)
          }
          fluid
        />
      </div>
      :
      <Header className="todo-list-header">
        <Checkbox 
          label={todoNameData} 
          onChange={handleUpdateStatus}
          checked={todoStatus}
        />
      </Header>

    const editTodoItem = (): void => this.handleEditTodoInput(index);
    let editIcon: string = isEditMode ? 'check' : 'pencil alternate';
    editIcon = (isEditMode && !newTodoName.length) ? 'arrow left' : editIcon;

    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
            <div className="todo-list-item-content">
              { headerContent }
              <div>
                <Label
                  basic
                  color="green"
                  onClick={editTodoItem}
                >
                  <Icon fitted name={editIcon} />
                </Label>
                <Label
                  basic
                  color="red"
                  onClick={handleDelete}
                >
                  <Icon fitted name="delete" />
                </Label>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Segment>
    );
  }
};

export default TodoItem;
