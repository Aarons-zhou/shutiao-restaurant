import { useCallback } from 'react'
import { Swiper, SwiperItem } from '@tarojs/components'
import { usePageScroll, pageScrollTo, showToast } from '@tarojs/taro'
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
                        scrollTop: scroll,
                        duration: 300
                    })
                )
        }
    }, [])

    usePageScroll((e) => {
        console.log(e.scrollTop,e.scrollTop/windowWidth);
    })

    return (
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

    )
}

export default SwiperComponent