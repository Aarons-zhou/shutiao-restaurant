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
            <View className='introduction'>薯条餐厅</View>
        </View>
    )
}

export default Header