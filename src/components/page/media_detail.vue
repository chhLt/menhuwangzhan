<template>
	<div id="details">
		<curheader></curheader>
		<div class="detailsWarp">
			<div class="bread">
				<el-breadcrumb class="detailsbread" separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path:'/'}">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path:'/infomedia'}">媒体资讯</el-breadcrumb-item>
					<el-breadcrumb-item>资讯详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="detailsinfo" v-if="$route.query.id == 1">
				<div class="infoContent">
					<div class="contentHead">
						<p>{{dataSource.noticeName}}</p>
					</div>
					<div class="contentBody">
						<p>{{dataSource.noticeDes}}</p>
					</div>
					<div class="contentFooter">
						<p>
							作者：{{dataSource.createName}}
						</p>
						<p>
							时间：{{dataSource.noticeDate | formatDate_YMDHMS}}
						</p>
					</div>
				</div>
			</div>
			<div class="detailsinfo" v-if="$route.query.id == 2">
				<div class="infoContent">
					<div class="contentHead">
						<p>{{dataSource.policyName}}</p>
					</div>
					<div class="contentBody" >
						<p v-html="dataSource.policyDes"></p>
					</div>
					<div class="contentFooter">
						<p>
							作者：{{dataSource.createName}}
						</p>
						<p>
							时间：{{dataSource.policyDate | formatDate_YMDHMS}}
						</p>
					</div>
				</div>
			</div>
			<div class="detailsinfo" v-if="$route.query.id == 3">
				<div class="infoContent">
					<div class="contentHead">
						<p>{{dataSource.docName}}</p>
					</div>
					<div class="contentBody">
						<p v-html="dataSource.docContent" v-if="$route.query.cid == 1||$route.query.cid == 2"></p>
                        <img :src="dataSource.docContent" alt="" v-if="$route.query.cid == 3" style="display:block;margin:0 auto;">
					</div>
					<div class="contentFooter">
						<p>
							时间：{{dataSource.decDate | formatDate_YMDHMS}}
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
      dataSource: "",
      docContent:""
    };
  },
  created() {
    this.getNotice();
	this.getPolicy();
	this.getTrading();
  },
  methods: {
    //获取列表页传值请求公告数据
    getNotice() {
      if (this.$route.query.id == 1) {
        let parame = {
          id: this.$route.query.docId
        };
        http.Request("szipee/cms!queryNoticeById.action", "POST", null, parame).then(res => {
            this.dataSource = res;
        });
      }
    },
	//获取列表页传值请求政策法规数据
	getPolicy(){
		if(this.$route.query.id == 2){
			let parame = {
				id:this.$route.query.docId
			};
			http.Request("szipee/cms!queryPolicyById.action", "POST", null, parame).then(res => {
            	this.dataSource = res;
        	});
		}
	},
	getTrading(){
		if(this.$route.query.id == 3){
            this.dataSource = this.$route.query.item;
        }
    },
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
#details {
  .detailsWarp {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: @bodyBackground;
    .bread {
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      .detailsbread {
        width: 1230px;
        .el-breadcrumb__inner {
          color: #8091a5;
        }
      }
    }
    .detailsinfo {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 60px;
      .infoContent {
        background-color: #fff;
        width: 1230px;
        min-height: 300px;
        .contentHead {
          width: 100%;
          height: 90px;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          p {
            font-size: 18px;
            height: 36px;
            line-height: 36px;
          }
        }
        .contentBody {
          width: 100%;
          height: auto;
          padding: 0 75px 0 75px;
          margin-top: 15px;
          margin-bottom: 105px;
          p {
            font-size: 14px;
            line-height: 36px;
            text-indent: 37px;
          }
        }
        .contentFooter {
          padding-left: 75px;
          padding-bottom: 42px;
          p {
            font-size: 14px;
            line-height: 36px;
            color: #b0bac5;
          }
        }
      }
    }
  }
}
</style>

