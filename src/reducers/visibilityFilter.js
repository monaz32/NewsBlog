import { SET_VISIBILITY_FILTER } from '../constants/actionTypes'
import { SHOW_ALL } from '../constants/visibilityFilters'

const visibilityFilter = (state = SHOW_ALL, action) => {
  console.log('reducers/visiblefilter');

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter