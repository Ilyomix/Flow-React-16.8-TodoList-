// @flow

import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';

import type { Element, Node } from 'react';

type Props = {
  todoItems: Array<Node>,
}

export const DisplayTodoList = (props: Props): Element<typeof Fragment> => {
  const {
    todoItems,
  }: Props = props;

  return (
    <Fragment>
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column width={6}>
            { todoItems }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default DisplayTodoList;
