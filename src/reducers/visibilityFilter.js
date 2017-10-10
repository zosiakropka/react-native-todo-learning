import {
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from '../actions'

const { SHOW_ALL } = VISIBILITY_FILTERS

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
