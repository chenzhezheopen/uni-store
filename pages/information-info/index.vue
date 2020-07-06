<template>
	<view class="information-info">
		<!-- <header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
			<a class="aui-navBar-item" id="close" >
				<img :src="$host+'images/iconfont/return2.png'" style="width: 20px;"/>
			</a>
			<div class="aui-center">
				<span class="aui-center-title" style="color: #fff;">五星定制</span>
			</div>
			<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
			</a>
		</header> -->
		<div class="message" id="message">
			<div :class="temp.type" v-for="temp in info">
				<div class="time">{{ temp.time }}</div>
				<div class="msg">
					<img :src="temp.img" alt="" />
					<span style="position: absolute;left: 130upx;font-size: 25upx;">{{ temp.name }}</span>
					<p>{{ temp.title }}</p>
				</div>
			</div>
			<div style="height: 70upx;"></div>
		</div>
		<div class="footer">
			<img :src="$host+'img/hua.png'" alt="" />
			<label>
			<input type="file" name="img" id="sendimg" hidden="hidden"/>
			<img :src="$host+'images/iconfont/images.png'" alt="" />
			</label>
			<input type="text" v-model="message" id="text" />
			<p @click="sendMessage()">发送</p>
		</div>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				topop:0,
				message: "",//发送的消息内容
				messages:[], //接收到的消息列表
				info:[
					{
						name:"卡盟商城客服",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"你好！欢迎来到梦缘",
						type:'send',
						time:"05/22 06:30"
					},{
						name:"我",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"请文明发言",
						type:'show',
						time:"05/22 06:30"
					},{
						name:"卡盟商城客服",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"你好！欢迎来到梦缘",
						type:'send',
						time:"05/22 06:30"
					},{
						name:"我",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"请文明发言",
						type:'show',
						time:"05/22 06:30"
					},{
						name:"卡盟商城客服",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"你好！欢迎来到梦缘",
						type:'send',
						time:"05/22 06:30"
					},{
						name:"我",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"请文明发言",
						type:'show',
						time:"05/22 06:30"
					},{
						name:"卡盟商城客服",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"你好！欢迎来到梦缘",
						type:'send',
						time:"05/22 06:30"
					},{
						name:"我",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						title:"请文明发言",
						type:'show',
						time:"05/22 06:30"
					}
				]
			}
		},
		methods:{
			navigate(url){
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			//发送消息
			sendMessage() {
				var self = this;
				this.$goEasy.publish({
					channel: "my_channel",
					message: self.message,
					onSuccess:function(){
						self.message=''; //清空发送消息内容
						console.log("send message success");
					},
					onFailed:function(error){
						console.log("send message error: ", JSON.stringify(error));
					}
				});
			}
		},
		created(){
			var self = this;
			//订阅接收消息的通道
			this.$goEasy.subscribe({
				channel: "my_channel",
				onMessage: function (message) {		
					console.log(message)
					var addarr={
						name:"我",
						img:"http://www.bolecpw.com/code/uni/images/information/store-top1.jpg",
						type:'show',
					}
					
					var formattedTime = new Date(message.time).formatDate("hh:mm");
					addarr.title = message.content;
					addarr.time = formattedTime;
					// var msg = formattedTime+ " " +msgContent;
					//保存消息
					self.info.push(addarr);	
				}
			});
		},
	})
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/information-info.less';
	img{
		max-width: 100%;
	    vertical-align: middle
	}
	input{
		outline: none;	
	}
	body{
	    max-width: 720px;
	    margin: 0 auto;
	    background: #f1f1f1;
	    color:#333;
	    font-size: 0.26rem;
	}
	.back{
	    position: absolute;  
		top: 0;
		left: 0.9rem;
		background:url(http://www.bolecpw.com/code/uni/img/left.png) no-repeat;
	    width: 0.2rem;
	    height:0.4rem;
	    margin-top: 0.34rem;
	    background-size: 0.2rem 0.4rem;
	}
	.message{
	    background-color: #f1f1f1;
		padding: 79px 0.3rem 1rem 0.3rem;	
		height: 100%;
		overflow: auto;
	}
	.time{
	    font-size:0.72rem;
	    color:#999;
	    margin-bottom: 0.9rem;
	    text-align: center;
	}
	
	.footer{
		position: fixed;
		bottom: 0;
	    height:3rem;
	    background-color:#fff;
	    line-height:3rem;
	    width: 100%;
	    border-top: 1px solid #ddd;display: flex;align-items: center;
	}
	.footer img{
	    margin-left:20upx;
	    width: 50upx;
	}
	 .footer input{
	    margin-left:0.6rem;
	    flex:1;
	    height:1.92rem;
	    border-radius: 0.3rem;
	    border:0.03rem solid #ddd;
	    padding : 0 0.45rem;
	
	
	}
	.footer p{
	   width:3.6rem;
	    height:2.04rem;
	    font-size:0.9rem;
	    color:#fff;
	    line-height:2.04rem;
	    text-align:center;margin-left:0.6rem;
	    background-color:#ddd;
	    border-radius: 0.3rem;
	    float:right;
	    margin-right:0.6rem;
	}
	.send:after,.show:after,.msg:after{
		content: "";
		clear: both;
		display: table;	
	}
	
	.msg>img{
		width: 100upx;
		height: 100upx;
		border-radius: 50upx;
		float: left;
	}
	.msg>p{
		float: left;
		margin:40upx  0.6rem 0;
		padding: 15upx;
		background: #fff;
		font-size: 30upx;
		position: relative;
		border-radius: .6rem;
		max-width:15rem ;
		box-sizing: border-box;
	}
	
	.show .msg img,.show .msg p,.show .msg{
		float: right;
		position: relative;
	}
	.send,.show{
		padding-bottom: 0.9rem;
		position: relative;
	}
	.alert_novip,.flower_num,.give_flower{
		display: none;
		padding: 0.9rem 1.5rem;
		font-size: 0.84rem;
	}
	.alert_novip p,.flower_num  p{
		margin-bottom: 1.35rem;
	
	.layui-layer-wrap button{
		font-size: 0.84rem;
		padding: 0.6rem 0.9rem;
		margin-top: 0.3rem;
		background: #f8f8f8;
		border-radius: 10px;
	}
	}
	.flower_num button{
		padding: 0.6rem 1.5rem;
		border-radius: 10px;
	}
	.layui-layer-wrap button:first-child{
		float: left;
	}
	.layui-layer-wrap button:last-child{
		float: right;
		background: #FF7171;
		color: #fff;
	}
	.alert_novip button{
		padding: 0.6rem 0.9rem;
	    border-radius: 10px
	}
	.flower{
		width: 2.4rem;
		margin: 0 auto;
	}
	.give_flower{
		text-align: center;
	}
	.give_flower p{
		text-align: center;
		line-height: 1.5;
	}
	.give_flower input{
		width: 3rem;
		margin-right: 0.3rem;
		margin-top: 0.6rem;
	}
	.give_flower button{
		display: block;
		width: 9rem;
		font-size: 0.84rem;
		margin: 0 auto;
		margin-top:1.8rem;
		float: none!important;
		line-height: 1.95rem;
		border-radius: 10px;
	}
	.mui-bar .mui-icon{padding-top: 15px;padding-bottom: 15px;color: #fff;}
	p{color: #000000;}
</style>
