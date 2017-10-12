import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import TodoItem from './TodoItem'

const TodoList = ({todos, onTodoItemClick}) => (
  <View>
    {
      todos.map(todo => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          imageSource={todo.imageSource}
          onClick={() => onTodoItemClick(todo.id)} />
      ))
    }
  </View>
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
