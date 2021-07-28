import { BAR_HEIGHT } from './action-type'

//设置状态栏高度、胶囊高度、导航栏高度的同步action
export const setHeaderBar = data => ({type:BAR_HEIGHT,data})