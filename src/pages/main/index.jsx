import { View } from '@tarojs/components'
// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { connect } from 'react-redux'
import NavigationBar from '../../component/NavigationBar/index'

function main(props) {
    return (
        <View>
            {NavigationBar(props)}
            <View>Hello，hi</View>
            <View>Hello，hi</View>
            <View>Hello，hi</View>
        </View>
    )
}

export default connect(
    ({ menuButtonHeight, navigationBarHeight, statusBarHeight }) => ({ menuButtonHeight, navigationBarHeight, statusBarHeight }),
)(main)
// export default main