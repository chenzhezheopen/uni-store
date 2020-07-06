<template>
	<view class="yljl">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">浏览记录</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<span class="aui-center-title b1" style="color: #333;font-weight: 100;">清空</span>
				<span class="aui-center-title b1 bj" style="color: #333;font-weight: 100;">编辑</span>
				<span class="aui-center-title wc" style="color: #333;font-weight: 100;display: none;">完成</span>
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="container">
			<div class="store-list">
				<div class="top-title">
					<a class="font-w">今天</a>
				</div>
				<div class="href sort-list" v-for="i in 10" data-url = "commodity-detail.html">
					<div class="delete-container">
						<div class="delete"><img src=""/></div>
					</div>
					<img :src="$host+'images/img/commdity-bottom6.png'" class="img-st"/>
					<div class="content">
						<a class="f14 name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
						<div class="gou">
							<a class="c-red f16 font-w line-height19">￥99.00</a>
							<div class="btn add-btn"><img :src="$host+'images/iconfont/gwc.png'"/></div>
						</div>
						<a class="c-red f12 line-height19">京东物流价：45.00</a>
						<a class="color2 f12 line-height19">价格更新于5分站前</a>
					</div>
				</div>
			</div>
		</div>
		<footer class="delete-btn">
			<div class="all_delete"><img src=""/></div>
			<a class="color2 f14 title">全选</a>
			<div style="flex: 1;"></div>
			<div class="btn">删除</div>
		</footer>
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
	@import '@/common/less/yljl.less';
</style>
