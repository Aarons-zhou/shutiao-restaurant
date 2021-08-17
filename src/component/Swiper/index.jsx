import { useCallback } from 'react'
import { Swiper, SwiperItem } from '@tarojs/components'
import { pageScrollTo, showToast } from '@tarojs/taro'
import './index.less'

function SwiperComponent(windowWidth) {

    //swiper-item的点击回调
    const scrollToProduct = useCallback((scroll) => {
        return () => {
            !scroll ? (
                showToast({
                    title: '暂未上架，敬请期待~',
                    icon: 'none',
                    duration: 1000
                })
            ) : (
                    pageScrollTo({
                        scrollTop: scroll * windowWidth + 80,
                        duration: 300
                    })
                )
        }
    }, [])

    return (
        <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
        >
            <SwiperItem className='swiper1' onClick={scrollToProduct(4.94)} />
            <SwiperItem className='swiper2' onClick={scrollToProduct()} />
            <SwiperItem className='swiper3' onClick={scrollToProduct(4.6)} />
        </Swiper>

    )
}

export default SwiperComponent