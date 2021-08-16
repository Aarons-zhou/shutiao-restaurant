import { BAR_HEIGHT, GET_WIDTH, UPDATE_SC } from './action-type'
import { combineReducers } from 'redux'

//设置导航栏（安全区）高度
function upperBarHeight(state = {}, action) {
  switch (action.type) {
    case BAR_HEIGHT:
      return action.data
    default:
      return state
  }
}

//获取屏幕宽度
function windowWidth(state = 375, action) {
  switch (action.type) {
    case GET_WIDTH:
      return action.data
    default:
      return state
  }
}

//设置购物车商品
function shoppingCarProduct(state=[], action){
  switch (action.type) {
    case UPDATE_SC:
      const { data } = action
      const newState = state.filter(item => item.key!==data.key)
      if(data.number !== 0) newState.push(data)
      return newState
    default:
      return state
  }
}

export default combineReducers({upperBarHeight, windowWidth, shoppingCarProduct})
