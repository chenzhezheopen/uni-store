
import {
  ceshi
} from './config'
// 请求超时时间
// axios.defaults.timeout = 30000



export default {
  /**
   * 请求发现页面首页轮播图
   */
  ceshi () {
    return uni.request({
		"request": 120000, // 自定义配置request请求超时时间为120秒
		        "connectSocket": 60000, // 官方默认60秒
		        "uploadFile": 60000, // 官方默认60秒
		        "downloadFile": 60000, // 官方默认60秒
  		cache : false,
  		type : "GET",
  		url: ceshi, 
  	})
  }
}
