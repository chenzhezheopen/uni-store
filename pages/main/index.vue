<template>
	<view class="main">
		
		<my-index></my-index>
		<tab-bar :num="0"></tab-bar>
	</view>
</template>

<script>
	import myIndex from "../tabBar/index";
	import myCategory from "../tabBar/category";
	import myCart from "../tabBar/cart";
	import myHome from "../tabBar/home";
	export default({
		data(){
			return{
				
			}
		},
		components:{
			myIndex,
			myCategory,
			myCart,
			myHome
		}
	})
</script>

<style>
</style>
