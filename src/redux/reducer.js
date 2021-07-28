import { BAR_HEIGHT } from './action-type'

function navigationBarInfo(state = {}, action) {
  switch (action.type) {
    case BAR_HEIGHT:
      return action.data
    default:
      return state
  }
}

export default navigationBarInfo
