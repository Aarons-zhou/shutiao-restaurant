import { View } from '@tarojs/components'
import navigationTitle from '../../Image/navigation-title.png'
import './index.less'

function Header(upperBarHeight) {
    return (
        <View className='navigation-wrapper'>
            <View className='safe-area' style={{ height: upperBarHeight }} />
            <View className='title-area' style={{ top: upperBarHeight }}/>
            <View className='header'>
                <image src={navigationTitle} alt='navigation-img' />
            </View>
            <View className='introduction'>薯条餐厅</View>
        </View>
    )
}

export default Header