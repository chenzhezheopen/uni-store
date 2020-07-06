<template>
	<view class="change-pass">
		<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" @tap="navigateBack()">
				<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title">修改密码</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header>
		<div style="height: 79px;"></div>
		<div class="login">
			<!--<div class="welcome"><img src="newimg/other/login.png"></div>-->
			<div class="login-form" style="margin-top: 60upx;">
				<div class="login-inp"><a>原密码</a><input type="number" placeholder="请输入原密码" id="user"></div>
				<div class="login-inp"><a>新密码</a><input type="number" placeholder="6-18位数字英文字母组合" id="user"></div>
				<div class="login-inp"><a>确认新密码</a><input type="password" placeholder="再次确认密码" id="pass"></div>
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
	@import '@/common/less/change-pass.less';
</style>
