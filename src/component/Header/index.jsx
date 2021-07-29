// import { useState, useEffect } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import navigationTitle from '../../Image/navigation-title.png'
import './index.less'

class Header extends Component {
    //监听页面滑动
    onPageScroll (e) { 
        console.log(e)
    }
    

    render() {
        const upperBarHeight = this.props.upperBarHeight + 'rpx'

        return (
            <View className='navigation-wrapper'>
                <view class="wrapIndex" bindtouchstart="touchStart" bindtouchend="touchEnd"></view>
                <View className='safe-area' style={{ height: upperBarHeight }}></View>
                <View className='header'>
                    <image src={navigationTitle} alt='navigation-title'></image>
                </View>
                <View className='introduction'>薯条餐厅</View>
            </View>
        )
    }
}

export default connect(
    ({ upperBarHeight }) => ({ upperBarHeight }),
)(Header)