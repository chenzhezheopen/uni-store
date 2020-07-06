<template>
	<view class="information">
		<div class="scroll-block">
			<div>
				<a>消息(</a><a>37</a><a>)</a>
			</div>
			<div>
				<img :src="$host+'images/iconfont/search2.png'" alt="" class="top" />
				<!--<img src="images/iconfont/tx.png" alt="" />
				<img src="images/iconfont/jia-plus.png" alt=""  />-->
			</div>
		</div>
				<!--消息搜索-->
				<div class="mui-info-search">
					<div class="search-main">
						<a class="search-title">消息</a>
						<div class="search-contain"><input type="text"  value="搜索" class="search" /></div>
						<!--<img src="images/iconfont/tx.png"/>
						<img src="images/iconfont/jia-plus.png"/>-->
					</div>
					<div class="mui-info-number">
						<a class="all-info">54</a><a>条未读消息</a>
						<img :src="$host+'images/iconfont/gss.png'"/>
						<a class="clear">清除未读</a>
					</div>
				</div>
				<!--消息分类-->
				<div class="kind">
					<div>
						<div class="icon-contain"><img :src="$host+'images/iconfont/xx1.png'"/></div>
						<a>用户消息</a>
					</div>
					<div>
						<div class="icon-contain"><img :src="$host+'images/iconfont/xx1.png'"/></div>
						<a>系统消息</a>
					</div>
				</div>
				<!--消息详情-->
				<div class="mui-info-detail">
					<!--系统通知-->
					<div class="mui-info-detail-title">
					</div>
					<div class="mui-menu href" v-for="item in info"  @click="navigate('../information-info/index')" data-url = "chatroom.html">
						<div class="img-contain">
							<img :src="$host+item.img"/>
						</div>
						<div class="mui-box">
							<div>
								<a class="info-xt">{{ item.title }}</a>
								<a class="down-info">{{ item.time }}</a>
							</div>
							<div>
								<a class="down-info">{{ item.time }}</a>
								<div class="number"><a>{{ item.badge }}</a></div>
							</div>
						</div>
						<div class="touch"><div></div></div>
					</div>
				</div>
				
				<!--以前的消息-->
				<div class="mui-info-detail">
					<!--系统通知-->
					<div class="mui-info-detail-title">
						<img :src="$host+'images/iconfont/yz.png'"/>
						<a>两周前的消息</a>
					</div>
					<div class="mui-menu href" v-for="item in info"  @click="navigate('../information-info/index')" data-url = "chatroom.html">
						<div class="img-contain">
							<img :src="$host+item.img"/>
						</div>
						<div class="mui-box">
							<div>
								<a class="info-xt">{{ item.title }}</a>
								<a class="down-info">{{ item.time }}</a>
							</div>
							<div>
								<a class="down-info">{{ item.time }}</a>
								<div class="number"><a>{{ item.badge }}</a></div>
							</div>
						</div>
						<div class="touch"><div></div></div>
					</div>
				</div>

	</view>
</template>

<script>
	export default({
		data(){
			return{
				topop:0,
				info:[
					{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					},{
						badge:"10",
						img:"images/information/store-top1.jpg",
						title:"卡盟通知",
						time:'星期三'
					}
				]
			}
		},
		onPageScroll(e){
			console.log(e.scrollTop)
			if(e.scrollTop>70){
				$(".scroll-block").css("display","flex")
			}else{
				$(".scroll-block").css("display","none")
			}
		},
		methods:{
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url
				})
			}
		}
	})
</script>

<style lang="less" scoped>
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/information.less';
</style>
