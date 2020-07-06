<template>
	<view class="award-regular">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">积分兑换规则</span>
			</div>
			<a class="aui-navBar-item">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="container">
			<div class="container1">
				<div class="title"><a class="f16">积分兑换规则</a></div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">1</a>
					</div>
					<a>每个用户每月获取的积分最多为1800积分,或者30万刷卡交易额产生的费率转化过来的积分;</a>
				</div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">2</a>
					</div>
					<a>从卡盟平台上线以来,每月从平台获取的超过1800积分部分将被扣回,超过1800积分的按1800积分计算;</a>
				</div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">3</a>
					</div>
					<a>客户之前获取的积分从而获得的提现奖金,卡盟平台将不去追回.</a>
				</div>
			</div>
		</div>
		<div style="height: 1rem;"></div>
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
	@import '@/common/less/award-regular.less';
</style>
