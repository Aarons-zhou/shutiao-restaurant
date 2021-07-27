import { View } from '@tarojs/components'
import './index.less'

function index() {
  return (
    <View className='index'>
      <View className='text'>薯条餐厅</View>
      <View className='bottom'>
        <View className='text-associate'>请选择你的就餐人数</View>
        <View className='number'>
          <View className='person-number'>1人</View>
          <View className='person-number'>2人</View>
          <View className='person-number'>3人</View>
          <View className='person-number'>4人</View>
        </View>
      </View>
    </View>
  )
}
export default index