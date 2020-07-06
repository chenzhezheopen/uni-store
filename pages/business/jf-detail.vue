<template>
	<view class="jf-detail">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">积分明细</span>
			</div>
			<a class="aui-navBar-item">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="container">
			<div class="store-list">
				<div class="top-title">
					<select class="check-month">
						<option>2020-02</option>
						<option>2020-02</option>
						<option>2020-02</option>
					</select>
					<img class="xia" :src="$host+'newimg/iconfont/xia.png'"/>
				</div>
				<div class="sort-list">
					<div class="img-st">
						<img :src="$host+'images/img/commdity-bottom6.png'"/>
					</div>
					<div class="content">
						<a class="f19 name line-height20">商品兑换</a>
						<a class="color2 f12 line-height19">2020-02-11 16:10:10</a>
					</div>
					<div class="img-st">
						<a class="a1">-3.00</a>
					</div>
				</div>
				<div class="sort-list">
					<div class="img-st">
						<img :src="$host+'images/img/commdity-bottom6.png'"/>
					</div>
					<div class="content">
						<a class="f19 name line-height20">新用户首次下单送积分</a>
						<a class="color2 f12 line-height19">2020-02-11 16:10:10</a>
					</div>
					<div class="img-st">
						<a class="a2">+15.00</a>
					</div>
				</div>
				<div class="sort-list">
					<div class="img-st">
						<img :src="$host+'images/img/commdity-bottom6.png'"/>
					</div>
					<div class="content">
						<a class="f19 name line-height20">商品兑换</a>
						<a class="color2 f12 line-height19">2020-02-11 16:10:10</a>
					</div>
					<div class="img-st">
						<a class="a1">-3.00</a>
					</div>
				</div>
				<div class="sort-list">
					<div class="img-st">
						<img :src="$host+'images/img/commdity-bottom6.png'"/>
					</div>
					<div class="content">
						<a class="f19 name line-height20">商品兑换</a>
						<a class="color2 f12 line-height19">2020-02-11 16:10:10</a>
					</div>
					<div class="img-st">
						<a class="a2">+3.00</a>
					</div>
				</div>
			</div>
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
	@import '@/common/less/jf-detail.less';
</style>
