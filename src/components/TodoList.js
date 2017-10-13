import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import TodoItem from './TodoItem'

const TodoList = ({todos, onTodoItemClick}) => (
  <FlatList
    data={todos}
    renderItem={({item}) => (
      <TodoItem
        key={item.id}
        completed={item.completed}
        text={item.text}
        imageSource={item.imageSource}
        onClick={() => onTodoItemClick(item.id)} />
    )} />
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoItemClick: PropTypes.func.isRequired
}

export default TodoList
