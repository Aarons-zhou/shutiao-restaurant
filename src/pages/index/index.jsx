// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Header from '../../component/Header/index'
import SwiperComponent from '../../component/Swiper/index'
import Products from '../../component/Products/index'
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
            </View>
        </View>
    )
}

export default connect(
    ({ navigationBarInfo, shoppingCarProduct }) => ({ navigationBarInfo, shoppingCarProduct }),
    { updateShoppingCar }
)(index)
