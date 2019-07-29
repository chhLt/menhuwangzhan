<template>
    <div id="projectList">
        <curheader></curheader>
        <div class="listContent">
            <div class="banner">
                <div class="banner_img">
                    <img src="../../assets/images/search_banner.jpg" alt="">
                </div>
                <div class="result_warp">
                    <div class="result_box">
                        <div class="result">
                            <p>需求列表</p>
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
                        <div class="sort">
                            <div>
                                 <el-select v-model="demandSort"  clearable placeholder="请选择需求类型" multiple collapse-tags>
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                 </el-select>
                                 <el-input placeholder="输入需求名称"  class="selectAll public" v-model="demandName" clearable></el-input>
                                 <el-button slot="append" icon="el-icon-search" class="sBtn" @click="search"></el-button>
                            </div>
                        </div>
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
                                <div class="mainImage">
                                    <router-link  :to="{path:'demandDetail',query:{id:item.id}}">
                                        <img src="../../assets/images/search_test.png" alt="">
                                    </router-link>
                                </div>
                                <div class="mainTitle">
                                    <span>{{item.demandName}}</span>
                                    <i class="item_icon" v-bind:class="[item.isCollection ? 'icon_solid' : 'icon_hollow']" @click="changeCollection(item.id)"></i>
                                </div>
                                <div class="subTitle">
                                    <p>{{item.demandType | changeDemandType}}</p>
                                </div>
                                <div class="price">
                                    <p>价格面议</p>
                                </div>
                                <div class="bottomView">
                                    <div class="date">
                                        <i class="item_icon icon_date"></i>
                                        <span>{{item.releaseDate|formatDate_YMD}}</span>
                                    </div>
                                    <div class="address">
                                        <span><i class="item_icon icon_address"></i><em>{{item.contactAddress}}</em></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="pagination">
                        <div class="block" v-show="pstatus">
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
import http from "../config/request";
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "专利权转让"
        },
        {
          value: "2",
          label: "专利权实施许可"
        },
        {
          value: "3",
          label: "专利权独家实施许可"
        },
        {
          value: "4",
          label: "专利申请权"
        },
        {
          value: "5",
          label: "技术秘密转让"
        },
        {
          value: "6",
          label: "股权转让"
        },
        {
          value: "7",
          label: "投资"
        },
        {
          value: "8",
          label: "其他"
        },
      ],
      demandName:"",//需求名
      custId:"",
      listInfo: [],
      currentPage: 1,
      demandSort: "",//需求类型
      selectAll: "",
      selectNewest: "",
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
    handleCurrentChange(val) {
        this.getDemandData(this.demandName,this.demandSort,parseInt(val)-1);
    },
    //初始化获取用户信息
    getUserInfo(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.custId = userInfo.id
        }
    },
    //收藏需求
    changeCollection(id) {
        let parame = {
            id:this.custId,
            productId:id,
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
    },
    //查询点击调用
    search(){
        this.getDemandData(this.demandName,this.demandSort);
    },
    getDemandData(demandName,demandType,currentPage,pageCount){
         let parame = {
            currentPage:currentPage||0,
            pageCount:pageCount||8
        }
        if(this.custId){
            parame["custId"] = this.custId
        }
        if(demandName){
            parame["demandName"]=demandName
        }
        if(demandType){
            parame["demandType"]=demandType.join("|")
        }
        if(parame.custId != ''){
            http.Request("szipee/demand!queryDemand.action", "POST", null, parame).then(res => {
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
            http.Request('szipee/demand!queryDemand.action', "POST", null, parame).then(res=>{
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
#projectList {
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
          justify-content: space-between;
          .public {
            border: 1px solid #def6ee;
            border-radius: 6px;
            background: #fff;
            font-size: 14px;
            color: #16181e;
          }
          .sort {
            //分类
            display: flex;
            flex-direction: row;
            margin-left: 30px;
            .title {
              width: 105px;
              height: 42px;
              line-height: 42px;
              text-align: center;
              color: #313541;
              font-size: 14px;
            }
            .el-input--suffix{
                width: 250px;
            }
            .selectSort {
              width: 180px;
            }
            .selectAll {
              width: 180px;
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
          .newest {
            //最新
            width: 105px;
            height: 42px;
            line-height: 42px;
            margin-right: 15px;
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
              padding-bottom:10px;
              margin: 20px 15px 15px 15px;
              border-radius: 4px;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              .mainImage {
                width: 100%;
                height: 160px;
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
                padding:0 10px;
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
                  color: #0099fa;
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
                  width: 50%;
                  span {
                    color: #3f4a56;
                    font-size: 14px;
                    display: inline-block;
                    line-height: 18px;
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
                    margin-right: 5px;
                }
            }
          }
        }
      }
    }
  }
}
</style>