import { View } from '@tarojs/components'
import { logo } from '../../constances/imgAddress'
import './index.less'

function Header(upperBarHeight) {
    return (
        <View className='navigation-wrapper'>
            <View className='safe-area' style={{ height: upperBarHeight + 'rpx' }} />
            <View className='title-area' style={{ top: upperBarHeight + 'rpx' }} />
            <View className='header'>
                <image src={logo} alt='navigation-img' />
            </View>
            {Introduction()}
        </View>
    )
}

function Introduction(){
    return (
        <View className='introduction'>
            <View className='title'></View>
            <View className='comment'></View>
            <View className='discount'></View>
            <View className='note'></View>
            <View className='logo'></View>
        </View>
    )
}

export default Header