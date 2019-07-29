<template>
    <div id="patentList">
        <curheader></curheader>
        <div class="listContent">
            <div class="banner">
                <div class="banner_img">
                    <img src="../../assets/images/search_banner.jpg" alt="">
                </div>
                <div class="result_warp">
                    <div class="result_box">
                        <div class="result">
                            <p>专利列表</p>
                        </div>
                    </div>
                </div>
                <div class="nav_warp" style="display:none">
                    <div class="nav_box">
                        <div class="nav">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item>需求列表</el-breadcrumb-item>
                                <el-breadcrumb-item>查询结果</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div class="searchWarp">
                <div class="list">
                    <div class="inquire">
                        <el-select v-model="industryType" class="industry" clearable placeholder="选择行业分类">
                            <el-option  v-for="item in industry" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="pType" class="industry" clearable placeholder="选择专利类型">
                            <el-option  v-for="item in patents" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input placeholder="输入专利名称" v-model="patentName" class="sPatent" clearable></el-input>
                        <el-button slot="append" icon="el-icon-search" class="sBtn" @click="search"></el-button>
                    </div>
                    <div class="contentList">
                        <div class="noDataWrap" v-show="nodata">
							<div class="noData">
								<span></span>
								<p>暂时没有数据哦(●ˇ∀ˇ●)~~</p>
							</div>
						</div>
                        <ul>
                            <li v-for="item in listInfo">
                                <div class="mainImage" @click="enterDetails(item.id,item.patentStatus,item.expiryEnddate)">
                                    <img v-bind:src="item.urls" alt="">
                                </div>
                                <div class="mainTitle">
                                    <span>{{item.patentName}}</span>
                                    <i class="item_icon" v-bind:class="[item.isCollection ? 'icon_solid' : 'icon_hollow']" @click="changeCollection(item.id)"></i>
                                </div>
                                <div class="subTitle">
                                    <p>{{item.orgType|orgTypeFilter}}</p>
                                </div>
                                <div class="price">
                                    <p v-if="item.patentStatus =='1'" style="color:#0099fa;">{{item.hopePrice|priceFilter}}</p>
                                    <p v-else style="color:#8091a5;">已结束</p>
                                </div>
                                <div class="bottomView">
                                    <div class="date">
                                        <i class="item_icon icon_date"></i>
                                        <span>{{item.expiryEnddate|formatDate_YMD}}</span>
                                    </div>
                                    <div class="address" v-bind:title="item.coverAddress|addressFilter">
                                        <span><i class="item_icon icon_address"></i><em>{{item.coverAddress|addressFilter}}</em></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="pagination">
                        <div class="block" v-if="pstatus">
                            <el-pagination
                                background
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-size="pageSize"
                                layout="prev, pager, next, jumper" 
                                :total="total"
                            >
                            </el-pagination>
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
import {formatDateTime_YMD} from '../config/FormatDateTime.js';
import http from "../config/request";
export default {
  data() {
    return {
      listInfo: [],
      industry:[
          {
            value: '1',
            label: '农林牧业'
          },
          {
            value: '2',
            label: '食品饮料'
          },
          {
            value: '3',
            label: '家具用品'
          },
          {
            value: '4',
            label: '教育休闲'
          },
          {
            value: '5',
            label: '医药与医疗'
          },
          {
            value: '6',
            label: '化学化工'
          },
          {
            value: '7',
            label: '电气自动化'
          },
          {
            value: '8',
            label: '新能源'
          },
          {
            value: '9',
            label: '电子信息源'
          },
          {
            value: '10',
            label: '仪器仪表'
          },
          {
            value: '11',
            label: '环保和资源'
          },
          {
            value: '12',
            label: '轻工纺织'
          },
          {
            value: '13',
            label: '包装印刷'
          },
          {
            value: '14',
            label: '建筑建材'
          },
          {
            value: '15',
            label: '新型材料'
          },
          {
            value: '16',
            label: '海洋开发'
          },
          {
            value: '17',
            label: '航空航天'
          },
          {
            value: '18',
            label: '采矿冶金'
          },
          {
            value: '19',
            label: '交通运输'
          },
          {
            value: '20',
            label: '橡胶塑料'
          },
          {
            value: '21',
            label: '机械'
          },
          {
            value: '22',
            label: '安全防护'
          },
          {
            value: '23',
            label: '其他'
          },
      ],
      pType:"",//专利类别
      patents:[
          {
            value: '1',
            label: '实用新型'
          },
          {
            value: '2',
            label: '外观设计'
          },
          {
            value: '3',
            label: '发明'
          },
      ],
      industryType:"",//行业类别
      custId:'',
      selectSort: "",
      selectAll: "",
      selectNewest: "",
      patentName:"",//查找专利
      pageSize:null,//每页条数
      currentPage:1,//当前页
      total:null,//数据总数
      pstatus:false,//分页是否显示
      nodata:true,//无数据显示
    };
  },
  created() {
    this.getUserInfo()
    this.getDemandData()
  },
  methods: {
    //分页事件  
    handleCurrentChange(val) {
      this.getDemandData(this.patentName,this.pType,this.industryType,parseInt(val)-1);
    },
    //初始化获取用户信息
    getUserInfo() {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo) {
        this.custId = userInfo.id;
      }
    },
    //更改收藏状态
    changeCollection(id) {
        let parame = {
            id:this.custId,
            productId:id,
            productType:1
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
            this.$message.error('收藏专利只能在已登录状态下进行~~');
        }
    },
    enterDetails(id,state,tiem){
        if(state == 1){
            this.$router.push({path:'patentDetail',query:{id:id}})
        }else{
            this.$message({message: '该专利已经于'+formatDateTime_YMD(tiem)+'结束',type: 'warning'});
        }
    },
    //查询需求列表数据
    search(){
        this.getDemandData(this.patentName,this.pType,this.industryType);
    },
    //请求需求列表数据
    getDemandData(patentName,patentType,orgType,currentPage,pageCount){
        let parame = {
            currentPage:currentPage||0,
            pageCount:pageCount||8
        }
        if(this.custId){
            parame["custId"] = this.custId
        }
        if(patentName){
            parame["patentName"]=patentName;
        }
        if(patentType){
            parame["patentType"]=patentType;
        }
        if(orgType){
            parame["orgType"]=orgType;
        }
        if(parame.custId != ''){
            http.Request("szipee/patent!queryPatent.action", "POST", null, parame).then(res => {
                if(res!=null){
                    this.pstatus=true;
                    this.currentPage=parseInt(res[0].currentPage)+1;
                    this.pageSize=res[0].pageCount;
                    this.total=res[0].dataCounts;
                    this.nodata=false;
                }else{
                    this.pstatus=false;
                    this.nodata=true;
                }
                this.listInfo = res;
            });
        }else{
            http.Request('szipee/patent!queryPatent.action','POST',null,parame).then(res=>{
                if(res!=null){
                    this.pstatus=true;
                    this.currentPage=parseInt(res[0].currentPage)+1;
                    this.pageSize=res[0].pageCount;
                    this.total=res[0].dataCounts;
                    this.nodata=false;
                }else{
                    this.pstatus=false;
                    this.nodata=true;
                }
                this.listInfo = res;
            })
        }
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
//主标题颜色
@maintitle: #16181e;
@subtitle: #8091a5;
#patentList {
  background: @bodyBackground;
  .listContent {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    .banner {
      min-width: 1230px;
      overflow: auto;
      display: flex;
      justify-content: center;
      .banner_img {
        transform: translateX(0px) scale(1);
        img {
          width: 100%;
          height: 240px;
        }
      }
      //banner显示搜索来源
      .result_warp {
        width: 1230px;
        position: absolute;
        top: 0;
        z-index: 2;
        .result_box {
          position: absolute;
          top: 241px;
          right: 0;
          width: 1230px;
          height: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          .result {
            p {
              width: 100%;
              height: 42px;
              line-height: 42px;
              color: #232326;
              font-size: 36px;
            }
          }
        }
      }
      //banner为导航
      .nav_warp {
        width: 1230px;
        position: absolute;
        top: 0;
        z-index: 2;
        .nav_box {
          position: absolute;
          top: 335px;
          right: 0;
          width: 1230px;
          height: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .nav {
            .el-breadcrumb__inner,
            .el-breadcrumb__inner a {
              color: #fff;
            }
          }
        }
      }
    }
    .searchWarp {
      width: 100%;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .list {
        max-width: 1260px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .inquire {
          width: 1260px;
          height: 42px;
          display: flex;
         flex-direction: row;
          .public {
            border: 1px solid #def6ee;
            border-radius: 6px;
            background: #fff;
            font-size: 14px;
            color: #16181e;
          }
         .sPatent{
             width: 220px;
             margin-left: 15px;
             .el-input__inner{
                 height:40px;
                 border-radius: 4px;
             }
         }
         .industry{
             margin-left: 15px;
         }
         .sBtn{
             background: #0099fa;
             margin-left: 15px;
             .el-icon-search{
                 color: #fff;
             }
             position: relative;
             right: 2px;
             height: 40px;
             border-radius: 4px;
         }
        }
        .contentList {
          width: 1260px;
          display: flex;
          flex-direction: row;
          ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap; //换行
            li {
              display: inline-block;
              background-color: #fff;
              width: 285px;
              height: 310px;
              margin: 20px 15px 15px 15px;
              display: flex;
              flex-direction: column;
              .mainImage {
                width: 100%;
                height: 160px;
                cursor: pointer;
                img {
                  width: 285px;
                  height: 160px;
                }
              }
              .mainTitle {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                span {
                  color: @maintitle;
                  font-size: 16px;
                  margin-left: 10px;
                  font-weight: 600;
                  letter-spacing: 1px;
                }
                i {
                  display: inline-block;
                  margin-right: 10px;
                }
              }
              .subTitle {
                margin-top: 10px;
                color: @subtitle;
                font-size: 14px;
                padding: 0 10px;
                p{
                    text-overflow:ellipsis;
                    word-break:keep-all;
                    white-space:nowrap;
                    overflow:hidden;
                }
              }
              .price {
                padding: 20px 0;
                width: 100%;
                p {
                  width: 100%;
                  text-align: center;
                  font-size: 18px;
                }
              }
              .bottomView {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0 10px;
                .date {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  width: 50%;
                  span {
                    color: #3f4a56;
                    font-size: 14px;
                    display: inline-block;
                    line-height: 18px;
                    margin-left: 3px;
                  }
                }
                .address {
                  width: 50%;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  span {
                    color: #3f4a56;
                    font-size: 14px;
                    display:flex;
                    justify-content: flex-end;
                    align-content: center;
                    text-overflow:ellipsis;
                    word-break:keep-all;
                    white-space:nowrap;
                    overflow:hidden;
                    em{
                        line-height: 20px;
                        width: ~'calc(100% - 20px)';
                        justify-content: flex-end;
                        align-content: center;
                        text-overflow:ellipsis;
                        word-break:keep-all;
                        white-space:nowrap;
                        overflow:hidden;
                    }
                  }
                }
              }
            .item_icon {
                display: inline-block;
                width: 20px;
                height: 20px;
                background-image: url("../../assets/images/icon.png");
                background-repeat: no-repeat;
                cursor: pointer;
            }
            }
          }
        }
      }
    }
  }
}
</style>