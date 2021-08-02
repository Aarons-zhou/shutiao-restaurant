import { View, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

function SwiperComponent() {
    return (
        <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
        >
            <SwiperItem>
                <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
                <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
                <View className='demo-text-3'>3</View>
            </SwiperItem>
        </Swiper>
    )
}

export default SwiperComponent