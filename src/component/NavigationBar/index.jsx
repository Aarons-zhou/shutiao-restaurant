// import { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import './index.less'

function NavigationBar(props) {
    // const { menuButtonHeight, navigationBarHeight, statusBarHeight } = props
    const menuButtonHeight = props.menuButtonHeight + 'rpx'
    const navigationBarHeight = props.navigationBarHeight + 'rpx'
    const statusBarHeight = props.statusBarHeight + 'rpx'
    const UpperBarHeight = props.navigationBarHeight + props.statusBarHeight + 'rpx'
    return (
        <View>
            <View className="navigation-container" style={{ height: UpperBarHeight }}>
                <View style={{ height: statusBarHeight }}></View>
                <View className="navigation-bar" style={{ height: navigationBarHeight }}>
                    <View className="navigation-buttons" style={{ height: menuButtonHeight }}>
                        {/* <image className="nav-img" src='/images/back.svg' /> */}
                        ...其余自定义button
                    </View>
                    <View className="navigation-title" style={{ lineHeight: navigationBarHeight }}> title </View>
                </View>
            </View>
            <View style={{ height: { UpperBarHeight }, background: '#f9c' }} >
                <button>aaa</button>
            </View>
        </View>
    )
}

export default NavigationBar