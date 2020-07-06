<template>
	<view class="cat0">
		<section  class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
				<a class="aui-navBar-item"  @tap="navigateBack()">
					<img src="http://www.bolecpw.com/code/uni/images/iconfont/return.png" style="width: 20px;"/>
				</a>
				<div class="aui-center">
					<span class="aui-center-title">限时秒杀</span>
				</div>
				<a class="aui-navBar-item delete" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}" style="color: red;"> 
				</a>
			</header>
			<div style="height: 79px;"></div>
			<div class="tig">
				<img class="left-img" :src="$host+'images/img/cat0-1.png'"/>
				<div class="right-list-container">
					<scroll-view :scroll-left="leftn"  scroll-x="true" class="scroll-X" style="flex: 1;">
						<div class="right-list-container">
							<div v-for="(item, i) in list" :key="item.id" :class="item.id==temp?'check':''" @click="check(item.id)">
								<a class="font-w">{{ item.name }}</a>
								<a class="color2 f12">已开抢</a>
							</div>
						</div>
					</scroll-view>
				</div>
			</div>
			
		</section>
		<demoo></demoo>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				temp:1,
				leftn:100,
				list: [
				  { id: 1, name: '10:00' },
				  { id: 2, name: '11:00' },
				  { id: 3, name: '12:00' },
				  { id: 4, name: '13:00' },
				  { id: 5, name: '14:00' },
				  { id: 6, name: '15:00' },
				  { id: 7, name: '16:00' },
				  { id: 8, name: '17:00' },
				  { id: 9, name: '18:00' },
				  { id: 10, name: '19:00' },
				  { id: 11, name: '20:00' }
				]
			}
		},
		onLoad() {
			var _this=this;
		},
		watch:{
			temp(val,oldval){
				this.leftn=(val-2.5)*70
				console.log(val)
			}
		},
		methods: {
			check(i){
				console.log(i)
				this.temp=i
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>
<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/cat0.less';
	.mui-content{
		top: 119px;
	}
	.swiper-container,.swiper-wrapper,.swiper-slide{height: auto;width: 100%;overflow: visible;}
	.rr{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 700px;
		z-index: -20;
	}
</style>
