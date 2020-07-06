<template>
	<view class="help">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">积分马上使用</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div style="width: 100%;height: 8rem;overflow: hidden;"><img :src="$host+'newimg/other/help.jpg'" style="width: 100%;"/></div>
		<div class="container">
			<div class="container1">
				<div class="title"><a class="f16">积分如何使用</a></div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">1</a>
					</div>
					<a>免费购物：积分直接抵现金免费购物</a>
				</div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">2</a>
					</div>
					<a>抵现购物：用积分+现金购物</a>
				</div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">3</a>
					</div>
					<a>积分变现：每日签到，积分变现金，直接提现</a>
				</div>
				<div class="explain-list">
					<div class="number">
						<a class="f14">4</a>
					</div>
					<a>1积分等于1元人民币值</a>
				</div>
			</div>
		</div>
		<div class="h1">
			<div class="line"></div>
			<a>获得更多积分</a>
			<div class="line"></div>
		</div>
		
		<div class="container3">
			<img :src="$host+'ewimg/list1/list-top10.gif'"/>
			<a>首次平台关联成功送99积分</a>
		</div>
		<div class="container3">
			<img :src="$host+'newimg/list1/list-top10.gif'"/>
			<a>首次下单买多少返多少</a>
		</div>
		<div class="container3">
			<img :src="$host+'newimg/list1/list-top10.gif'"/>
			<a>POS刷卡获得积分</a>
			<div class="btn"><a>了解一下</a></div>
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
	@import '@/common/less/help.less';
</style>
