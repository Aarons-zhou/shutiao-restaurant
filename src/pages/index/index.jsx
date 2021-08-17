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
    const { upperBarHeight, windowWidth, shoppingCarProduct, updateShoppingCar } = props
    return (
        <View className='index'>
            {Header(upperBarHeight)}
            <image className='sticky-logo' src={logo} alt='logo' />
            <View className='main'>
                {SwiperComponent(windowWidth)}
                {Products(upperBarHeight, updateShoppingCar,windowWidth)}
                {ShoppingCar(shoppingCarProduct)}
            </View>
        </View>
    )
}

export default connect(
    ({ upperBarHeight, windowWidth, shoppingCarProduct }) => ({ upperBarHeight, windowWidth, shoppingCarProduct }),
    { updateShoppingCar }
)(index)
