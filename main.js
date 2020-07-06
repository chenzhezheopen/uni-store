import Vue from 'vue'
import App from './App'

import pageHead from '@/pages/subpage/demo1.vue'

Vue.prototype.$host = 'http://www.bolecpw.com/code/uni/'
import GoEasy from 'lib/goeasy-1.0.5.js'
// 底部
import tabBar from '@/pages/component/tabbar/index.vue'
Vue.component('tab-bar', tabBar)

Vue.component('demoo',pageHead)

Vue.config.productionTip = false
Vue.prototype.navigate = function(url){
    uni.navigateTo({
    	url: url
    })
}
Vue.prototype.navigateBack = function(url){
    uni.navigateBack()
}
App.mpType = 'app'

const app = new Vue({
    ...App
})

//初始化GoEasy
Vue.prototype.$goEasy = new GoEasy({
	host: 'hangzhou.goeasy.io',
	appkey: 'BC-648ca4ac4c0d4fe7b784c15d979bb8fe',
	onConnected: function () {		console.log("GoEasy connect successfully.")    },    onDisconnected: function () {		console.log("GoEasy disconnected.")    },    onConnectFailed: function (error) {
		uni.showToast({
			icon:"none",
			title:"GoEasy连接失败，请确认main.js文件15行appkey和host配置正确.",
			duration:2000
		})    }
});	

//格式化时间
Date.prototype.formatDate = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if(o.hasOwnProperty(k)){
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	return fmt;
};

app.$mount()
