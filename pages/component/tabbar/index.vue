<template>
	<view class="tabbar">
		<footer class="footer-bar">
			<div :class="{'active':info.id-1==num}" class="mui-bar-tab" v-for="info in tabinfo" :key="info.id" data-plus="list1_new" @click="navigate(info.url)">
				<div class="d"><div class="d-mask"></div></div>
				<img :src="info.img+'.png'" />
				<a :style="{'color':(info.id-1==num?'red':'')}">{{ info.title }}</a>
			</div>
		</footer>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				tabinfo:[{
						"id":1,
						img:"static/images/iconfont/index_sy",
						title:"首页",
						url:'../tabBar/index'
					},{
						"id":2,
						img:"static/images/iconfont/index_fl",
						title:"分类",
						url:'../tabBar/category'
					},{
						"id":3,
						img:"static/images/iconfont/index_gwc",
						title:"购物车",
						url:'../tabBar/cart'
					},{
						"id":4,
						img:"static/images/iconfont/index_wd",
						title:"我的",
						url:'../tabBar/home'
					}]
			}
		},
		props: {
			num: {
				type: Number,
				default:0
			}
		},
		created(){
			this.tabinfo[this.num].img=this.tabinfo[this.num].img+"_check"
			console.log(this.tabinfo[this.num].img)
		},
		methods:{
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url,
					animationType:'none',
				})
			},
		}
	})
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	.footer-bar{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3px 0;
		background: #ffffff;
	}
	.footer-bar .mui-bar-tab{
		flex: 1;	
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		height: 41px;
		justify-content: flex-end;
	}
	.footer-bar .mui-bar-tab img{
		width: 24px;
		height: 24px;
	}
	.footer-bar a{
		margin-top: 6px;
		font-size: 11px;
		color: #aaa;
		line-height: 11px;
	}
	.footer-bar .active a{
		color: #2d6b90;
	}
	.mui-bar-tab{
		height: auto;
	}
	.active img{
		animation: .2s mymove;
	}
	@keyframes mymove{
		0%{width: 24px;height: 24px;}
		50%{width: 30px;height: 30px;}
		100%{width: 24px;height: 24px;}
	}
	/*.footer-bar .mui-bar-tab .yuy{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}*/
	.mui-bar-tab .d{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: -100;
	}
	.mui-bar-tab .d .d-mask{
		width: 0px;
		height: 0px;
		border-radius: 35px;
		opacity: 1;
		background: rgba(0,0,0,.4);
	}
</style>
