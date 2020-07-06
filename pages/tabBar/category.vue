<template>
	<div class="category">
		<section class="aui-flexView">
			<div class="navbar">
				<header class="aui-navBar aui-navBar-fixed" id="nav-wrap">
					<a class="aui-navBar-item" id="close">
					</a>
					<div class="aui-center">
						<span class="aui-center-title">分类</span>
					</div>
					<a class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
					</a>
				</header>
				<div class="aui-center2 href" data-url = "search.html">
		    		<img src="images/iconfont/search.png" class="search_img">
		        	<input type="text" id="search" readonly="readonly" placeholder="请输入面料品牌，品牌名称等">
		    	</div>
			</div>
			
			<section>
				<div class="mui-content mui-row mui-fullscreen" style="padding-top: 124px;">
					<div class="mui-col-xs-3" style="background: #fff;">
						<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
							<a class="mui-control-item mui-active" href="#content1">推荐分类</a>
							<!--<a class="dl font-w"><img src="images/iconfont/ddd.png"/>男装</a>-->
							<a class="mui-control-item" href="#content2">分类一</a>
							<a class="mui-control-item" href="#content3">分类二</a>
							<a class="mui-control-item" href="#content4">分类三</a>
							<!--<a class="dl font-w"><img src="images/iconfont/ddd.png"/>女装</a>-->
							<a class="mui-control-item" href="#content2">分类四</a>
							<a class="mui-control-item" href="#content3">分类五</a>
							<a class="mui-control-item" href="#content4">分类六</a>
							<!--<a class="dl font-w"><img src="images/iconfont/ddd.png"/>生活百货</a>-->
							
						</div>
					</div>
					<div id="segmentedControlContents" class="mui-col-xs-9">
						<div id="content1" class="mui-control-content mui-active">
								<div class="swiper-container">
							    	<div class="swiper-wrapper">
							      		<div class="swiper-slide">
							      			<img src="images/demo/de.jpg" style="width: 100%;"/>
							      		</div>
							      		<div class="swiper-slide">
							      			<img src="images/demo/de.jpg" style="width: 100%;"/>
							      		</div>
							      		<div class="swiper-slide">
							      			<img src="images/demo/de.jpg" style="width: 100%;"/>
							      		</div>
							      		<div class="swiper-slide">
							      			<img src="images/demo/de.jpg" style="width: 100%;"/>
							      		</div>
							      		<div class="swiper-slide">
							      			<img src="images/demo/de.jpg" style="width: 100%;"/>
							      		</div>
							      	</div>
							    </div>
							  <ul class="mui-table-view mui-grid-view">
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x1.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x2.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						            	<img class="mui-media-object" src="images/img/x3.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x1.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x2.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						            	<img class="mui-media-object" src="images/img/x3.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x1.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x2.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						            	<img class="mui-media-object" src="images/img/x3.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">产品一</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x1.jpg">
						                <div class="category-pro-name">编号111111</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x2.jpg">
						                <div class="category-pro-name">编号111111</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						            	<img class="mui-media-object" src="images/img/x3.jpg">
						                <div class="category-pro-name">编号111111</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">编号111111</div></a></li>
						        <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
						            <a>
						                <img class="mui-media-object" src="images/img/x4.jpg">
						                <div class="category-pro-name">编号111111</div></a></li>
				    		</ul>    
					    </div>
						<div id="content2" class="mui-control-content">
							<div class="swiper-container2">
						    	<div style="width: calc(100% - 20px);margin: 10px;">
						      		<div class="swiper-slide">
						      			<img src="images/demo/de.jpg" style="width: 100%;border-radius: 5px;"/>
						      		</div>
						      	</div>
						    </div>
							 <ul class="mui-table-view mui-grid-view">
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							</ul>    
						</div>
						<div id="content3" class="mui-control-content">
							 <div class="swiper-container2">
						    	<div style="width: calc(100% - 20px);margin: 10px;">
						      		<div class="swiper-slide">
						      			<img src="images/demo/de.jpg" style="width: 100%;border-radius: 5px;"/>
						      		</div>
						      	</div>
						    </div>
							 <ul class="mui-table-view mui-grid-view">
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
								<li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							</ul> 
						</div>
						<div id="content4" class="mui-control-content">
							 <div class="swiper-container2">
						    	<div style="width: calc(100% - 20px);margin: 10px;">
						      		<div class="swiper-slide">
						      			<img src="images/demo/de.jpg" style="width: 100%;border-radius: 5px;"/>
						      		</div>
						      	</div>
						    </div>
							 <ul class="mui-table-view mui-grid-view">
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
								<li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							</ul> 
						</div>
						<div id="content5" class="mui-control-content">
							 <div class="swiper-container2">
						    	<div style="width: calc(100% - 20px);margin: 10px;">
						      		<div class="swiper-slide">
						      			<img src="images/demo/de.jpg" style="width: 100%;border-radius: 5px;"/>
						      		</div>
						      	</div>
						    </div>
							 <ul class="mui-table-view mui-grid-view">
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
								<li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							</ul> 
						</div>
						<div id="content6" class="mui-control-content">
							 <div class="swiper-container2">
						    	<div style="width: calc(100% - 20px);margin: 10px;">
						      		<div class="swiper-slide">
						      			<img src="images/demo/de.jpg" style="width: 100%;border-radius: 5px;"/>
						      		</div>
						      	</div>
						    </div>
							 <ul class="mui-table-view mui-grid-view">
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/img/commdity-bottom1.png">
							            <div class="category-pro-name">编号111111</div></a></li>
								<li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							    <li class="mui-table-view-cell mui-media mui-col-xs-4 href" data-url = "commodity-detail.html">
							        <a>
							            <img class="mui-media-object" src="images/cart/yf4.jpg">
							            <div class="category-pro-name">编号111111</div></a></li>
							</ul> 
						</div>
					</div>
				</div>		
			</section>
		</section>	
		<tab-bar :num="1"></tab-bar>
	</div>
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
	@import '@/common/css/mui.min.css';
	@import '@/common/mycss/all.css';
	@import '@/common/mycss/top.css';
	@import '@/common/less/category.less';
</style>
