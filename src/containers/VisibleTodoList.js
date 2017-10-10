import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = ({todos, visibilityFilter}) => {
  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos({
      todos: state.todos,
      visibilityFilter: state.visibilityFilter
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoItemClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
