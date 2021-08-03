import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { usePageScroll, pageScrollTo } from '@tarojs/taro'
import { AtTabs } from 'taro-ui'
import productData from '../../simulatedData/data.js'
import 'taro-ui/dist/style/components/tabs.scss'
import './index.less'

function Products(upperBarHeight) {
    const [current, setCurrent] = useState(0)

    const tabList = [{ title: '恢复类' }, { title: '复活类' }, { title: '攻击类' }, { title: '防御类' }]

    //滚动的位置计算
    const pageTo = index => {
        switch (index) {
            case 1:
                return 420
            case 2:
                return 620
            default:
                return 820
        }
    }

    //标签的点击回调
    const tabClick = index => {
        setCurrent(index)
        pageScrollTo({
            scrollTop: pageTo(index),
            duration: 300
        })
    }


    //标签的点击回调
    // const scrollTo = index => {
    //     return () => {
    //         console.log(index);
    //     }
    // }

    usePageScroll(res => {
        console.log(res.scrollTop)
    })

    return (
        <View className='products'>
            <View className='tabs'
                style={{ top: upperBarHeight + 75 + 'rpx' }}>
                <AtTabs
                    current={current}
                    tabList={tabList}
                    onClick={tabClick}
                />
            </View>
            <View className='product-wrapper'>
                {Product(productData[0])}
                {Product(productData[0])}
                {Product(productData[0])}
                {Product(productData[0])}
                {Product(productData[0])}
                {Product(productData[0])}
            </View>
        </View>
    )
}

function Product(data) {
    return (
        <View className='product' key={data.key}>
            <image src='http://tiebapic.baidu.com/forum/w%3D580/sign=4baefbbaefdcd100cd9cf829428a47be/3fab7eff9925bc312c09502f49df8db1ca137094.jpg' alt={data.name} />
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
        </View>

    )
}

export default Products