<template>
	<div id="index">
		<div class="zhengd">
				<img class="out" src="http://www.bolecpw.com/code/uni/newimg/iconfont/cha2.png"/>
				<img class="href zd" data-url = "cat0.html" src="http://www.bolecpw.com/code/uni/newimg/list1/zhendian.jpg"/>
			</div>
		<div class="xs">
			<img src="http://www.bolecpw.com/code/uni/images/iconfont/xs.png"/>
		</div>
		<section class="aui-flex1">
			<header class="fix-head" :style="{background:'rgba(222,41,14,'+topop+')'}">
				<div class="aui-center2 href" data-url = "search.html" style="margin: 0 .7rem 0 10px ;height: 30px;border-radius: 20px;background: #f5f5f5;">
					<img src="http://www.bolecpw.com/code/uni/images/iconfont/search.png" class="search_img"/>
					<input style="background: #f5f5f5;height: 30px;font-size: 16px;" type="text" readonly="readonly" id="search" placeholder="新鲜水果" />
				</div>
				<div class="fix-icon" style="position: relative;" @click="navigate('../information/index')">
					<img src="http://www.bolecpw.com/code/uni/images/iconfont/xx2.png"/>
					<div class="num">12</div>
				</div>
			</header>
			<section id="slider">
				
				<div class="top-bg"></div>
					<view class="uni-padding-wrap swiper-container3">
						<view class="page-section swiper">
							<view class="page-section-spacing">
								<swiper class="swiper" :indicator-dots="indicatorDots" indicator-color="#ffffff" circular="true" indicator-active-color="#000000" :autoplay="autoplay" :interval="interval" :duration="duration">
									<swiper-item>
										<view class="swiper-item uni-bg-red" @click="navigate('../index/help')"><img src="http://www.bolecpw.com/code/uni/newimg/list1/s2.jpg" alt="" /></view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item uni-bg-green"><img src="http://www.bolecpw.com/code/uni/newimg/list1/s1.jpg" alt="" /></view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item uni-bg-blue"><img src="http://www.bolecpw.com/code/uni/newimg/list1/s3.jpg" alt="" /></view>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>
					<!-- <div class="swiper-container swiper-container3">
						<div class="swiper-wrapper">
							<div class="swiper-slide href" data-url = "help.html"></div>
							<div class="swiper-slide href" data-url = "commodity-detail.html"></div>
							<div class="swiper-slide href" data-url = "commodity-detail.html"></div>
						</div>
						<div class="swiper-pagination swiper-pagination3"></div>
					</div> -->
			   <div class="mui-list-io add_size" style="width: 96%;border-radius: 5px;background: #fff;">
					<div class="mui-list-io-tig">
						<div class="size25 top_down" v-for="i in urlarr" @click="navigate(i.url)">
							<div class="img-container1 flex_center img-container href" data-url="cat0.html">
								<img :src="i.img"/>
							</div>
							<p>{{ i.title }}</p>
						</div>
					</div>	
				</div>
				
				<div class="huodong">
					<div class="st1 href" @click="req()" data-url="cat9.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t1.jpg"/></div>
					<div class="st1 href" data-url="cat5.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t2.jpg"/></div>
					<div class="st1 href" data-url="cat4.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t3.jpg"/></div>
					<div class="st2  ms href" data-url="cat0.html" style="width: calc(50% - 4px);">
						<div class="ms-header">
							<a class="special-add" style="-webkit-background-clip:text;-webkit-text-fill-color:transparent;">限时秒杀</a>
							<div class="ms-time">
								<div class="hour"><a class="color4" style="font-size: 20upx;line-height: 30upx;">14点场</a></div>
								<div style="flex: 1;"><a class="c-red time" style="font-size: 20upx;line-height: 30upx;">00:52:48</a></div>
							</div>
						</div>
						<div class="ms-content">
							<div>
								<img src="http://www.bolecpw.com/code/uni/images/cart/yf4.jpg"/>
								<a style="font-size: 20upx;line-height: 30upx;">￥0.00</a>
								<a style="font-size: 12upx;line-height: 12upx;color: #888;">￥15.10</a>
							</div>
							<div>
								<img src="http://www.bolecpw.com/code/uni/images/cart/yf4.jpg"/>
								<a style="font-size: 20upx;line-height: 30upx;">￥0.00</a>
								<a style="font-size: 12upx;line-height: 20upx;color: #888;">￥15.10</a>
							</div>
							<div>
								<img src="http://www.bolecpw.com/code/uni/images/cart/yf4.jpg"/>
								<a style="font-size: 20upx;line-height: 30upx;">￥0.00</a>
								<a style="font-size: 12upx;line-height: 20upx;color: #888;">￥15.10</a>
							</div>
						</div>
					</div>
					<div class="st2 href" data-url="cat2.html" style="width: calc(50% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t4.jpg"/></div>
					<div class="st2 href" data-url="cat1.html" style="width: calc(50% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t5.jpg"/></div>
					<div class="st2 href" data-url="cat6.html" style="width: calc(50% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t6.jpg"/></div>
					<div class="st1 href" data-url="cat8.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t7.jpg"/></div>
					<div class="st1 href" data-url="cat7.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t8.jpg"/></div>
					<div class="st1 href" data-url="cat3.html" style="width: calc(33.3% - 4px);"><img src="http://www.bolecpw.com/code/uni/newimg/list1/t9.jpg"/></div>
				</div>
				<div class="tag1">
					<img src="http://www.bolecpw.com/code/uni/images/iconfont/bfb.png" class="bq"/>
					<a class="f16 a">每日特价</a>
					<div class="dot"></div>
				</div>
				
				<div class="store-list">
					<div class="href" v-for="i in 10" @click="navigate('../business/commodity-detail')">
						<img src="http://www.bolecpw.com/code/uni/images/img/commdity-bottom6.png" class="img-st"/>
						<div class="content">
							<a class="f14 name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
							<span class="line-height19">
								<a class="c-red f12 line-height19">抵后</a>
								<a class="c-red f16 font-w line-height19">￥99.00</a>
							</span>
							<div class="gou">
								<div class="btn">去抢购</div>
							</div>
							<a class="c-red f12 line-height19">京东物流价：45.00</a>
							<a class="color2 f12 line-height19">价格更新于5分站前</a>
						</div>
					</div>
				</div>
				
			</section>
		</section>
		<uni-load-more :status="status"></uni-load-more>
		<tab-bar :num="0"></tab-bar>
	</div>
