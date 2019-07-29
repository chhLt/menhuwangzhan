<template>
    <div id="projectDetails">
        <curheader></curheader>
        <div class="projectDetails">
            <div class="bread">
              <el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path:'/demandList'}">需求列表</el-breadcrumb-item>
                <el-breadcrumb-item>需求列表</el-breadcrumb-item>
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
                        <h4>{{demandDetail.demandName}}</h4>
						<!-- icon_solid  icon_hollow 实心空心切换-->
                        <i class="item_icon" v-bind:class="[demandDetail.isCollection ? 'icon_solid' : 'icon_hollow']" @click="changeCollection(demandDetail.id)"></i>
                    </div>
                    <ul class="info_right_content">
                        <li :title="demandDetail.demandType|changeDemandType"><span>需求类型：</span><i>{{demandDetail.demandType|changeDemandType}}</i></li>
                        <li><span>参考价格：</span><i>面议</i></li>
                        <li><span>联系人：</span><i>{{demandDetail.contactName}}</i></li>
                        <li><span>E-mail：</span><i>{{demandDetail.contactEmail}}</i></li>
                        <li><span>电话号码：</span><i>{{demandDetail.contactPhone}}</i></li>
                        <li><span>通讯地址：</span><i>{{demandDetail.contactAddress}}</i></li>
                        <li><span>发布时间：</span><i>{{demandDetail.releaseDate|formatDate_YMD}}</i></li>
                    </ul>
                </div>
            </div>
			<div class="details_item">
				<div class="title">
					<p>需求说明</p>
				</div>
				<div class="info_content">
                    <p>{{demandDetail.demandDes}}</p>
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
            demandDetail:{},
            custId:''
        }
    },
    created() {
        this.getUserInfo()
        this.getDemandData()
    },
    methods: {
        getUserInfo(){
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(userInfo){
                this.custId = userInfo.id
            }
        },
        getDemandData(){
            let parame = {
                id:this.$route.query.id,
            }
            if(this.custId!=''){
                parame["custId"] = this.custId
            }
            if(parame.custId != ''){
                http.Request("szipee/demand!queryDemandDetail.action", "POST", null, parame).then(res => {
                    this.demandDetail = res
                });
            }else{
                http.Request('szipee/demand!queryDemandDetail.action','POST',null,parame).then(res=>{
                    this.demandDetail = res
                })
            }
        },
        changeCollection(item) {
            let parame = {
                id:this.custId,
                productId:item,
                productType:2
            }
            if(parame.id != ''){
                http.Request("szipee/user!custColle.action", "POST", null, parame).then(res => {
                    if(res.state == 'success'){
                        if(res.info == '收藏成功！'){
                            this.$message.success('收藏成功，您可以在个人中心查看您的收藏~~');
                        }
                        if(res.info == '取消收藏成功！'){
                            this.$message.success('取消收藏成功');
                        }
                        this.getDemandData()
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