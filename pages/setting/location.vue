<template>
	<view class="location">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @click="navigateBack">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">我的收货地址</span>
			</div>
			<a class="aui-navBar-item href" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<span class="aui-center-title">新增</span>
			</a>
		</header>
		<div style="height: calc(.2rem + 80px);">
		</div>
			<div class="many-content">
				<div class="mui-menu">
					<div class="rank">
						<a class="color4 f16">张</a>
					</div>
					<div class="mui-box">
						<div class="box1">
							<a class="info-xt name">张三</a><a class="info-xt pho">13986683465</a><a class="check-mr">默认</a>
						</div>
						<div class="rd">
							<a class="f14 color">江苏省苏州市常熟市 东南开发区等等等等等等等等等等等等等等等等等等等等等等</a>
						</div>
					</div>
					<div class="img-contain href" data-url = "change-location.html">
						<img :src="$host+'newimg/iconfont/bianji.png'"/>
					</div>
				</div>
				<div class="mui-menu">
					<div class="rank">
						<a class="color4 f16">张</a>
					</div>
					<div class="mui-box">
						<div class="box1">
							<a class="info-xt name">张三</a><a class="info-xt pho">13986683465</a>
						</div>
						<div class="rd">
							<a class="f14 color">江苏省苏州市常熟市 东南开发区等等等等等等等等等等等等等等等等等等等等等等</a>
						</div>
					</div>
					<div class="img-contain href" data-url = "change-location.html">
						<img :src="$host+'newimg/iconfont/bianji.png'"/>
					</div>
				</div>
				<div class="mui-menu">
					<div class="rank">
						<a class="color4 f16">张</a>
					</div>
					<div class="mui-box">
						<div class="box1">
							<a class="info-xt name">张三</a><a class="info-xt pho">13986683465</a>
						</div>
						<div class="rd">
							<a class="f14 color">江苏省苏州市常熟市 东南开发区等等等等等等等等等等等等等等等等等等等等等等</a>
						</div>
					</div>
					<div class="img-contain href" data-url = "change-location.html">
						<img :src="$host+'newimg/iconfont/bianji.png'"/>
					</div>
				</div>
				<div class="mui-menu">
					<div class="rank">
						<a class="color4 f16">张</a>
					</div>
					<div class="mui-box">
						<div class="box1">
							<a class="info-xt name">张三</a><a class="info-xt pho">13986683465</a>
						</div>
						<div class="rd">
							<a class="f14 color">江苏省苏州市常熟市 东南开发区等等等等等等等等等等等等等等等等等等等等等等</a>
						</div>
					</div>
					<div class="img-contain href" data-url = "change-location.html">
						<img :src="$host+'newimg/iconfont/bianji.png'"/>
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
	@import '@/common/less/location.less';
</style>
