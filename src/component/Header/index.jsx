import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import { logo } from '../../constances/imgAddress'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/tag.scss'
import './index.less'

function Header(upperBarHeight) {
    return (
        <View className='navigation-wrapper'>
            <View className='safe-area' style={{ height: upperBarHeight + 'rpx' }} />
            <View className='title-area' style={{ top: upperBarHeight + 'rpx' }} />
            <View className='header'>
                <image src={logo} alt='navigation-img' />
            </View>
            {Introduction()}
        </View>
    )
}

function Introduction() {

    const [ellipsis, setEllipsis] = useState(true)

    //展开/收起note的回调
    const openNote = () => {
        setEllipsis(!ellipsis)
    }

    const note = '公告：欢迎光临本餐厅，很高兴为宁服务~菜品皆虚构，出自米哈游-原神，非商用谢谢~'
    return (
        <View className='introduction'>
            <View className='title'>薯条餐厅</View>
            <View className='comment'>
                <Text className='comment1'>⭐ 4.9</Text>
                <Text className='comment2'>月售999+</Text>
            </View>
            <View className='discount'>
                <AtTag size='small'>满50-8</AtTag>
                <AtTag size='small'>满80-20</AtTag>
                <AtTag size='small'>满150-50</AtTag>
            </View>
            {ellipsis?(
            <View className='note-ellipsis'>
                <View children={note}/>
                <AtIcon value='chevron-down' size='15' color='#888' onClick={openNote}/>
            </View>
            ):(
            <View className='note-no-ellipsis'>
                <View children={note}/>
                <AtIcon value='chevron-up' size='15' color='#888' onClick={openNote}/>
            </View>
            )}
            <View className='logo'></View>
        </View>
    )
}

export default Header