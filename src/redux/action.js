import { BAR_HEIGHT, UPDATE_SC } from './action-type'

//设置状态栏高度、胶囊高度、导航栏高度的同步action
export const setHeaderBar = data => ({type:BAR_HEIGHT,data})

//设置购物车商品的同步action
export const updateShoppingCarSync = data => {
    // console.log(data);
    return ({type:UPDATE_SC,data})
}

//设置购物车商品的异步action
export const updateShoppingCar = data => {
    return dispatch => {
        dispatch(updateShoppingCarSync(data))
    }
}