// @flow

import React from 'react';
import { Statistic, Grid, Divider } from 'semantic-ui-react';

import type { Element } from 'react';

import '../assets/todo-stats.css';

type Todos = {
  name: string,
  status: boolean,
}

type Props = {
  todoItems: Array<Todos>,
}

const TodoStats = (props: Props): Element<typeof Grid> => {
  const { todoItems }: Props = props;
  const nbTodos: number = todoItems.filter(x => x.status === false).length;
  const nbTodosLabel: string = nbTodos > 1 ? 'Todos in progress' : 'Todo in progress'; 
  return (
    <Grid centered padded>
      <Grid.Row>
        <Grid.Column width={6} className="todo-stats-value">
          <Statistic horizontal>
            <Statistic.Value>
              {nbTodos}
            </Statistic.Value>
            <Statistic.Label>
              {nbTodosLabel}
            </Statistic.Label>
          </Statistic>
          <Divider className="todo-stats-divider" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TodoStats;