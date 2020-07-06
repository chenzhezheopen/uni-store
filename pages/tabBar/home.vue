<template>
	<view class="home">
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed" id="nav-wrap" :style="{background:'rgba(222,41,14,'+topop+')'}">
				<a class="aui-navBar-item opt" :style="{opacity:topop}">
					<img src="http://www.bolecpw.com/code/uni/images/logo.png" style="width: 30px;margin-left: 15px;border-radius: 50%;"/>
				</a>
				<div class="aui-center">
					<span class="aui-center-title opt" style="color: #000;font-size: 16px;">我的</span>
				</div>
				<a class="aui-navBar-item delete" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}"> 
					<img class="href" @click="navigate('../home/setting')" src="http://www.bolecpw.com/code/uni/images/iconfont/sz.png" style="width: 25px;"/>
					<img class="href" data-url = "information.html" src="http://www.bolecpw.com/code/uni/images/iconfont/zx.png" style="width: 25px;margin-left: .3rem;margin-right: .1rem;"/>
				</a>
			</header>
			<section class="aui-scrollView con">
				<div class="top-bg"></div>
				<div class="aui-head-chang" style="background: none;">
					<img class="header-img" src="http://www.bolecpw.com/code/uni/images/logo.png" alt="">
					<div class="detail">
						<a class="color4 font-w f16">未实名认证</a>
						<a class="color4">13986683465</a>
					</div>
						<!--<div class="aui-btn">
							<div> <i class="icon icon-in"></i>设置</div>
						</div>-->
				</div>
				<div class="aui-detail-zc">
					<div @click="navigate('../home/my-jf')">
						<img src="http://www.bolecpw.com/code/uni/images/iconfont/money.png"/>
						<div class="detail">
							<a class="f14">积分</a>
							<a class="c-red font-w f16">0</a>
						</div>
					</div>
					<div class="href" data-url = "myye.html">
						<img src="http://www.bolecpw.com/code/uni/images/iconfont/money2.png"/>
						<div class="detail">
							<a class="f14">余额</a>
							<a class="c-red font-w f16">0.00</a>
						</div>
					</div>
				</div>
				
				<div class="dd-info">
					<div class="mui-list-io-tig mui-list-io-tig1 add-tig">
		            	<div class="size25 top_down href" data-url = "home-to-order.html">
		            		<div class="img-container5 flex_center img-container">
		            			<div class="num">12</div>
		            			<img src="http://www.bolecpw.com/code/uni/images/user/nav-001.png"/>
		            		</div>
		        			<p>待付款</p>
		            	</div>
		            	<div class="size25 top_down href" data-url = "home-to-order.html">
		            		<div class="img-container5 flex_center img-container">
		            			<img src="http://www.bolecpw.com/code/uni/images/user/nav-002.png"/>
		            		</div>
		        			<p>待发货</p>
		            	</div>
		            	<div class="size25 top_down href" data-url="home-to-order.html">
		            		<div class="img-container5 flex_center img-container">
		            			<div class="num">12</div>
		            			<img src="http://www.bolecpw.com/code/uni/images/user/nav-003.png"/>
		            		</div>
		        			<p>待收货</p>
		            	</div>
		            	<div class="size25 top_down href" data-url="home-to-order.html">
		            		<div class="img-container5 flex_center img-container">
		            			<img src="http://www.bolecpw.com/code/uni/images/user/nav-004.png"/>
		            		</div>
		        			<p>退款/售后</p>
		            	</div>
		           </div>
					<div class="mui-list-io-tig mui-list-io-tig2 add-tig">
						<div class="line-left"></div>
		            	<div class="size25 top_down href" data-url="home-to-order.html">
		            		<div class="img-container1 flex_center img-container">
		            			<img src="http://www.bolecpw.com/code/uni/images/iconfont/buy-qb.png"/>
		            		</div>
		        			<p>我的订单</p>
		            	</div>
		            </div>
				</div>
				
				<div class="mui-list-io add_size" style="width: 96%;border-radius: 5px;background: #fff;">
					<div class="tig-title f14 font-w">我的服务</div>
		        	<div class="mui-list-io-tig">
		            	<div class="size25 top_down" @click="navigate(i.url)"  v-for="i in urlarr" >
		            		<div class="img-container1 flex_center img-container">
		            			<img :src="i.img"/>
		            		</div>
		        			<p>{{ i.title }}</p>
		            	</div>
		            </div>	
		        </div>
		        
		        <div class="top-title">
					<div style="width: 16px;height: 16px;border-radius: 50%;background: #f39a36;position: relative;">
						<div style="position: absolute;width: 4px;height: 4px;border-radius: 50%;background: #f39a36;top: -3px;left: -5px;"></div>
					</div>
					<div style="width: .2rem;height: 3px;background: #f39a36;"></div>
					<div class="title color4 f16">热销商品</div>
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
		        			<a class="c-red f16 font-w line-height19 price">￥99.00</a>
		        			<a class="color2 f12 line-height19 price2">市场价价：450.00</a>
		        		</div>
		        	</div>
		        </div>
				<div style="height:55px"></div>
			</section>
		</section>
		<tab-bar :num="3"></tab-bar>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				topop:0,
				urlarr:[
					{
						url:"../home/yljl",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top1.png",
						title:"浏览记录"
					},{
						url:"../home/award-jf",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top2.png",
						title:"邀请赚积分"
					},{
						url:"",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top3.png",
						title:"结算信息"
					},{
						url:"../home/cjwt",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top4.png",
						title:"常见问题"
					},{
						url:"../home/my-data",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top5.png",
						title:"设置"
					},{
						url:"../home/app-regular",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top6.png",
						title:"隐私保护政策"
					},{
						url:"",
						img:"http://www.bolecpw.com/code/uni/newimg/list1/list-top7.png",
						title:"在线客服"
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
		methods:{
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url
				})
			}
		},
		mounted(){
			var $this = this;
			setTimeout(()=>{
				uni.hideLoading()
			},2000)
			
		},
	}
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/home.less';
	.top-bg{width: 150%;margin-left: -25%;height: 180px;background: url(http://www.bolecpw.com/code/uni/images/img/top-bg.jpg); border-bottom-left-radius:50%;border-bottom-right-radius:50%;overflow: hidden;margin-bottom: -180px;}
			.num{
				position: absolute;
				left: calc(100% - 15upx);
				top:-5px;
				height: 30upx;
				min-width: 30upx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #de290e;
				font-size: 12px;
				padding: 0 3px;
				background: #fff;
				border:1px #de290e solid;
				border-radius: 10px;
			}
				.mui-list-io-tig .top_down p {
	    font-size: .29rem;
	}
	.img-container5{position: relative;}
	.mui-list-io-tig .img-container{overflow: visible;}
</style>
