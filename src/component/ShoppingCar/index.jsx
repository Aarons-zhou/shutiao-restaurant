import { useEffect, useState } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtBadge, AtIcon, AtButton, AtToast } from "taro-ui"
import 'taro-ui/dist/style/components/action-sheet.scss'
import 'taro-ui/dist/style/components/badge.scss'
import 'taro-ui/dist/style/components/toast.scss'
import 'taro-ui/dist/style/components/icon.scss'
import './index.less'

//购物车按钮
function ShoppingCar(shoppingCarProduct) {
    const [open, setOpen] = useState(false)
    const [number, setNumber] = useState(0)

    const showList = () => {
        //冒泡排序：对shoppingCarProduct顺序进行整理
        for (let i = 0; i < shoppingCarProduct.length - 1; i++) {
            for (let j = 0; j < shoppingCarProduct.length - 1 - i; j++) {
                if (shoppingCarProduct[j].key > shoppingCarProduct[j + 1].key) {
                    const temp = shoppingCarProduct[j]
                    shoppingCarProduct[j] = shoppingCarProduct[j + 1]
                    shoppingCarProduct[j + 1] = temp
                }
            }
        }

        setOpen(true)
    }

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

//商品列表
function ShoppingCarList(shoppingCarProduct, open, setOpen) {

    const [totalPrice, setTotalPrice] = useState(0)
    const [toast, setToast] = useState(false)

    //关闭购物车列表的回调
    const close = () => {
        setOpen(false)
    }

    //支付回调
    const goPay = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 2500)
    }

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
            <AtToast
                isOpened={toast}
                text="你不会真以为能付款吧"
                icon="help" />
        </AtActionSheet>
    )
}

//商品列表单项
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