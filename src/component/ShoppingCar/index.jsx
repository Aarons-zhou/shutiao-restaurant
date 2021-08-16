import { useCallback, useEffect, useState } from 'react'
import { showToast } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtBadge, AtIcon, AtButton } from "taro-ui"
import 'taro-ui/dist/style/components/action-sheet.scss'
import 'taro-ui/dist/style/components/badge.scss'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/loading.scss'
import './index.less'

//购物车按钮
function ShoppingCar(shoppingCarProduct) {
    const [open, setOpen] = useState(false)
    const [number, setNumber] = useState(0)

    //冒泡排序：对shoppingCarProduct顺序进行整理
    const bubbleSort = useCallback(productList => {
        for (let i = 0; i < productList.length - 1; i++) {
            for (let j = 0; j < productList.length - 1 - i; j++) {
                if (productList[j].key > productList[j + 1].key) {
                    const temp = productList[j]
                    productList[j] = productList[j + 1]
                    productList[j + 1] = temp
                }
            }
        }
    }, [])

    const showList = () => {
        bubbleSort(shoppingCarProduct)
        setOpen(true)
    }

    //监听商品列表，更改购物车显示数量
    useEffect(() => {
        let number = 0
        !shoppingCarProduct.length ? null : (
            shoppingCarProduct.forEach(item => {
                number += item.number
            })
        )
        setNumber(number)
    }, [shoppingCarProduct])

    return (
        <View className='shopping-cart'>
            <AtBadge value={number} className='badge'>
                <View className='icon-wrapper' onClick={showList}>
                    <AtIcon className='icon-sc' value='shopping-cart' size='25' color='#f0f0f0'></AtIcon>
                </View>
            </AtBadge>
            {ShoppingCarList(shoppingCarProduct, open, setOpen,)}
        </View>
    )
}

//购物车商品列表
function ShoppingCarList(shoppingCarProduct, open, setOpen) {

    const [totalPrice, setTotalPrice] = useState(0)

    //关闭购物车列表的回调
    const close = () => {
        setOpen(false)
    }

    //支付回调
    const goPay = () => {
        showToast({
            title: '你不会真以为能付款吧？',
            icon: 'none',
            duration: 2500
        })
    }

    //监听商品列表，更改购物车总价
    useEffect(() => {
        let price = 0
        !shoppingCarProduct.length ? null : (
            shoppingCarProduct.forEach(item => {
                price += (parseInt(100 * item.price) * item.number)
            })
        )
        setTotalPrice(price * (1 / 100))
    }, [shoppingCarProduct])

    return (
        <AtActionSheet
            className='action-sheet'
            isOpened={open}
            title='购物车'
            onClose={close}
        >
            <ScrollView className='product-scroll' scrollY>
                {!shoppingCarProduct.length ? (
                    <View className='warn'>您还没有选购任何商品哦</View>
                ) : shoppingCarProduct.map(product => ShoppingCarItem(product))}
            </ScrollView>
            <View className='product-underbar'>
                <View className='total-price'>{`￥${totalPrice}`}</View>
                <AtButton
                    className='pay-button'
                    type='primary'
                    size='small'
                    circle={true}
                    onClick={goPay}
                >去支付</AtButton>
            </View>
        </AtActionSheet>
    )
}

//购物车商品列表单项商品
function ShoppingCarItem(product) {
    return (
        <AtActionSheetItem className='product-item'>
            <image src={product.img} alt={product.name}></image>
            <View className='name'>{product.name}</View>
            <View className='number'>{product.number}</View>
            <View className='price'>{`￥${product.number * product.price}`}</View>
        </AtActionSheetItem>
    )
}

export default ShoppingCar