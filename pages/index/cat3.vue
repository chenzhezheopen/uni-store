<template>
	<div class="cat3">
				<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
					<a class="aui-navBar-item"  @tap="navigateBack()">
						<img src="http://www.bolecpw.com/code/uni/images/iconfont/return.png" style="width: 20px;"/>
					</a>
					<div class="aui-center">
						<span class="aui-center-title">大牌特卖</span>
					</div>
					<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
					</a>
				</header>
					<div class="mui-scroll">
						<div style="height: 79px;"></div>
						<img src="http://www.bolecpw.com/code/uni/images/iconfont/cat3-top.png" style="width: 100%;"/>
						<div class="container">
							<div class="top-title">
								<div style="width: 16px;height: 16px;border-radius: 50%;background: #f39a36;position: relative;">
									<div style="position: absolute;width: 4px;height: 4px;border-radius: 50%;background: #f39a36;top: -3px;left: -5px;"></div>
								</div>
								<div style="width: .2rem;height: 3px;background: #f39a36;"></div>
								<div class="title color4 f16">大牌特卖</div>
								<div style="width: .2rem;height: 3px;background: #f39a36;"></div>
								<div style="width: 16px;height: 16px;border-radius: 50%;background: #f39a36;position: relative;">
									<div style="position: absolute;width: 4px;height: 4px;border-radius: 50%;background: #f39a36;bottom: -3px;right: -5px;"></div>
								</div>
							</div>
							<div class="store-list">
				            	<div class="href" v-for="i in 10" data-url = "commodity-detail.html">
				            		<img src="http://www.bolecpw.com/code/uni/images/img/commdity-bottom6.png" class="img-st"/>
				            		<div class="content">
				            			<a class="f14 name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
				            			<div class="gou">
				            				<a class="c-red f16 font-w line-height19">￥99.00</a>
				            				<div class="btn">立即购买</div>
				            			</div>
				            			<a class="c-red f12 line-height19">京东物流价：45.00</a>
				            			<a class="color2 f12 line-height19">价格更新于5分站前</a>
				            		</div>
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
	@import '@/common/less/cat3.less';
</style>
