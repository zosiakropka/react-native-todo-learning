import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions'

import getRandomImageSource from '../utils/getRandomImageSource'

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todoText = action.text
      return [
        {
          id: Date.now().toString(),
          text: todoText,
          imageSource: getRandomImageSource(),
          completed: false
        },
        ...state
      ]

    case TOGGLE_TODO:
      const toggledId = action.id
      return state.map((todo) => {
        if (todo.id === toggledId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return {...todo}
      })

    default:
      return state
  }
}

export default todos
