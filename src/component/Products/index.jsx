import { useCallback, useMemo, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { usePageScroll, pageScrollTo, showToast } from '@tarojs/taro'
import { AtTabs, AtIcon, AtTag } from 'taro-ui'
import productData from '../../constances/productData.js'
import 'taro-ui/dist/style/components/tabs.scss'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/tag.scss'
import './index.less'

function Products(upperBarHeight, updateShoppingCar) {
    const [current, setCurrent] = useState(0)

    const tabList = [{ title: '恢复类' }, { title: '体力类' }, { title: '复活类' }, { title: '攻击类' }, { title: '防御类' }]

    //滚动的位置计算
    const pageTo = useCallback(index => {
        switch (index) {
            case 0:
                return 415
            case 1:
                return 921
            case 2:
                return 1173
            case 3:
                return 1551
            case 4:
                return 2055
            default:
                return 415
        }
    }, [])

    //标签的点击回调
    const tabClick = useCallback(index => {
        pageScrollTo({
            scrollTop: pageTo(index),
            duration: 300
        })
    }, [])

    //监听屏幕滚动实现标签的自动切换
    let screenTop = 0
    usePageScroll(res => {
        const { scrollTop } = res
        if (scrollTop <= 920) setCurrent(0)
        else if ((screenTop > 1172 || screenTop < 921) && (scrollTop >= 921 && scrollTop <= 1172)) setCurrent(1)
        else if ((screenTop > 1550 || screenTop < 1173) && (scrollTop >= 1173 && scrollTop <= 1550)) setCurrent(2)
        else if ((screenTop > 2054 || screenTop < 1551) && (scrollTop >= 1551 && scrollTop <= 2054)) setCurrent(3)
        else if (scrollTop >= 2055) setCurrent(4)
        screenTop = scrollTop
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
                {productData.map(product => Product(product, updateShoppingCar))}
            </View>
        </View>
    )
}

function Product(data, updateShoppingCar) {
    const [number, setNumber] = useState(0)
    const [opened, setOpened] = useState(false)
    const hiddenTag = useMemo(() => {
        return !data.name.charAt(6)
    }, [])

    //增加商品数量的回调
    const addProduct = () => {
        setNumber(number + 1)
        updateShoppingCar({
            key: data.key,
            name: data.name,
            price: data.price,
            img: data.img,
            number: number + 1
        })
    }
    //减少商品数量的回调
    const subtractProduct = () => {
        setNumber(number - 1)
        updateShoppingCar({
            key: data.key,
            name: data.name,
            price: data.price,
            img: data.img,
            number: number - 1
        })
    }

    //阻止事件冒泡
    const preventBubble = useCallback((e) => {
        e.stopPropagation()
    }, [])

    //跳转至商品详情页
    const navigateToDetail = useCallback(() => {
        showToast({
            title: '商品详情页尚在开发中...',
            icon: 'none',
            duration: 1000
        })
    }, [])

    return (
        <View className='product' key={data.key} onClick={navigateToDetail}>
            <image src={data.img} alt={data.name} />
            <Text className='product-name'>{data.name}</Text>
            <Text className='product-price'>{`￥${data.price}`}</Text>
            {!hiddenTag ? null : (
                <AtTag className='hidden-tag' size='small' circle>热销中</AtTag>
            )}
            <View className='product-tags'>
                {data.tags.map(tag => (
                    <AtTag className='product-tag' size='small' circle>{tag}</AtTag>
                ))}
            </View>
            <View className='product-number-wrapper' onClick={preventBubble}>
                <View className='icon-add-wrapper' onClick={addProduct}>
                    <AtIcon className='icon-add' value='add' color='white' />
                </View>
                {number === 0 ? null : (
                    <>
                        <View className='product-number'>{number}</View>
                        <View className='icon-subtract-wrapper' onClick={subtractProduct}>
                            <AtIcon className='icon-subtract' value='subtract' color='#f9c' />
                        </View>
                    </>
                )}
            </View>
        </View>
    )
}

export default Products