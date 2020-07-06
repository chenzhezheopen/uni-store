<template>
	<view class="about-app">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">关于我们</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="content">
			<div class="info">
				<img :src="$host+'images/cart/yf.jpg'"/>
			</div>
			<a style="letter-spacing: 1px;margin-top: 30px;color: #b07335; font-size: 20px;letter-spacing: 2px;">卡盟app</a>
			<div class="addlx" style="margin-top: 20px;">
				<div class="info2">
					<a class="line-title f14 line-height20">积分是卡盟为了回馈用户，刷卡手续费按照1：1的比例兑换积分，1积分等于1元，积分可在"卡盟商城"APP进行兑换超值商品</a>
				</div>
			</div>
			<div style="width: 100%;height: 1px;background: #ccc;margin: 30px 0 15px 0;"></div>
			<span><a class="f14">客服电话：</a><a class="color3 pho">4009 13541 352</a></span>
		</div>
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
	@import '@/common/less/about-app.less';
</style>
