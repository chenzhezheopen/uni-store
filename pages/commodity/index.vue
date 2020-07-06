<template>
	<div class="commodity">
		<div class="from-check">
			<img class="out" src="images/iconfont/tc2.png"/>
			
			<div class="img-box">
				<img style="width: 1.7rem;border-radius: 5px;margin-top: -.7rem;" src="images/cart/yf3.jpg"/>
				<div class="title">
					<a class="f16 pr c-red line-height20"></a>
					<a class="f12 color2 line-height20">iTravel Series 旅游系列</a>
				</div>
			</div>
			<div class="size">
				<div class="size-top">尺寸</div>
				<div class="size-select select">
					<div class="size-list1 check">S</div>
					<div class="size-list1">M</div>
					<div class="size-list1">L</div>
					<div class="size-list1">XL</div>
				</div>
			</div>
			<div class="size">
				<div class="size-top">尺寸</div>
				<div class="size-select select">
					<div class="size-list1 check">S</div>
					<div class="size-list1">M</div>
					<div class="size-list1">L</div>
					<div class="size-list1">XL</div>
				</div>
			</div>
			<div class="size">
				<div class="size-top">类型</div>
				<div class="size-select2 select">
					<div class="size-list1 check">这是一段文字</div>
					<div class="size-list1">这是一段</div>
					<div class="size-list1">这段</div>
					<div class="size-list1">XL</div>
				</div>
			</div>
			<div class="price-box">
				<div class="number">
					<div class="reduce"><img src="images/iconfont/reduce.png"/></div>
					<input class="sort" type="number" readonly="readonly" value="1.00" />
					<div class="add"><img src="images/iconfont/add2.png"/></div>
				</div>
				<div class="price">
					<a class="f16">￥</a>
					<a class="price-all c-red">99.9</a>
				</div>
			</div>
			<div style="height: 150px;"></div>
			<input class="submit-btn href" data-url="sort-to-pay.html" type="button"  value="确定" />
		</div>
		<!--分享-->
		<div class="fx-bottom">
			<div class="mui-list-io-tig">
		    	<div class="size25 top_down href" data-url = "yljl.html">
		    		<div class="img-container1 flex_center img-container">
		    			<img src="newimg/iconfont/wx2.png"/>
		    		</div>
					<p>微信</p>
		    	</div>
		    	<div class="size25 top_down">
		    		<div class="img-container2 flex_center img-container">
		    			<img src="newimg/iconfont/pyq.png"/>
		    		</div>
					<p>朋友圈</p>
		    	</div>
		    	<div class="size25 top_down js">
		    		<div class="img-container3 flex_center img-container">
		    			<img src="newimg/iconfont/QQ.png"/>
		    		</div>
					<p>QQ</p>
		    	</div>
		    	<div class="size25 top_down">
		    		<div class="img-container2 flex_center img-container">
		    			<img src="newimg/iconfont/wb.png"/>
		    		</div>
					<p>微博</p>
		    	</div>
		    	<div class="size25 top_down js">
		    		<div class="img-container3 flex_center img-container">
		    			<img src="newimg/iconfont/lj.png"/>
		    		</div>
					<p>复制链接</p>
		    	</div>
		    </div>	
		    <div class="fx-out">
		    	<img src="images/iconfont/cha.png"/>
		    </div>
		</div>
			<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
				<a class="aui-navBar-item" @tap="navigateBack()">
					<img src="images/iconfont/return.png" style="width: 20px;"/>
				</a>
				<div class="aui-center">
					<span class="aui-center-title">商品详情</span>
				</div>
				<a class="aui-navBar-item fx" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
					<img src="images/iconfont/fx.png" style="width: 25px;height: 25px;margin-right: 10px;"/>
				</a>
			</header>
				<div style="height: 79px;"></div>
				<div class="mui-top-img">
					<img src="images/img/commdity.png" data-preview-src="images/img/commdity.png"/>
				</div>
				<div class="bottom-fan">
					<div>
						<a class="color4 f14 flex1">抵后</a>
						<a class="f16">现金购买</a>
					</div>
					<div>
						<span class="flex1">
							<a class="f14 color4">￥</a><a class="font-w color4" style="margin-right: 10px;font-size: 25px;">0.00</a><a class="f12 color4">京东物流价18.0</a>
						</span>
						<a class="f16 font-w">返20积分</a>
					</div>
				</div>
				<div class="sort-explain">
					<span class="f16 line-height20 name">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</span>
					<div style="display: flex;"><div class="tag f16">供应商：自营</div></div>
				</div>
				<div class="yf">
					<a class="color2 f14">运费</a>
					<a class="f14">1件10元每加1件加10元</a>
				</div>
				<div class="bottom">
					<img src="images/img/commdity-bottom1.png"/>
					<img src="images/img/commdity-bottom2.png"/>
					<img src="images/img/commdity-bottom3.png"/>
					<img src="images/img/commdity-bottom4.png"/>
					<img src="images/img/commdity-bottom5.png"/>
					<img src="images/img/commdity-bottom6.png"/>
				</div>
		    	<div style="height: 60px;"></div>
			<footer class="footer">
				<div class="img-c href" data-url = "chatroom.html"><img src="images/iconfont/kf2.png"/></div>
				<div class="img-c href" data-url = "cart.html"><img src="images/iconfont/gwc.png"/><div class="num">12</div></div>
				<div class="img-c gwc-add"><img src="images/iconfont/tjgwc.png"/></div>
				<div class="btn-c btn-c1" data-tag = "1">
					<span class="f12"><a class="color4 f20 font-w">￥</a><a class="color4 f20 font-w price1">20.00</a></span>
					<a class="color4 f12 line-height16">现金购买返20积分</a>
				</div>
				<div class="btn-c btn-c2" data-tag = "2">
					<span class="f12"><a class="color4 f20 font-w">￥</a><a class="color4 f20 font-w price2">0.00</a></span>
					<a class="color4 f12 line-height16">抵扣20积分</a>
				</div>
			</footer>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/commodity.less';
</style>
