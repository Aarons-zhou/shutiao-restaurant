import { BAR_HEIGHT, UPDATE_SC } from './action-type'
import { combineReducers } from 'redux'

//设置导航栏（安全区）高度
function navigationBarInfo(state = {}, action) {
  switch (action.type) {
    case BAR_HEIGHT:
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
      // return data.number!==0? [...state,data] : state.filter(product => product.key!==data.key)
      // if(data.number===0) return state.filter(product => product.key!==data.key)
      // else return [...state,data]
    default:
      return state
  }
}

export default combineReducers({navigationBarInfo, shoppingCarProduct})
