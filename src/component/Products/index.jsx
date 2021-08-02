import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
// import "taro-ui/dist/style/components/list.scss"
// import "taro-ui/dist/style/components/icon.scss"
import './index.less'

function Products() {
    // const jumpToProduct = product => {
    //     return () => {
    //         console.log('jumped',product)
    //     }
    // }

    // const jumpToProduct = () => {console.log('jumped')}

    return (
        <View className='products'>
            {/* <AtList className='left-nav'>
                <AtListItem title='标题文字' />
                <AtListItem title='标题文字' onClick={jumpToProduct} />
                <AtListItem title='标题文字' onClick={jumpToProduct} />
                <AtListItem title='标题文字' onClick={jumpToProduct} />
                <AtListItem title='标题文字' onClick={jumpToProduct} />
            </AtList> */}
            <View className='product-wrapper'></View>
        </View>
    )
}

export default Products