// @flow

import React from 'react';
import { Input, Button, Grid } from 'semantic-ui-react';

import type { Element } from 'react';

type Props = {
  todoNameToCreate: string,
  handleCreateTodoName: (name: string) => void,
  handleCreate: () => void,
}

export const TodoAddItem = (props: Props): Element<typeof Grid> => {
  const {
    todoNameToCreate,
    handleCreateTodoName,
    handleCreate,
  }: Props = props;

  const inputExist: string = todoNameToCreate.length ? 'filled' : 'empty';
  const inputMessages = {
    isInputEmpty: {
      filled: 'Todo name',
      empty: 'Enter a todo',
    },
  };

  const inputMessage: string = inputMessages.isInputEmpty[inputExist];
  const submitTodo: Element<typeof Button> = (
     <Button
        icon='add'
        circular
        disabled={inputExist === 'empty'}
        onClick={handleCreate}
      />
  );

  return (
    <Grid centered padded>
      <Grid.Row>
        <Grid.Column width={6}>
          <Input 
            fluid
            value={todoNameToCreate}
            onChange={
              (e: SyntheticInputEvent<HTMLInputElement>) => 
              handleCreateTodoName(e.target.value)
            }
            label={inputMessage}
            action={submitTodo}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TodoAddItem;
