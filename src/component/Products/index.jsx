import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { usePageScroll, pageScrollTo } from '@tarojs/taro'
import { AtTabs, AtIcon, AtButton, AtTag } from 'taro-ui'
import productData from '../../constances/productData.js'
import 'taro-ui/dist/style/components/tabs.scss'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/tag.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/loading.scss'
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

    //监听屏幕滚动实现标签的自动切换
    // usePageScroll(res => {
    //     console.log(res.scrollTop)
    // })

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
                {productData.map(product => Product(product))}
            </View>
        </View>
    )
}

function Product(data) {
    const hiddenTag = !data.name.charAt(6)
    const [count, setCount] = useState(0)

    const addProduct = () => {
        setCount(count + 1)
        console.log(count);
    }

    return (
        <View className='product' key={data.key}>
            <image src={data.img} alt={data.name} />
            <Text className='product-name'>{data.name}</Text>
            <Text className='product-price'>{`￥${data.price}`}</Text>
            {!hiddenTag ? null : (
                <AtTag className='hidden-tag' size='small' circle>该地区销量前5</AtTag>
            )}
            <View className='product-tags'>
                {data.tags.map(tag => (
                    <AtTag className='product-tag' size='small' circle>{tag}</AtTag>
                ))}
            </View>
            <View className='product-number-wrapper'>
                <View className='icon-add-wrapper' onClick={addProduct}>
                    <AtIcon className='icon-add' value='add' size='14' color='white' />
                </View>
                {count === 0 ? null : (
                    <>
                        <View className='product-number'>{count}</View>
                        <View className='icon-subtract-wrapper' onClick={addProduct}>
                            <AtIcon className='icon-subtract' value='subtract' size='14' color='white' />
                        </View>
                    </>
                )}
            </View>
        </View>
    )
}

export default Products