// import { useState, useEffect } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import navigationTitle from '../../Image/navigation-title.png'
import './index.less'

function Header(props) {
    const { scrollTop, upperBarHeight } = props
    const hiddenBar = (
        <View className='navigation-bar' style={{ top: upperBarHeight }}>
            <image src={navigationTitle} alt='navigation-title' />
        </View>
    )

    return (
        <View className='navigation-wrapper'>
            {/* <view class="wrapIndex" bindtouchstart="touchStart" bindtouchend="touchEnd"></view> */}
            <View className='safe-area' style={{ height: upperBarHeight }} />
            {scrollTop > 88 ? hiddenBar : null}
            <View className='header'>
                <image src={navigationTitle} alt='navigation-title' />
            </View>
            <View className='introduction'>薯条餐厅</View>
        </View>
    )
}

// export default connect(
//     ({ upperBarHeight }) => ({ upperBarHeight }),
// )(Header)

export default Header