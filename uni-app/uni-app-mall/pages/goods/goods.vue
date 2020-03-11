<template>
	<view>
		<!-- 状态栏 -->
		<page-status ></page-status>
		<!-- 头部 -->
		<goods-header></goods-header>
		<!-- 轮播图 -->
		<view class="swiper-box" >
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in goodsData.swiperList" :key="swiper.id">
					<image :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{goodsData.swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<view class="price">￥{{goodsInfo.price}}</view>
			<view class="title">
				{{goodsInfo.name}}
			</view>
		</view>
		<!-- 选择规格 -->
		<view class="info-box">
			<view class="row" @tap="spaceInfo.showSpace = true">
				<view class="text">选择</view>
				<view class="content">
					<view>选择规格：</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.spec" :key="index" :class="{'on':item==goodsInfo.spec}">{{item}}</view>
					</view>
				</view>
				<view class="arrow"><view class="icon iconfont">&#xe6a3;</view></view>
			</view>
		</view>
		<!-- 模态框 -->
		<popup-spec :goodsData="goodsData" :goodsInfo='goodsInfo' :spaceInfo='spaceInfo'></popup-spec>
		<!-- 评价 -->
		<view class="info-box comments">
			<view class="row">
				<view class="text">商品评价({{goodsData.comment.length}})</view>
				<view class="arrow" @tap="toRatings">
					<view class="show">
						查看全部
						<view class="icon iconfont">&#xe6a3;</view>
					</view>
				</view>
			</view>
			<view class="comment" @tap="toRatings">
				<view class="user-info">
					<view class="face"><image :src="goodsData.comment[0].face"></image></view>
					<view class="username">{{goodsData.comment[0].username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment[0].content}}
				</view>
			</view>
		</view>
			<!-- 详情 -->
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content"><rich-text :nodes="goodsData.descriptionStr"></rich-text></view>
		</view>
			<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box">
					<view class="icon iconfont">&#xe7e0;</view>
					<view class="text">分享</view>
				</view>
				<view class="box" @tap="keep">
					<view class="icon iconfont" v-if="isKeep">&#xe64b;</view>
					<view class="icon iconfont" v-else>&#xe64c;</view>
					<view class="text">{{isKeep?'已':''}}收藏</view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy" @tap="buy">立即购买</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import goodsHeader from './goodsHeader.vue'
	import interfaces from '../../utils/interfaces.js'
	import popupSpec from '../../components/popupSpec.vue'
	
	export default {
		data(){
			return {
				goodsInfo:{
				  name:'',
				  price:'',
				  number:1,
				  spec:''
			  },
				goodsData:{
				  swiperList:[],
				  spec:[],
				  comment:[{face:'', username:'', content:''}],
				  descriptionStr:''
			  },
			  currentSwiper: 0, //轮播图下标
			  spaceInfo:{showSpace:false}, // 是否展示选择规格遮罩
			  isKeep:false //收藏
			} 
		},
		components:{
			'goods-header': goodsHeader,
			'popup-spec': popupSpec
		},
		onLoad(option){
            // 参数赋值
			this.goodsInfo = JSON.parse(option.goodsInfo)
			//初始化数据
			this.goodsInfo.number = 1;
			this.goodsInfo.spec = 'XS'
		    
			this.initData()  
		},
		methods:{
			initData(){
				this.request({
					url:interfaces.getGoods,
					success:((res)=>{
						this.goodsData = res.data
					})
				})
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			toRatings(){
				// 本地存储
				uni.setStorageSync('comments', this.goodsData.comment)
				uni.navigateTo({
					url:'./ratings'
				})
			},
			keep(){
				this.isKeep = !this.isKeep;
				if(this.isKeep)
					uni.showToast({
						icon:'success',
						title:'已收藏'
					})
			},
			joinCart(){ // 加入购物车
			
			},
			buy(){ // 立即购买
			
			}
		}
	}
</script>

<style lang="scss">
.status{
	/*  #ifdef  APP-PLUS  */
	opacity: 0;
	/*  #endif  */
}
.swiper-box {
	position: relative;
	width: 100%;
	height: 100vw;
	swiper {
		width: 100%;
		height: 100vw;
		swiper-item {
			image {
				width: 100%;
				height: 100vw;
			}
		}
	}
	.indicator{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
.info-box {
	width: 92%;
	padding: 20upx 4%;
	background-color: #fff;
	margin-bottom: 20upx;
}
.goods-info {
	.price {
		font-size: 46upx;
		font-weight: 600;
		color: #f47925;
	}
	.title {
		font-size: 30upx;
	}
}
.row {
	width: 100%;
	display: flex;
	align-items: center;
	margin: 0 0 30upx 0;
	.text {
		font-size: 28upx;
		color: #a2a2a2;
		margin-right: 20upx;
	}
	.content {
		font-size: 28upx;
		display: flex;
		flex-wrap: wrap;
		.serviceitem{
			margin-right: 10upx;
		}
		.sp {
			width: 100%;
			display: flex;
			view {
				background-color: #f6f6f6;
				padding: 10upx;
				color: #999;
				margin-right: 10upx;
				font-size: 20upx;
				border-radius: 5upx;
				&.on{
					border: solid 1upx #f47952;
					padding: 4upx 8upx;
				}
			}
		}
	}
	.arrow {
		position: absolute;
		right: 4%;
		.icon {
			color: #ccc;
		}
	}
}
.comments {
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 30upx;
		}
		.arrow {
			font-size: 28upx;
			position: absolute;
			right: 4%;
			color: #17e6a1;
			.show {
				display: flex;
				align-items: center;
				.icon {
					color: #17e6a1;
				}
			}
		}
	}
	.comment {
		width: 100%;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			.username {
				font-size: 24upx;
				color: #999;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
}
.description {
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #999;
	}
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 92%;
	padding: 0 4%;
	height: 99upx;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.icons {
		display: flex;
		height: 80upx;
		margin-left: -4%;
		.box {
			width: 80upx;
			height: 80upx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.icon {
				font-size: 40upx;
				color: #828282;
			}
			.text {
				display: flex;
				justify-content: center;
				width: 100%;
				font-size: 22upx;
				color: #666;
			}
		}
	}
	.btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
		.joinCart,
		.buy {
			height: 80upx;
			padding: 0 40upx;
			color: #fff;
			display: flex;
			align-items: center;
			font-size: 28upx;
		}
		.joinCart {
			background-color: #f0b46c;
		}
		.buy {
			background-color: #f06c7a;
		}
	}
}
</style>
