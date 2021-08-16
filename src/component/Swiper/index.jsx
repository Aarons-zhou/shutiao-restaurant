import { useCallback, useState } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { pageScrollTo } from '@tarojs/taro'
import { AtToast } from "taro-ui"
import 'taro-ui/dist/style/components/toast.scss'
import 'taro-ui/dist/style/components/icon.scss'
import './index.less'

function SwiperComponent() {

    const [opened, setOpened] = useState(false)

    //toast的回调
    const toast = () => {
        setOpened(true)
        setTimeout(() => {
            setOpened(false)
        }, 1000)
    }

    //swiper-item的点击回调
    const scrollToProduct = (scroll) => {
        return () => {
            !scroll ? (
                toast()
            ) : (
                    pageScrollTo({
                        scrollTop: scroll,
                        duration: 300
                    })
                )
        }
    }

    return (
        <View>
            <Swiper
                className='swiper'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay
            >
                <SwiperItem className='swiper1' onClick={scrollToProduct(1671)} />
                <SwiperItem className='swiper2' onClick={scrollToProduct()} />
                <SwiperItem className='swiper3' onClick={scrollToProduct(1564)} />
            </Swiper>
            <AtToast isOpened={opened} text='暂未上架，敬请期待~' />
        </View>

    )
}

export default SwiperComponent