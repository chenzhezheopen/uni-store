<template>
	<div class="cat9">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img src="http://www.bolecpw.com/code/uni/images/iconfont/return.png" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">新用户专享</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div class="mui-scroll">
			<div style="height: 79px;"></div>
			<img src="http://www.bolecpw.com/code/uni/images/img/cat9-top.png" style="width: 100%;"/>
			<div class="store-list">
				<div class="href" v-for="i in 10">
					<img src="http://www.bolecpw.com/code/uni/images/img/commdity-bottom6.png" class="img-st"/>
					<div class="content">
						<a class="f14 name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
						<div class="gou">
							<a class="f14  line-height19">￥99.00</a>
							<div class="btn">立即购买</div>
						</div>
						<div class="yh">
							<div class="btn-ml">
								<a class="f16">抵后</a><a class="font-w f20" style="transform-origin: center;transform:scaleY(1.4) ;">￥20.00</a>
							</div>
							<a style="flex: 1;"></a>
						</div>
					</div>
				</div>
		   </div>
		</div>
	</div>
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
	@import '@/common/less/cat9.less';
</style>