</template>

<script>
	import api from '@/api'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {uniLoadMore},
		data() {
			return {
				status:'more',
				title: 'Hello',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				topop:0,
				urlarr:[
					{
						url:"../index/cat0",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top1.gif",
						title:"限时秒杀"
					},{
						url:"../index/cat1",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top2.gif",
						title:"9.9包邮"
					},{
						url:"../index/cat2",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top3.gif",
						title:"水果蔬菜"
					},{
						url:"../index/cat3",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top4.gif",
						title:"大牌特卖"
					},{
						url:"../index/cat4",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top5.gif",
						title:"创意无限"
					},{
						url:"../index/cat5",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top6.gif",
						title:"0元购"
					},{
						url:"../index/cat6",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top7.gif",
						title:"吃货福利"
					},{
						url:"../index/cat7",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top8.gif",
						title:"精选百货"
					},{
						url:"../index/cat8",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top9.gif",
						title:"防疫生命"
					},{
						url:"../index/cat9",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top10.gif",
						title:"新人专享"
					}
				]
			}
		},
		onPageScroll(e){
			if(e.scrollTop<=300){
				this.topop=e.scrollTop/300;
			}else{
				this.topop=1;
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'  
			});
			
		},
		onPullDownRefresh: function() {
			//下拉刷新的时候请求一次数据
			
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},100)
		},
		onReachBottom:function(){
			console.log(this.status)
			this.status='loading'
			setTimeout(function() {
				this.status='more'
			}.bind(this), 1000);
		},
		mounted(){
			var $this = this;
			setTimeout(()=>{
				uni.hideLoading()
			},2000)
		},
		methods: {
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			req(){
				api.ceshi().then(res => {
					console.log(res)
				  }
				).catch(err => {
				  console.log("245354354136")
				})
				
			}
		},
		watch: {
			topop(newValue, oldValue) {
			}
		}
	}
</script>
<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/list1.less';
	
	.mui-list-io-tig .top_down{width: 20%;margin: 5px 0;}
	.mui-list-io-tig{flex-wrap: wrap;}
	.img-container img{width: 110%;}
	.add_size{width: 96%;padding: 10px;}
	/*顶部悬浮框*/
	.fix-head{display: flex;justify-content: space-between;padding:47px 40upx 5px 10px;position: fixed;align-items: center;top: 0;left: 0;width: 100%;z-index: 99;}
	.fix-head .fix-icon{display: flex;align-items: center;justify-content: center;flex-direction: column;}
	.fix-head .fix-icon img{width: 25px;}
	.fix-head .fix-icon a{font-size: 12px;line-height: 12px;margin-top: .1rem;color: #fff;}
	#search{color: #000000;background: #e8f2fb;padding-left: 5px;}
	#search::-webkit-input-placeholder{color: #000000;font-size: 14px;}
	.top-bg{width: 150%;margin-left: -25%;background: url(http://www.bolecpw.com/code/uni/images/img/top-bg.jpg) no-repeat;height: 180px;border-bottom-left-radius:35%;border-bottom-right-radius:35%;background-size: 100% 100%;}
	/*轮播*/
	.swiper-container3{
		margin-top: -85px;
		width: 96%;
		overflow: hidden;
		margin-left: 2%;
	}
	.swiper-container3 img{border-radius: 7px;}
	.swiper-pagination-bullet{width: .5rem;height: .04rem;border-radius: 0;background: rgba(255,255,255,.5);opacity: 1;}
	.aui-center2 input::-webkit-input-placeholder{
		line-height: 30px;
	}
	section{
		width: 100%;
		overflow-x: hidden;
	}
	.num{
		position: absolute;
		left: calc(100% - 20upx);
		top:-5px;
		height: 40upx;
		min-width: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #de290e;
		font-size: 12px;
		padding: 0 1px;
		background: #fff;
		border:1px #de290e solid;
		border-radius: 10px;
	}
</style>
