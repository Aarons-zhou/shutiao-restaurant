import { View } from '@tarojs/components'
// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { PureComponent } from 'react'
import { connect } from 'react-redux'

import Header from '../../component/Header/index'
import './index.less'

class main extends PureComponent {

    state = {
        scrollTop: 0
    }

    onPageScroll(event) {
        const { scrollTop } = event
        this.setState({ scrollTop })
    }

    render() {
        return (
            <View>
                {Header({ ...this.state, ...this.props })}
                <View className='main'>
                    {/* <View className='block'></View> */}
                    <View className='test'>
                        <View>a</View>
                        <View>b</View>
                        <View>c</View>
                        <View>d</View>
                        <View>e</View>
                        <View>f</View>
                        <View>g</View>
                        <View>h</View>
                        <View>i</View>
                        <View>j</View>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(
    ({ upperBarHeight }) => ({ upperBarHeight }),
)(main)

// export default main