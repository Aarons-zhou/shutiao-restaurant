// import { useDidShow } from '@tarojs/taro'
// import { useEffect } from 'react'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Header from '../../component/Header/index'
import SwiperComponent from '../../component/Swiper/index'
import Products from '../../component/Products/index'
import logo from '../../Image/navigation-title.png'
import './index.less'

class index extends PureComponent {
    componentDidMount() { }

    render() {
        return (
            <View className='index'>
                {Header(this.props.upperBarHeight)}
                <image className='sticky-logo' src={logo} alt='logo' />
                <View className='main'>
                    {SwiperComponent()}
                    {Products()}
                </View>
            </View>
        )
    }
}

export default connect(
    ({ upperBarHeight }) => ({ upperBarHeight }),
)(index)

// export default main