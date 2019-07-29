<template>
	<div class="indexBody">
		<!--heider-->
		<curheader></curheader>
		<!-- banner -->
		<div class="banner_wrap">
			<div class="banner">
                <el-carousel :interval="5000" arrow="hover" height="480px" v-bind:autoplay="true">
                    <el-carousel-item>
                        <img src="../../assets/images/banner01.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../../assets/images/banner02.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../../assets/images/banner03.jpg" alt="">
                    </el-carousel-item>
                </el-carousel>
			</div>
			<div class="login_wrap">
				<div class="loginBox">
					<login></login>
				</div>
			</div>
		</div>
		<!-- 知识产权 -->
		<div class="ip_right_wrap">
			<div class="ip_right">
				<ul>
                    <li>
						<router-link to="/bargainHall">
							<i class="item_icon query"></i>
							<dl>
								<dt>专利交易查询平台</dt>
								<dd>PATENT TRADING</dd>
								<dd>QUERY PLATFORM</dd>
							</dl>
						</router-link>
					</li>
                    <li>
						<router-link to="/">
							<i class="item_icon ip"></i>
							<dl>
								<dt>知识产权服务平台</dt>
								<dd>INTELLECTUAL</dd>
								<dd>PROPERTY SERVICES</dd>
							</dl>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<i class="item_icon copyright"></i>
							<dl>
								<dt>商标版权数据库</dt>
								<dd>TRADEMARK AND</dd>
								<dd>COPYRIGHT DATABASE</dd>
							</dl>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<i class="item_icon led"></i>
							<dl>
								<dt>LED专业数据库</dt>
								<dd>LED DATABASE</dd>
							</dl>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 媒体资讯 -->
		<div class="information_wrap">
			<div class="information">
				<h2 class="title">最新资讯</h2>
				<template>
					<el-tabs v-model="rmationActiveName" @tab-click="rmationHandleClick">
						<el-tab-pane label="专利信息推送" name="1">
							<div class="item_pane">
								<div class="carouselBox">
									<el-carousel :interval="8000" arrow="always" height="340px" v-bind:autoplay="false">
										<el-carousel-item v-for="item in 1" :key="item">
											<img v-bind:src="noticeDataSource.urls" alt="">
										</el-carousel-item>
									</el-carousel>
								</div>
								<div class="infoDetail">
									<h3 class="infoTitle">{{noticeDataSource.noticeName}}</h3>
									<p class="infoText">{{noticeDataSource.noticeDes}}</p>
									<router-link  :to="{path:'/mediaDetail',query:{id:1,docId:noticeDataSource.id}}" class="i-btn">了解详情</router-link>
									<div class="time">
										<i class="item_icon icon_date"></i>
										<span>{{noticeDataSource.noticeDate|formatDate_YMDHMS}}</span>
									</div>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="政策法规" name="2">
							<div class="item_pane">
								<div class="carouselBox">
									<el-carousel :interval="8000" arrow="always" height="340px" v-bind:autoplay="false">
										<el-carousel-item v-for="item in 1" :key="item">
											<img v-bind:src="policyDataSource.urls" alt="">
										</el-carousel-item>
									</el-carousel>
								</div>
								<div class="infoDetail">
									<h3 class="infoTitle">{{policyDataSource.policyName}}</h3>
									<p class="infoText">{{policyDataSource.policyDes}}</p>
									<router-link  :to="{path:'/mediaDetail',query:{id:2,docId:policyDataSource.id}}" class="i-btn">了解详情</router-link>
									<div class="time">
										<i class="item_icon icon_date"></i>
										<span>{{policyDataSource.policyDate|formatDate_YMDHMS}}</span>
									</div>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
		<!-- 交易大厅 -->
		<div class="transaction_wrap">
			<div class="transaction">
				<h2 class="title">最新交易</h2>
                <template>
					<el-tabs v-model="bargainActiveName">
						<el-tab-pane label="待交易" name="1">
                            <div class="noDataWrap"  v-if="newBargainDataSource == ''">
                                <div class="noData">
                                    <span></span>
                                    <p>暂时没有数据哦(●ˇ∀ˇ●)~~</p>
                                </div>
                            </div>
							<ul class="transaction_content" v-else>
                                <li v-for="(item,index) in newBargainDataSource" v-if="index < 4">
                                    <h3>{{item.patentName}}</h3>
                                    <dl>
                                        <dt>￥{{item.lowPrice}}</dt>
                                        <dd>
                                            <span>所属行业</span>
                                            <span>{{item.orgType|orgTypeFilter}}</span>
                                        </dd>
                                        <dd>
                                            <span>专利类型</span>
                                            <span>{{item.patentType|patentTypeFilter}}</span>
                                        </dd>
                                    </dl>
                                    <router-link  :to="{path:'/bargainDetails',query: {id:item.id}}" class="i-btn">了解详情</router-link>
                                </li>
                            </ul>
						</el-tab-pane>
						<el-tab-pane label="已完成" name="2">
                            <div class="noDataWrap"  v-if="completeBargainDataSource == ''">
                                <div class="noData">
                                    <span></span>
                                    <p>暂时没有数据哦(●ˇ∀ˇ●)~~</p>
                                </div>
                            </div>
							<ul class="transaction_content" v-else>
                                <li v-for="(item,index) in completeBargainDataSource" v-if="index < 4">
                                    <h3>{{item.patentName}}</h3>
                                    <dl>
                                        <dt style="color: #8091a5;">￥{{item.lowPrice}}</dt>
                                        <dd>
                                            <span>所属行业</span>
                                            <span>{{item.orgType|orgTypeFilter}}</span>
                                        </dd>
                                        <dd>
                                            <span>专利类型</span>
                                            <span>{{item.patentType|patentTypeFilter}}</span>
                                        </dd>
                                    </dl>
                                    <el-button class="isEnd"  plain disabled>已结束</el-button>
                                </li>
                            </ul>
						</el-tab-pane>
					</el-tabs>
				</template>
				<div class="seeMore">
					<router-link to="/bargainHall">
						<el-button type="primary">查看更多</el-button>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 合作伙伴 -->
		<div class="partner_wrap">
			<div class="partner">
				<h2 class="title">合作伙伴</h2>
				<ul>
					<li><img src="../../assets/images/01.png" alt=""></li>
					<li><img src="../../assets/images/02.png" alt=""></li>
					<li><img src="../../assets/images/03.png" alt=""></li>
					<li><img src="../../assets/images/04.png" alt=""></li>
					<li><img src="../../assets/images/05.png" alt=""></li>
				</ul>
			</div>
		</div>
		<!-- starboard -->
		<starboard></starboard>
		<!-- bootom -->
		<bottom></bottom>
	</div>
