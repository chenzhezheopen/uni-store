<template>
	<view class="setting">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title" style="font-weight: bold;">个人信息</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div style="height: 79px;"></div>
			<div class="content">
				<div class="container3" @click="navigate('../setting/location')">
					<img class="left-img" :src="$host+'newimg/iconfont/dz.png'"/>
					<a class="content-lable">收货地址</a>
					<img class="xyb" :src="$host+'newimg/iconfont/xyb1.png'"/>
				</div>
			</div>
			<div class="content">
				<div class="container3" @click="navigate('../setting/change-pass')">
					<img class="left-img" :src="$host+'newimg/iconfont/suo2.png'"/>
					<a class="main-title content-lable">修改登录密码</a>
					<img class="xyb" :src="$host+'newimg/iconfont/xyb1.png'"/>
				</div>
				<div class="container3" @click="navigate('../setting/pass-wj')">
					<img class="left-img" :src="$host+'newimg/iconfont/suo3.png'"/>
					<a class="main-title content-lable">忘记支付密码</a>
					<img class="xyb" :src="$host+'newimg/iconfont/xyb1.png'"/>
				</div>
				<div class="container3" @click="navigate('../setting/change-pho')">
					<img class="left-img" :src="$host+'newimg/iconfont/pho.png'"/>
					<a class="main-title content-lable">修改手机号码</a>
					<a class="color2 lable">139****3465</a>
					<img class="xyb" :src="$host+'newimg/iconfont/xyb1.png'"/>
				</div>
				<div class="container3" @click="navigate('../setting/about-app')">
					<img class="left-img" :src="$host+'newimg/iconfont/wd2.png'"/>
					<a class="main-title content-lable">关于我们</a>
					<a class="color2 lable">V1.0.0</a>
					<img class="xyb" :src="$host+'newimg/iconfont/xyb1.png'"/>
				</div>
			</div>
			
			<view class="sublim-btn">退出登录</view>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				
			}
		}
	})
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/setting.less';
</style>
