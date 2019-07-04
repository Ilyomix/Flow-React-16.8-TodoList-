// @flow
import React, { Component, Fragment } from 'react';

import TodoItem from './components/TodoItem';
import TodoAddItem from './components/TodoAddItem';
import TodoStats from './components/TodoStats';
import DisplayTodoList from './components/DisplayTodoList';

import type { Node, Element } from 'react';

type Props = {
}

type Todos = {
  name: string,
  status: boolean,
}

type State = {
  todos: Array<Todos>,
  todoNameToCreate: string,
}

class TodoView extends Component<Props, State> {
  state = {
    todos: [],
    todoNameToCreate: '',
  };

  handleDelete = (name: string): void => {
    const { todos }: State = this.state;
    const newTodos: Array<Todos> = todos.filter(e => e.name !== name)

    this.setState({
      todos: newTodos,
    })
  }
  
  handleEdit = (index: number, name: string): void => {
    const { todos }: State = this.state;
    todos[index].name = name;

    this.setState({
      todos,
    })
  }

  handleUpdateStatus = (index: number): void => {
    const { todos }: State = this.state;
    const newTodos: Array<Todos> = [...todos];
    newTodos[index].status = !newTodos[index].status;

    this.setState({
      todos: newTodos,
    })
  }

  handleCreateTodoName = (name: string): void => {
    this.setState({
      todoNameToCreate: name,
    });
  }

  handleCreate = (): void => {
    const { todos, todoNameToCreate }: State = this.state;
    const newTodos: Array<Todos> = [...todos];

    newTodos.push({
      name: todoNameToCreate,
      status: false,
    });

    this.setState({
      todos: newTodos,
      todoNameToCreate: '',
    })
  }

  generateTodoItems = (todos: Array<Todos>): Array<Node> => {
    const todosList: Array<Todos> = [...todos];
    const todoItems: Array<Node> = todosList.map<Node>((e: Todos, index: number) => {
      const { name, status }: Todos  = e;
      const statusStyle: string = status ? 
        'list-item-completed' : 
        'list-item-in-progress'; 
      const [
        handleDeleteMethod,
        handleUpdateStatusMethod
      ]: Array<Function> = [
        (): void => this.handleDelete(name),
        (): void => this.handleUpdateStatus(index),
      ]

      return (
        <div className={statusStyle} key={`todoitem-${index + 1}`}>
          <TodoItem
            todoName={name}
            todoStatus={status}
            handleDelete={handleDeleteMethod}
            handleEdit={this.handleEdit}
            handleUpdateStatus={handleUpdateStatusMethod}
            index={index}
          />
        </div>
      )
    })
    return todoItems;
  }

  render(): Element<typeof Fragment> {
    const { todos, todoNameToCreate }: State = this.state;
    const todoItems: Array<Node> = this.generateTodoItems(todos);
  
    return (
      <Fragment>
        <TodoStats 
          todoItems={todos} 
        />
        <TodoAddItem
          todoNameToCreate={todoNameToCreate}
          handleCreateTodoName={this.handleCreateTodoName}
          handleCreate={this.handleCreate}
        />
        <DisplayTodoList todoItems={todoItems} />
      </Fragment>
    );
  }
}

export default TodoView;