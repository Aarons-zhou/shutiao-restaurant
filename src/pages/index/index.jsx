// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Header from '../../component/Header'
import SwiperComponent from '../../component/Swiper'
import Products from '../../component/Products'
import ShoppingCar from '../../component/ShoppingCar'
import { updateShoppingCar } from '../../redux/action'
import { logo } from '../../constances/imgAddress'
import './index.less'

function index(props) {
    const { navigationBarInfo:{upperBarHeight}, shoppingCarProduct, updateShoppingCar } = props
    return (
        <View className='index'>
            {Header(upperBarHeight)}
            <image className='sticky-logo' src={logo} alt='logo' />
            <View className='main'>
                {SwiperComponent()}
                {Products(upperBarHeight, updateShoppingCar)}
                {ShoppingCar(shoppingCarProduct)}
            </View>
        </View>
    )
}

export default connect(
    ({ navigationBarInfo, shoppingCarProduct }) => ({ navigationBarInfo, shoppingCarProduct }),
    { updateShoppingCar }
)(index)
