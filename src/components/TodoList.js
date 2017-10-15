import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'
import AnimatedList from './ui/lists/AnimatedList'

const renderTodoItem = ({item, onTodoItemClick}) => (
  <TodoItem
    key={item.key}
    completed={item.completed}
    text={item.text}
    imageSource={item.imageSource}
    onClick={() => onTodoItemClick(item.id)} />
)

const TodoList = ({todos, onTodoItemClick}) => (
  <AnimatedList
    data={todos.map((todo) => ({...todo, key: todo.id}))}
    renderItem={({item}) => renderTodoItem({item, onTodoItemClick})} />
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoItemClick: PropTypes.func.isRequired
}

export default TodoList
