// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Header from '../../component/Header/index'
import SwiperComponent from '../../component/Swiper/index'
import Products from '../../component/Products/index'
import { logo } from '../../constances/imgAddress'
import './index.less'

function index(props) {
    return (
        <View className='index'>
            {Header(props.upperBarHeight)}
            <image className='sticky-logo' src={logo} alt='logo' />
            <View className='main'>
                {SwiperComponent()}
                {Products(props.upperBarHeight)}
            </View>
        </View>
    )
}

export default connect(
    ({ upperBarHeight }) => ({ upperBarHeight })
)(index)

// export default main