<template>
	<view class="commodity-detail">
		<view class="backdrop" @click="close()" @touchmove.prevent :style="{bottom:mask?'-100%':'0%'}">
			
		</view>
		
		<div class="from-check" @touchmove.prevent :style="{bottom:static2?'-100%':'0%'}">
			<img class="out" @click="close()" :src="$host+'images/iconfont/tc2.png'"/>
			<div class="img-box">
				<img style="width:160upx;border-radius: 5px;margin-top: -80upx;" :src="$host+'images/cart/yf3.jpg'"/>
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
					<div class="reduce" @click="number--"><img :src="$host+'images/iconfont/reduce.png'"/></div>
					<input class="sort" type="number" readonly="readonly" :value="number" />
					<div class="add" @click="number++"><img :src="$host+'images/iconfont/add2.png'"/></div>
				</div>
				<div class="price">
					<a class="f16">￥</a>
					<a class="price-all c-red">{{ price3 }}</a>
				</div>
			</div>
			<div style="height: 150px;"></div>
			<view class="submit-btn" @click="navigate('sort-to-pay')">确定</view>
		</div>
		<!--分享-->
		<div class="fx-bottom" :style="{bottom:static?'-100%':'0%'}" @touchmove.prevent>
			<div class="mui-list-io-tig">
		    	<div class="size25 top_down" @click="shareFriend('WXSceneSession')">
		    		<div class="img-container1 flex_center img-container">
		    			<img :src="$host+'newimg/iconfont/wx2.png'"/>
		    		</div>
					<p>微信</p>
		    	</div>
		    	<div class="size25 top_down" @click="shareFriend('compressed')">
		    		<div class="img-container2 flex_center img-container">
		    			<img :src="$host+'newimg/iconfont/pyq.png'"/>
		    		</div>
					<p>朋友圈</p>
		    	</div>
		    	<div class="size25 top_down js">
		    		<div class="img-container3 flex_center img-container">
		    			<img :src="$host+'newimg/iconfont/QQ.png'"/>
		    		</div>
					<p>QQ</p>
		    	</div>
		    	<div class="size25 top_down" @click="login()">
		    		<div class="img-container2 flex_center img-container">
		    			<img :src="$host+'newimg/iconfont/wb.png'"/>
		    		</div>
					<p>微博</p>
		    	</div>
		    	<div class="size25 top_down js">
		    		<div class="img-container3 flex_center img-container">
		    			<img :src="$host+'newimg/iconfont/lj.png'"/>
		    		</div>
					<p>复制链接</p>
		    	</div>
		    </div>	
		    <div class="fx-out" @click="share()">
		    	<img :src="$host+'images/iconfont/cha.png'"/>
		    </div>
		</div>
			<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
				<a class="aui-navBar-item" @tap="navigateBack()">
					<img :src="$host+'images/iconfont/return.png'" style="width: 20px;"/>
				</a>
				<div class="aui-center">
					<span class="aui-center-title">商品详情</span>
				</div>
				<a class="aui-navBar-item" @click="share()"  data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
					<img :src="$host+'images/iconfont/fx.png'" style="width: 25px;height: 25px;margin-right: 10px;"/>
				</a>
			</header>
				<div style="height: 79px;"></div>
				<div class="mui-top-img">
					<img :src="sortImg" data-preview-src="images/img/commdity.png"/>
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
					<span class="f16 line-height20 name">{{ sortTitle }}</span>
					<div style="display: flex;"><div class="tag f16">供应商：自营</div></div>
				</div>
				<div class="yf">
					<a class="color2 f14">运费</a>
					<a class="f14">1件10元每加1件加10元</a>
				</div>
				<div class="bottom">
					<img :src="$host+'images/img/commdity-bottom1.png'"/>
					<img :src="$host+'images/img/commdity-bottom2.png'"/>
					<img :src="$host+'images/img/commdity-bottom3.png'"/>
					<img :src="$host+'images/img/commdity-bottom4.png'"/>
					<img :src="$host+'images/img/commdity-bottom5.png'"/>
					<img :src="$host+'images/img/commdity-bottom6.png'"/>
				</div>
		    	<div style="height: 60px;"></div>
			<footer class="footer">
				<div class="img-c href" data-url = "chatroom.html"><img :src="$host+'images/iconfont/kf2.png'"/></div>
				<div class="img-c href" data-url = "cart.html"><img :src="$host+'images/iconfont/gwc.png'"/><div class="num">12</div></div>
				<div class="img-c gwc-add"><img :src="$host+'images/iconfont/tjgwc.png'"/></div>
				<div class="btn-c btn-c1" data-tag = "1" @click="pay('type1')">
					<span class="f12"><a class="color4 f20 font-w">￥</a><a class="color4 f20 font-w price1">{{ price1 }}</a></span>
					<a class="color4 f12 line-height16">现金购买返20积分</a>
				</div>
				<div class="btn-c btn-c2" data-tag = "2" @click="pay('type2')">
					<span class="f12"><a class="color4 f20 font-w">￥</a><a class="color4 f20 font-w price2">{{ price2 }}</a></span>
					<a class="color4 f12 line-height16">抵扣20积分</a>
				</div>
			</footer>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				static:true,
				static2:true,
				mask:true,
				sortImg:'http://www.bolecpw.com/code/uni/images/img/commdity.png',
				sortTitle:'【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力',
				sortDetail:'商品详情商品详情商品详情商品详情商品详情商品详情商品详情',
				number:1,
				price1:"20.10",
				price2:"0.00",
				price3:"0.00",
				price4:0
			}
		},
		methods:{
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			share(){
				this.static=!this.static
				this.mask=!this.mask
			},
			pay(type){
				this.mask=!this.mask
				this.static2=!this.static2
				if(type=="type1"){
					this.price4=this.price1
					this.price3=parseFloat(this.price1*this.number).toFixed(2)
				}
				if(type=="type2"){
					this.price4=this.price2
					this.price3=parseFloat(this.price2*this.number).toFixed(2)
				}
			},
			close(){
				this.static=true
				this.mask=true
				this.static2=true
			},
			 shareFriend: function(type) {
               //分享到微信朋友
                uni.share({ 
                    provider: "weixin",
                    scene: type,
                    type: 0,
                    href: "http://www.bolecpw.com/code/houfutangdownload/download/invitation/index.html",//这地址太长了，就省略了
                    title: this.sortTitle,
                    summary: this.sortDetail,                         
                    imageUrl:this.sortImg,
                    success: function(res) {
                        console.log("success:" + JSON.stringify(res));
						uni.showToast({
                            title: '已分享',
                            duration: 2000
                        });
                    },
                    fail: function(err) {
                        console.log("fail:" + JSON.stringify(err));
                    }
                });
            },
			login(e) {  
                uni.login({  
                    success: (res) => {  
                        console.log("login", JSON.stringify(res));  
                    }  
                })  
            }
 
		},
		watch:{
			number(newValue, oldValue) {
				if(newValue-0<2){
					this.number=1
				}
				this.price3=parseFloat(this.price4*this.number).toFixed(2)
			}
		}
	})
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/commodity.less';
</style>
