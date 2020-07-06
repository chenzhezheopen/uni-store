<template>
	<view class="my-jf">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item opt" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title opt" style="color: #000;font-size: 16px;">我的</span>
			</div>
			<a class="aui-navBar-item" @click="navigate('../business/award-regular')"> 
				<span class="aui-center-title opt" style="color: #000;font-size: 16px;">规则</span>
			</a>
		</header>
		<div style="height: 79px;"></div>
		
		<div class="jf-content">
			<img class="m1" :src="$host+'images/iconfont/money.png'"/>
			<a class="a1">积分总额</a>
			<a class="c-red f16 font-w">0</a>
			<div class="detail-btn" @click="navigate('../business/jf-detail')"><a class="c-red f14">查看明细</a></div>
		</div>
		
		<div class="top-title">
			<div class="f16">热销商品</div>
		</div>
		<div class="store-list">
			<div v-for="i in 10">
				<img :src="$host+'images/img/commdity-bottom6.png'" class="img-st"/>
				<div class="content">
					<a class="f14 name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
					<a class="c-red f16 font-w line-height19 price">￥99.00</a>
					<a class="color2 f12 line-height19 price2">市场价价：450.00</a>
				</div>
			</div>
		</div>
		<div style="height:55px"></div>
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
	@import '@/common/less/my-jf.less';
</style>
