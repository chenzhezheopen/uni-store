<template>
	<view class="sort-to-pay">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img src="http://www.bolecpw.com/code/uni/images/iconfont/return.png" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">确认订单</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
			<div style="height: 79px;"></div>
			<div class="mui-content">	
				<ul style="    margin: 10px 0;padding: 0;background: #fff;">
					<li class="mui-table-view-cell addressline href" data-url = "location.html">
						<div class="mui-menu">
							<div class="rank">
								<img class="mui-media-object mui-pull-left aiw" src="http://www.bolecpw.com/code/uni/images/iconfont/address.png">
							</div>
							<div class="mui-box">
								<a class="info-xt f16">收货人：王小王   158082425132</a>
								<a class="down-info f14">收货地址:广东省-深圳市-福田区深南大道1111号无名摩登大厦6楼A2</a>
							</div>
							<div class="tag"><img src="http://www.bolecpw.com/code/uni/images/iconfont/xyb.png"/></div>
						</div>
					</li>
					<!--<li class="mui-table-view-cell addressline new href" data-url = "location.html">
						<div class="mui-menu">
							<img class="mui-media-object mui-pull-left aiw" src="images/iconfont/add.png">
							<div class="mui-media-body">
								<p class='mui-ellipsis-2 f16'>新增收货地址</p>
							</div>
						</div>
					</li>-->
				</ul>	
				<div class="commodity commodity0">
					<div class="menu href" data-url="order-detail.html">
						<div class="sort-top">
							<img src="http://www.bolecpw.com/code/uni/newimg/iconfont/dianpu.png"/>
						</div>
						<div class="commodity-detail">
							<div class="commodity-img">
								<img src="http://www.bolecpw.com/code/uni/images/cart/yf.jpg" />
							</div>
							<div class="commodity-title">
								<!--价格加数量-->
								<div class="price-and-number">
									<a class="f14 line-height20" style="margin-bottom: 5px;">￥0.00</a>
									<a class="f12">x1</a>
								</div>
								<p class="commodity-name">
									空气清新剂香薰室内香水摆件
								</p>
								<a class="category">
									颜色随机,台
								</a>
							</div>
						</div>
						<div class="commodity-pay">
							<a class="f14">共1件，总计：</a>
							<a class="f14 font-w">￥</a>
							<a class="f18 font-w">17.4</a>
						</div>
					</div>
				</div>
			</div>	
<!--			
			<div class="xuantian">
				<div class="add-title">以下是报喜鸟加工的定制店专用（选填）</div>
				<ul class="mui-table-view">
					<div class="list-table list-table-from">
						<a class="f16">门店号</a>
						<input type="text" placeholder="五星定制"  style="flex: 1;" />
					</div>
					<div class="list-table list-table-from">
						<a class="f16">客户姓名</a>
						<input type="text" placeholder="五星定制"  style="flex: 1;" />
					</div>
					<div class="list-table list-table-from">
						<a class="f16">面料货号</a>
						<input type="text" placeholder="五星定制"  style="flex: 1;" />
					</div>
					<div class="list-table list-table-from">
						<a class="f16">面料标签号</a>
						<input type="text" placeholder="五星定制" style="flex: 1;" />
					</div>
				</ul>
			</div>-->
			<div class="lx href" data-url = "wuliu.html">
				<a class="f14">积分</a>
				<img class="che" src="http://www.bolecpw.com/code/uni/images/iconfont/cl.png"/>
				<div style="flex: 1;"></div>
				<a class="f14">共17,可使用3积分</a>
			</div>
			
			<div class="price">
				<div class="list-box">
					<a class="x1 f14 color2">商品售价：</a>
					<a class="f14">￥230.70</a>
				</div>
				<div class="list-box">
					<a class="x1 f14 color2">运费：</a>
					<a class="f14">+0.00</a>
				</div>
				<div class="list-box">
					<a class="x1 f14 color2">积分抵扣：</a>
					<a class="f14">-3</a>
				</div>
				<div class="list-box">
					<a class="x1 f14 color2"></a>
					<span><a class="f14">实付款</a><a class="c-red f12">￥</a><a class="c-red f16 font-w">157.00</a></span>
				</div>
			</div>
			
			<div class="addlx">
				<a class="f16 type">备注：</a>
				<input type="text" class="eg" placeholder="20字以内" />
			</div>
			
			<div class="xuantian">
				<ul class="mui-table-view">
					<div class="list-table">
						<a class="f16" style="flex: 1;">配送方式</a>
						<a class="f16">快递免邮</a>
						<a class="dih" href="#forward"></a>
						<img class="icon" src="http://www.bolecpw.com/code/uni/images/iconfont/xyb.png"/>
					</div>
					<div class="list-table">
						<a class="f16" style="flex: 1;"></a>
						<a class="f16">共一件商品 合计</a>
						<a class="f16 c-red">￥300</a>
					</div>
				</ul>
				
			</div>   

			<div style="height: 60px;"></div>

		<nav class="mui-bar mui-bar-tab mui-bar-topline" style="display: flex;align-items: center;">
			<div class="mui-bar-lable">
				<a>共</a><a class="c-red">1</a><a>件&nbsp;</a><a>总金额：</a><a class="c-red">￥729.32</a>
			</div>
			<div class="mui-bar-topline-add touch-active" @click="navigate('submit-dd')">
				<div class="mui-pull-right tijiaodingdan">
					<a>提交订单</a>
				</div>
			</div>
		</nav>	
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
	@import '@/common/less/sort-to-pay.less';
</style>
