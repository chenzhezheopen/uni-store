<template>
	<view class="demo1">
		<section class="aui-flexView">
				<section class="mui-content mui-scroll-wrapper">
					<div class="mui-scroll">
							<div class="store-list">
				            	<div class="href"  v-for="i in 10" data-url = "commodity-detail.html">
				            		<img :src="$host+'images/img/commdity-bottom6.png'" class="img-st"/>
				            		<div class="content">
				            			<a class="f14 font-w name line-height20">【付邮免费送】USB小风扇迷你电风扇编写随身静音强大风力</a>
				            			<div class="gou">
				            				<div class="yh">
				            					<div class="btn-ml">
					            					<a class="f12">秒杀价</a><a class="font-w f20" style="letter-spacing: 1px;">￥20.00</a>
					            				</div>
					            				<a class="f12 jd">京东物流价：58.00</a>
				            				</div>
				            				<div class="btn">
				            					<div class="xj"></div>
				            					<a class="f14 line-height18 color4">立即</a><a class="color4 f14 line-height18">购买</a>
				            				</div>
				            			</div>
				            			<div class="rd">
				            				<img :src="$host+'newimg/demo/huo.png'"/>
				            				<a class="c-red f12">热度：5246</a>
				            			</div>
				            		</div>
				            	</div>
				           </div>
					</div>
		    	</div>
		    </section>
		</section>
	</view>
</template>

<script>
	import cat0 from '../index/cat0.vue'
	export default{
		data(){
			return{
				
			}
		},
        components:{
            'cat-one':cat0
        }
	}
</script>

<style lang="less">
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/demo.less';
</style>
