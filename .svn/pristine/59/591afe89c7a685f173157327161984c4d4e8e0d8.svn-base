<template>
    <div id="projectDetails">
        <curheader></curheader>
        <div class="projectDetails">
            <div class="bread">
              <el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path:'/patentList'}">专利列表</el-breadcrumb-item>
                <el-breadcrumb-item>专利详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="projectInfo">
                <div class="Info_left">
                     <el-carousel :interval="3000" arrow="always" height="340px"  v-bind:autoplay="true">
                        <el-carousel-item v-for="item in 1" :key="item">
                        <img src="../../assets/images/bargain_banner.png" alt="">
                        </el-carousel-item>
                     </el-carousel>
                </div>
                <div class="info_right">
                    <div class="info_right_title">
                        <h4>{{patentDetail.patentName}}</h4>
						<!-- icon_solid  icon_hollow 实心空心切换-->
                        <i class="item_icon" v-bind:class="[patentDetail.isCollection ? 'icon_solid' : 'icon_hollow']" @click="changeCollection(patentDetail.id)"></i>
                    </div>
                    <ul class="info_right_content">
                        <li><span>专 利 号 ： </span><i>{{patentDetail.patentNo}}</i></li>
                        <li><span>参考价格：</span><i>{{patentDetail.hopePrice|priceFilter}}</i></li>
                        <li><span>专利类型：</span><i>{{patentDetail.patentType | patentTypeFilter}}</i></li>
                        <li><span>项目状态：</span><i>{{patentDetail.patentStatus | projectStateFilter}}</i></li>
                        <li :title="patentDetail.cooperationType | cooperationFilter"><span>信息类型：</span><i>{{patentDetail.cooperationType | cooperationFilter}}</i></li>
                        <li><span>法律状态：</span><i>{{patentDetail.lawState|lawStateFilter}}</i></li>
                        <li><span>申请日期：</span><i>{{patentDetail.patentApplydate|formatDate_YMD}}</i></li>
                        <li><span>授权日期：</span><i>{{patentDetail.patentGrantdate|formatDate_YMD}}</i></li>
                    </ul>
                    <div class="apply_buton">
                        <el-button type="primary">对此感兴趣</el-button>
                    </div>
                </div>
            </div>
            <div class="details_item">
                <div class="title">
                    <p>竞价信息</p>
                </div>
                <div class="bidding_content">
                    <div class="left">
                        <p>竞价名称： <span>重组大肠杆菌发酵生产番茄红素技术 </span></p>
                        <p>所属地域： <span>河南 </span></p>
                        <p>报价涨幅：<span>10000.00/次 </span></p>
                        <p>开始时间：<span>2017-07-15 15:24:00</span></p>
                    </div>
                    <div class="right">
                        <p>行业分类： <span>{{patentDetail.orgType}}</span></p>
                        <p>合作方式： <span>转让技术 </span></p>
                        <p>起始价格： <span>￥2000000.00 </span></p>
                        <p>结束时间： <span>2017-12-29 16:01:00</span></p>
                    </div>
                </div>
            </div>
			<div class="details_item">
				<div class="title">
					<p>信息详情</p>
				</div>
				<div class="info_content">
                    <p>{{patentDetail.patentDes}}</p>
				</div>
			</div>
			<div class="details_item_wrap">
				<div class="details_item">
					<div class="title">
						<p>联系方式</p>
					</div>
					<div class="contact_content">
						<div class="left">
							<p> <span>联系人：</span><span>{{patentDetail.contactName}}</span></p>
							<p><span>E-mail：</span><span>{{patentDetail.contactEmail}}</span></p>
						</div>
						<div class="right">
							<p><span>电话：</span><span>{{patentDetail.contactPhone}}</span></p> 
							<p><span>地址：</span><span>{{patentDetail.contactAddress}}</span></p>
						</div>
					</div>
				</div>
			</div>
        </div>
        <bottom></bottom>
        <starboard></starboard>
    </div>
</template>

