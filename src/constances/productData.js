//用于模拟数据
import { productImgs } from './imgAddress'

const products = [{
    name: '甜甜花酿鸡',
    price: 0.01,
    tags: ['1人份', '甜甜花', '禽肉'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '三彩团子',
    price: 0.02,
    tags: ['1人份', '牛奶', '金鱼草', '绯樱绣球', '稻米'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '蘑菇披萨',
    price: 0.03,
    tags: ['2人份', '蘑菇', '面粉', '大白菜', '奶酪'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '北地苹果焖肉',
    price: 0.04,
    tags: ['1人份', '兽肉', '苹果', '黄油', '胡椒'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '蜜酱胡萝卜煎肉',
    price: 0.05,
    tags: ['2人份', '兽肉', '胡萝卜', '糖'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '风神杂烩菜',
    price: 0.06,
    tags: ['3人份', '胡萝卜', '土豆', '洋葱'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '金丝虾球',
    price: 0.07,
    tags: ['2人份', '虾仁', '土豆', '面粉'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '绯樱饼',
    price: 0.08,
    tags: ['1人份', '稻米', '糖', '绯樱绣球'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '明月蛋',
    price: 0.09,
    tags: ['1人份', '鱼肉', '虾仁', '鸟蛋', '面粉'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '蟹黄壳壳烧',
    price: 0.10,
    tags: ['2人份', '螃蟹', '蟹黄'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '堆高高',
    price: 0.11,
    tags: ['1人份', '兽肉', '土豆', '小灯草', '奶酪'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '翡玉什锦袋',
    price: 0.12,
    tags: ['1人份', '莲蓬', '绝云椒椒', '大白菜', '火腿'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '仙跳墙',
    price: 0.13,
    tags: ['4人份', '火腿', '螃蟹', '虾仁', '松茸'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '珍珠翡翠白玉汤',
    price: 0.14,
    tags: ['1人份', '金鱼草', '豆腐', '莲蓬'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '嘟嘟莲海鲜羹',
    price: 0.15,
    tags: ['3人份', '螃蟹', '嘟嘟莲', '薄荷'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '扣三丝',
    price: 0.16,
    tags: ['1人份', '火腿', '禽肉', '竹笋', '蘑菇'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '绯樱天妇罗',
    price: 0.17,
    tags: ['1人份', '虾仁', '堇瓜', '绯樱绣球', '面粉'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '莲花酥',
    price: 0.18,
    tags: ['1人份', '杏仁', '面粉', '黄油', '糖'],
    detail: '由甜甜花和禽肉酿制而成'
  },
  {
    name: '黄油煎鱼',
    price: 0.19,
    tags: ['2人份', '黄油', '鱼肉', '盐', '小灯草'],
    detail: '由甜甜花和禽肉酿制而成'
  },
]

for(let i=0;i<products.length;i++){
  products[i].key = i+1
  products[i].img = productImgs[i]
}

export default products
