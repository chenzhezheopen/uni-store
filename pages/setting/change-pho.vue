<template>
	<view class="change-pho">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @click="navigateBack">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">验证身份</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="login">
			<!--<div class="welcome"><img src="newimg/other/login.png"></div>-->
			<div class="login-form" style="margin-top: .4rem;">
				<div class="login-inp"><img :src="$host+'newimg/iconfont/pho.png'"/><input type="text" value="139 8668 3465" disabled="disabled" id="user"></div>
				<div class="login-inp"><img :src="$host+'newimg/iconfont/yzm.png'"/><input type="number" placeholder="验证码" id="user"><a class="c-red f14">获取验证码</a></div>
				<div class="btn-submit" id="login-go"><a>确认</a></div>
			</div>
			<!--<div class="login-txt"><a href="#">立即注册</a></div>
			<div class="login-txt1 href" data-url = "index.html" style="display: none;">已有账号<a href="#" style="color: #01CAFD;">立即登录</a></div>-->
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
	@import '@/common/less/pass-wj.less';
</style>
