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
    // 导航栏高度
    let navigationBarHeight
    if (top && top !== 0 && height && height !== 0) {
        navigationBarHeight = (top - statusBarHeight) * 2 + height
    } else {
        navigationBarHeight = platform === 'android' ? 48 : 40
    }
    const upperBarHeight = navigationBarHeight + statusBarHeight
    store.dispatch(setHeaderBar({ upperBarHeight }))
  }

  render() {
    return ( 
      <Provider store = { store } > 
        { this.props.children } 
      </Provider>
    )
  }
}

export default App
