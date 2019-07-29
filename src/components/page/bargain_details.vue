<template>
    <div id="bargainDetails">
        <curheader></curheader>
        <div class="bargainDetails">
            <!-- 面包屑 -->
            <div class="bread">
                <el-breadcrumb class="detailsbread" separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path:'/bargainHall'}">交易大厅</el-breadcrumb-item>
                    <el-breadcrumb-item>交易详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="trans">
                <div class="trans_carousel">
                    <div class="trans_left">
                        <el-carousel :interval="3000" arrow="always" height="340px" v-bind:autoplay="true">
                            <el-carousel-item v-for="item in 1" :key="item">
                                <img src="../../assets/images/bargain_banner.png" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="trans_right">
                        <div class="ribbon">
                            <span class="green">正向多次</span>
                        </div>
                        <div class="ribbon">
                            <span class="orange">自己竞价</span>
                        </div>
                        <div class="title">
                            <p>{{bargainDetail.patentName}}</p>
                        </div>
                        <div class="quotation">
                            <span>￥{{bargainDetail.lowPrice}}</span>
                        </div>
                        <div class="apply">
                            <div class="apply_buton">
                                <!-- <el-button type="primary">申请报价</el-button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details_item">
                <div class="title">
                    <p>交易信息</p>
                </div>
                <div class="bidding_content">
                    <div class="left">
                        <p>专利名称：
                            <span>{{bargainDetail.patentName}}</span>
                        </p>
                        <p>专利类型：
                            <span>{{bargainDetail.patentType|patentTypeFilter}}</span>
                        </p>
                        <p>法律状态：
                            <span>{{bargainDetail.lawState|lawStateFilter}}</span>
                        </p>
                        <p> 开始时间：
                            <span>{{bargainDetail.patentApplydate}}</span>
                        </p>
                    </div>
                    <div class="right">
                        <p>行业分类：
                            <span>{{bargainDetail.orgType|orgTypeFilter}}</span>
                        </p>
                        <p>合作方式：
                            <span>转让技术 </span>
                        </p>
                        <p> 公司低价：
                            <span>￥{{bargainDetail.lowPrice}} </span>
                        </p>
                        <p>交易状态：
                            <span>{{bargainDetail.tradingState|bargainStateFilter}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="details_item">
                <div class="title">
                    <p>信息详情</p>
                </div>
                <div class="info_content">
                    <div>
                        <p>{{bargainDetail.patentDes}}</p>
                    </div>
                </div>
            </div>
            <div class="details_item">
                <div class="title">
                    <p>联系方式</p>
                </div>
                <div class="contact_content">
                    <div class="left">
                        <p>
                            <span>联系人：</span>
                            <span>{{bargainDetail.contactName}}</span>
                        </p>
                        <p>
                            <span>E-mail：</span>
                            <span>{{bargainDetail.contactEmail}}</span>
                        </p>
                    </div>
                    <div class="right">
                        <p>
                            <span>电话：</span>
                            <span>{{bargainDetail.contactPhone}}</span>
                        </p>
                        <p>
                            <span>地址：</span>
                            <span>{{bargainDetail.contactAddress}}</span>
                        </p>
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
  data() {
    return {
        bargainDetail:{},
        custId:''
    };
  },
  created() {
    this.getBargainData()
  },
  methods: {
    getBargainData(){
        let parame = {id:this.$route.query.id}
        http.Request("szipee/trade!queryTradeById.action", "POST", null, parame).then(res => {
            this.bargainDetail = res;
        });
    }
  },
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
};
</script>
<style lang="less" ref="reference/less">
@import "../../assets/less/index.less";
#bargainDetails {
  background-color: #f4f7fa;
  .bargainDetails {
    width: 1230px;
    margin: 0 auto;
    padding-bottom: 60px;
    .bread {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      .detailsbread {
        width: 1230px;
        .el-breadcrumb__inner {
          color: #8091a5;
        }
      }
    }
    .trans {
      display: flex;
      justify-content: center;
      .trans_carousel {
        width: 1230px;
        display: flex;
        flex-direction: row;
        .trans_left {
          width: 600px;
          height: 340px;
        }
        .trans_right {
          width: 630px;
          height: 340px;
          padding-left: 30px;
          padding-top: 30px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          .ribbon {
            position: absolute;
            right: 20px;
            top: 0px;
            margin-right: 30px;
            &:first-child {
              margin-right: 0px;
            }
            .green {
              background: #56bd5b;
              &:after {
                border-left: 10px solid #56bd5b;
                border-right: 10px solid #56bd5b;
              }
              &:before {
                border-bottom: 6px solid #56bd5b;
              }
            }
            .orange {
              background: #f7b422;
              &:after {
                border-left: 10px solid #f7b422;
                border-right: 10px solid #f7b422;
              }
              &:before {
                border-bottom: 6px solid #f7b422;
              }
            }
            span {
              display: inline-block;
              width: 20px;
              padding: 10px 0;
              top: -6px;
              left: -25px;
              position: absolute;
              text-align: center;
              border-top-left-radius: 3px;
              color: #fff;
              font-size: 12px;
              &:after {
                content: "";
                position: absolute;
                height: 0;
                width: 0;
                border-bottom: 10px solid transparent;
                bottom: -10px;
                left: 0;
              }
              &:before {
                content: "";
                position: absolute;
                height: 0;
                width: 0;

                border-right: 6px solid transparent;
                right: -6px;
                top: 0;
              }
            }
          }
          .title {
            font-size: 18px;
            margin-bottom: 80px;
            color: #16181e;
          }
          .quotation {
            margin-bottom: 105px;
            display: flex;
            align-items: center;
            span {
                color: @lightThemeColor;
                font-size: 28px;
                padding-left:20px;
            }
          }
          .apply {
            display: flex;
            flex-direction: row;
            .apply_buton {
              .el-button {
                width: 180px;
                height: 42px;
                background-color: #fff;
                color: @lightThemeColor;
                font-size: 18px;
                border-radius: @lightThemeColor;
              }
            }
          }
        }
      }
    }
    .details_item {
      width: 1230px;
      background-color: #fff;
      margin-top: 30px;
      padding: 30px 75px;
      .title {
        width: 1080px;
        border-bottom: 2px solid #dfe6ee;
        p {
          padding-bottom: 15px;
        }
      }
      .bidding_content,
      .contact_content {
        display: flex;
        flex-direction: row;
        padding: 40px;
        .left,
        .right {
          width: 50%;
          p {
            margin-bottom: 20px;
            color: #91a0b1;
            font-size: 14px;
          }
        }
      }
      .info_content {
        display: flex;
        flex-direction: row;
        padding: 40px;
        p {
          font-size: 14px;
          color: #667587;
          line-height: 36px;
          text-indent: 28px;
        }
      }
    }
  }
}
</style>