</template>
<script>
import http from "../config/request";
export default {
  data() {
    return {
      userName: "",//用户名
      rmationActiveName: "1",//资讯tab页数
      bargainActiveName:"1",//交易tab页数
	  noticeDataSource:'',//公司公告
	  policyDataSource:'',//政策法规
      tradingRuleDataSource:'',//交易规则
      newBargainDataSource:[],//最新交易
      completeBargainDataSource:[],//最新交易
    };
  },
  created() {
    this.getNotice()
    this.getBargain()
  },
  methods: {
    rmationHandleClick(tab, event) {
      	switch (this.rmationActiveName){
			case '1':
			this.getNotice()
			break;
			case '2':
			this.getPolicy()
			break;
		}
    },
    // bargainHandleClick(tab,event){ },
    //获取最新公告
    getNotice(){
      	http.Request('szipee/cms!queryNotice.action','GET').then(res=>{
			this.noticeDataSource = res[0]
        })
    },
    //获取政策法规
    getPolicy(){
      	http.Request('szipee/cms!queryPolicy.action','GET').then(res=>{
            this.policyDataSource = res[0]
        })
    },
    //获取最新交易数据
    getBargain(){
        http.Request("szipee/trade!queryTradeList.action", "POST", null,{tradingState:1}).then(res => {
            if(res!=null){
                this.newBargainDataSource = res;
            }
        })
        http.Request("szipee/trade!queryTradeList.action", "POST", null,{tradingState:2}).then(res => {
            if(res!=null){
                this.completeBargainDataSource = res;
            }
        })
    }
  },
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    login: resolve => {require(['../common/login/login'], resolve)},
  },
};
</script>
<style lang="less" rel="stylesheet/less">
.indexBody {
  background: #f4f7fa;
  .banner_wrap {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner {
      width: 100%;
    }
    .login_wrap {
      width: 1230px;
      background: red;
      z-index: 2;
      position: absolute;
      top: 0;
      .loginBox {
        position: absolute;
        width: 285px;
        height: 346px;
        background-color: rgba(255, 255, 255, 0.25);
        top: 240px;
        right: 0px;
        margin-top: -173px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .ip_right_wrap,
  .information_wrap,
  .transaction_wrap,
  .partner_wrap {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
  }
  .ip_right_wrap {
    padding: 50px 0;
  }
  .transaction_wrap,
  .ip_right_wrap {
    background-color: transparent;
  }
  .ip_right,
  .information,
  .transaction,
  .partner {
    width: 1230px;
  }
  .ip_right {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      li {
        a {
          width: 307px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
          &:hover {
            box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.1);
          }
          .item_icon {
            display: inline-block;
            width: 48px;
            height: 48px;
            background-image: url("../../assets/images/icon.png");
            background-repeat: no-repeat;
          }
          .copyright {
            background-position: -48px -84px;
          }
          .led {
            background-position: -96px -84px;
          }
          .ip {
            background-position: -144px -84px;
          }
          .query {
            background-position: -192px -84px;
          }
          dl {
            text-align: center;
            dt {
              font-size: 16px;
              color: #16181e;
              margin-top: 20px;
              margin-bottom: 10px;
            }
            dd {
              font-size: 14px;
              color: #8091a5;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  //改写组件样式
  .information,
  .transaction {
    padding-bottom: 60px;
    .title {
      font-size: 24px;
      color: #16181e;
      text-align: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .item_pane {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .carouselBox {
        width: 600px;
        height: 340px;
      }
      .infoDetail {
        width: 600px;
        height: 340px;
        padding-top: 20px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .infoTitle {
          font-size: 18px;
          color: #313541;
          font-weight: 700;
        }
        .infoText {
          font-size: 14px;
          color: #8091a5;
          margin: 40px 0;
		  line-height: 24px;
		  height: 120px;
		  overflow:hidden;
       		text-overflow:ellipsis;
			display:-webkit-box !important;
			word-break:break-all;
			-webkit-box-orient:vertical;
			-webkit-line-clamp:5;
			text-indent: 28px;
        }
        .i-btn {
          display: inline-block;
          border: 1px solid #0099fa;
          color: #11a0fa;
          height: 48px;
          border-radius: 4px;
          line-height: 48px;
          width: 180px;
          text-align: center;
          align-self: flex-end;
          font-weight: 700;
        }
        .time {
          display: flex;
          align-items: center;
          .item_icon{
                display: inline-block;
                width: 20px;
                height: 20px;
                background-image: url("../../assets/images/icon.png");
                background-repeat: no-repeat;
            }
          span {
            color: #3f4a56;
            font-size: 14px;
            margin-left: 8px;
          }
        }
      }
    }
    .transaction_content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      li {
        width: 285px;
        height: 435px;
        background: #fff;
        border-radius: 4px;
        padding-top: 40px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
        background-image: url("../../assets/images/flame.png");
        background-repeat: no-repeat;
        background-position: 0px 0px;
        background-size: 48px 48px;
        h3 {
            font-size: 16px;
            color: #16181e;
            font-weight: 700;
            margin-bottom: 40px;
            text-overflow:ellipsis;
            word-break:keep-all;
            white-space:nowrap;
            overflow:hidden;
            width: 100%;
            padding: 0 10px;
            text-align: center;
        }
        dl {
          dt {
            font-size: 28px;
            color: #0099fa;
            margin-bottom: 40px;
          }
          dd {
            margin-bottom: 20px;
            font-size: 16px;
            display: flex;
            flex-direction:column;
            align-items: center;
                span {
                    &:nth-child(1) {
                        padding-bottom:6px;
                    }
                    &:nth-child(2) {
                        color: #8091a5;
                        position: relative;
                    }
                }
            }
        }
        .isEnd {
            width: 135px;
            background-color: #fff;
            border-color: #8091a5;
            color: #8091a5;
            margin-top: 40px;
        }
        .i-btn {
            display: inline-block;
            border: 1px solid #0099fa;
            color: #11a0fa;
            height: 36px;
            border-radius: 4px;
            line-height: 36px;
            width: 130px;
            text-align: center;
            margin-top: 40px;
            &:hover {
            background: #0099fa;
            color: #fff;
            }
        }
      }
    }
    .seeMore {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .el-button {
        padding: 12px 50px;
      }
    }
    .el-tabs__active-bar {
      width: 0px !important;
    }
    .el-tabs__header {
      margin: 0 0 40px;
      .el-tabs__nav-wrap {
        &:after {
          height: 0px;
        }
        .el-tabs__nav-scroll {
          display: flex;
          justify-content: center;
          .el-tabs__item {
            &:last-child {
              padding: 0 20px;
            }
            &:hover {
              color: #000;
            }
            &:nth-child(2) {
              padding: 0 20px;
            }
          }
          .is-active {
            background-color: #f7b422;
            border-radius: 4px;
            color: #fff;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .partner {
    padding-bottom: 60px;
    .title {
      font-size: 24px;
      color: #16181e;
      text-align: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 180px;
        height: 60px;
        margin-bottom: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>