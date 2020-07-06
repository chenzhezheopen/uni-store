<template>
	<view class="submit-dd">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">提交订单</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div class="shade"></div>
		<div class="from-menu from-add-style">
		  <div class="input-container">
			  <a>您的订单号</a>
			  <input type="text" disabled="disabled" placeholder="DD5346534654631" />
		  </div>
		  <div class="input-container">
			  <a>应付金额</a>
			  <input class="red" type="text" disabled="disabled" placeholder="￥0.00" />
		  </div>
		  <div class="input-container">
			  <a>优惠金额</a>
			  <input class="red" type="text" disabled="disabled" placeholder="￥0.00" />
		  </div>
		  <div class="input-container">
			  <a>实付金额</a>
			  <input class="red" type="text" disabled="disabled" placeholder="￥0.00" />
		  </div>
		</div>
		
		<div class="from-menu2 from-add-style">
			<div class="title">
				<a>请选择支付方式</a>
			</div>
			<div class="input-container">
				<div class="img-container">
					<img :src="$host+'images/iconfont/wx.png'"/>
				</div>
				<div class="input-center">
					<a class="f16">微信支付</a>
					<a class="f12">亿万用户的选中更快更安全</a>
				</div>
				<div class="check-container">
					<div class="check check-in"></div>
				</div>
			</div>
			<div class="input-container">
				<div class="img-container">
					<img :src="$host+'images/iconfont/qb.png'"/>
				</div>
				<div class="input-center">
					<a class="f16">余额支付</a>
					<a class="f12">当前可用余额：0.0元</a>
				</div>
				<div class="check-container">
					<div class="check"></div>
				</div>
			</div>
		  
		</div>
		
		<input type="button" class="sublim-btn" value="确认支付" />
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
	@import '@/common/less/submit-dd.less';
</style>
