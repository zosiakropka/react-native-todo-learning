import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}
