// 引入axios组件
import axios from 'axios'

// 实例化axios对象
const instance = axios.create({
  // 设置基准路径
  baseURL:
    'http://ttapi.research.itcast.cn/mp/v1_0/'
  // 设置头部请求信息
  // headers: {
  //   Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
  // }
})

// 导出
export default instance
