import { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { setHeaderBar } from './redux/action'
import './app.less'

class App extends Component {

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  async onLaunch() {
    const { statusBarHeight, platform } = await wx.getSystemInfo()
    const { top, height } = wx.getMenuButtonBoundingClientRect()
    // 状态栏高度:statusBarHeight
    // 胶囊按钮高度
    const menuButtonHeight = height ? height : 32
    // 导航栏高度
    let navigationBarHeight
    if (top && top !== 0 && height && height !== 0) {
        navigationBarHeight = (top - statusBarHeight) * 2 + height
    } else {
        navigationBarHeight = platform === 'android' ? 48 : 40
    }
    const action = setHeaderBar({
      statusBarHeight,
      menuButtonHeight,
      navigationBarHeight
    })
    store.dispatch(action)
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return ( 
      <Provider store = { store } > 
        { this.props.children } 
      </Provider>
    )
  }
}

export default App