<script>
import http from "../config/request";
export default {
    data () {
        return {
            patentDetail:{},
            custId:''
        }
    },
    created() {
        this.getUserInfo()
        this.getDemandData()
    },
    methods: {
        //初始化获取用户信息
        getUserInfo(){
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(userInfo){
                this.custId = userInfo.id
            }
        },
        //获取专利详情
        getDemandData(){
            let parame = {id:this.$route.query.id}
            if(this.custId!=''){
                parame["custId"] = this.custId
            }
            if(parame.custId != ''){
                http.Request("szipee/patent!queryPatentDetail.action", "POST", null, parame).then(res => {
                    this.patentDetail = res
                });
            }else{
                http.Request('szipee/patent!queryPatentDetail.action','POST',null,parame).then(res=>{
                    this.patentDetail = res
                })
            }
        },
        changeCollection(item) {
            let parame = {
                id:this.custId,
                productId:item,
                productType:1
            }
            if(parame.id != ''){
                http.Request("szipee/user!custColle.action", "POST", null, parame).then(res => {
                    if(res.state == 'success'){
                        this.getDemandData()
                        if(res.info == '收藏成功！'){
                            this.$message.success('收藏成功，您可以在个人中心查看您的收藏~~');
                        }
                        if(res.info == '取消收藏成功！'){
                            this.$message.success('取消收藏成功');
                        }
                    }
                });
            }else{
                this.$message.error('收藏需求只能在已登录状态下进行~~');
            }
        }
    },
    components:{
        curheader: resolve => {require(['../common/header/header'], resolve)},
        bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
        starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../../assets/less/index.less';
    #projectDetails{
        background-color:#f4f7fa;
        .projectDetails{
            width:1230px;
			margin:0 auto;
			padding-bottom:60px;
            .bread{
                padding:20px 0;
                .el-breadcrumb__inner{
                    color:#8091a5
                }
            }
            .projectInfo{
                background:#fff;
                display: flex;
                .Info_left{
                   width: 600px;
                   height: 340px;
               }
               .info_right{
                   width:630px;
                   padding:30px 20px 0px 30px;
                   .info_right_title{
                       display:flex;
                       justify-content:space-between;
                        h4{
                            font-size:18px;
                            font-weight: bold;
                        }
                        .item_icon{
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            background-image: url("../../assets/images/icon.png");
                            background-repeat: no-repeat;
                            cursor: pointer;
                        }
                   }
                   .info_right_content{
                       display: flex;
                       flex-wrap: wrap;
                       padding-top:40px;
                       width: 580px;
                       li{
                           width: 50%;
                           font-size:14px;
                           padding-bottom:20px;
                           position: relative;
                            span{
                                color: #707e8f;
                                display: inline-block;
                                width:75px;
                                position: absolute;
                                left: 0;
                                top: 0;
                            }
                           i{
                                color: #667587;
                                font-style: normal;
                                margin-left: 75px;
                                text-overflow:ellipsis;
                                word-break:keep-all;
                                white-space:nowrap;
                                overflow:hidden;
                                display: inline-block;
                                width: 220px;
                            }
                       }
                   }
                   .apply_buton{
                       padding-top: 20px;
                        .el-button{
                            width: 180px;
                            height: 48px;
                            background-color: #fff;
                            color: @lightThemeColor;
                            border-radius: @lightThemeColor;
                            font-size:18px;
                        }
                    }
                }
			}
			.details_item{
				width: 1230px;
				background-color: #fff;
				margin-top: 30px;
				padding: 30px 75px;
				.title{
					width: 1080px;
					border-bottom: 2px solid #dfe6ee;
					p{
						padding-bottom: 15px;
					}
				}
				.bidding_content,.contact_content{
					display: flex;
					flex-direction: row;
					padding:40px;
					.left,.right{
						width: 50%;
						p{
							margin-bottom: 20px;
							color:#91a0b1;
							font-size:14px;
						}
					}
				}
				.info_content{
					display: flex;
					flex-direction: row;
					padding:40px;
					p{
						font-size:14px;
						color:#667587;
						line-height:36px;
						text-indent: 28px;
					}
				}
			}
        }
    }
</style>