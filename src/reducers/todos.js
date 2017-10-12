import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions'

import getRandomImageSource from '../utils/getRandomImageSource'

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:

      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          imageSource: getRandomImageSource(),
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
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
