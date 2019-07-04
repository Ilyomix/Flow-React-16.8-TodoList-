// @flow
import React, { Fragment } from 'react';
import TodoView from './views/TodoView/TodoView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './assets/main/main.css';

import type { Element } from 'react';

const Main = (): Element<typeof Fragment> => (
  <Fragment>
    <Header />
    <TodoView />
    <Footer />
  </Fragment>
);

export default Main;
