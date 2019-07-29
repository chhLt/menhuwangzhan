<template>
    <div id="bargainList">
        <curheader></curheader>
        <div class="bargainContent">
            <div class="banner">
                <div class="banner_img">
                    <img src="../../assets/images/bargain.jpg" alt="">
                </div>
                <div class="result_warp">
                    <div class="result_box">
                        <div class="result">
                            <p>竞价大厅</p>
                        </div>
                    </div>
                </div>
                <div class="nav_warp">
                    <div class="nav_box">
                        <div class="nav">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item>查询结果</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bargainWarp">
                <div class="list">
                    <div class="inquire">
                        <el-select v-model="industryType"  clearable placeholder="选择行业分类">
                            <el-option v-for="item in industry" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="pType" class="industry" clearable placeholder="选择专利类型">
                            <el-option v-for="item in patents" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="stateVlaue" class="industry" clearable placeholder="请选择交易状态">
                            <el-option v-for="item in state" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input placeholder="输入专利名称" v-model="patentName" class="sPatent" clearable></el-input>
                        <el-button slot="append" icon="el-icon-search" class="sBtn" @click="clickSearch"></el-button>
                    </div>
                    <div class="contentList">
                        <div class="noDataWrap" v-if="nodata">
                            <div class="noData">
                                <span></span>
                                <p>暂时没有数据哦(●ˇ∀ˇ●)~~</p>
                            </div>
                        </div>
                        <ul v-else>
                            <li v-for="item in bargainList">
                                <h3>{{item.patentName}}</h3>
                                <dl>
                                    <dt style="color: #0099fa" v-if="item.tradingState=='1'">￥{{item.lowPrice}}</dt>
                                    <dt style="color: #8091a5" v-else>￥{{item.lowPrice}}</dt>
                                    <dd>
                                        <span>所属行业</span>
                                        <span>{{item.orgType|orgTypeFilter}}</span>
                                    </dd>
                                    <dd>
                                        <span>专利类型</span>
                                        <span>{{item.patentType|patentTypeFilter}}</span>
                                    </dd>
                                </dl>
                                <router-link type="primary"  :to="{path:'bargainDetails',query: {id:item.id}}" class="i-btn" v-if="item.tradingState=='1'" plain>了解详情</router-link>
                                <el-button class="isEnd" v-else plain disabled>已结束</el-button>
                            </li>
                        </ul>
                    </div>
                    <div class="pagination">
                        <div class="block" v-if="pstatus">
                            <el-pagination 
                                background @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-size="pageSize" 
                                layout="prev, pager, next, jumper" :total="total"
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
      state:[
        {
            value:"1",
            label:"待交易"
        },
        {
            value:"2",
            label:"已完成"
        }
      ],
      bargainList:[],//交易数据列表
      nodata: false,//是否有数据
      currentPage: 1,//当前页
      pageSize:null,//每页条数
      total:null,//数据总数
      patentName:"",//查找专利名称
      industryType:"",//行业分类
      pType:"",//专利类别
      pstatus:true,//显示分页
      stateVlaue:""//交易状态
    };
  },
  created() {
        this.getBargainData();
  },
  methods: {
    //翻页 
    handleCurrentChange(val) {
        this.getBargainData(this.patentName,this.pType,this.industryType,this.stateVlaue,parseInt(val)-1);
    },
    //搜索
    clickSearch(){
        this.getBargainData(this.patentName,this.pType,this.industryType,this.stateVlaue);
    },
    //获取数据
    getBargainData(patentName,patentType,orgType,stateVlaue,currentPage, pageCount) {
        let parame = {
            currentPage: currentPage || 0,
            pageCount: pageCount || 8
        };
        //根据不同的条件获取不同数据
        if(patentName){
            parame["patentName"]=patentName;
        }
        if(patentType){
            parame["patentType"]=patentType;
        }
        if(orgType){
            parame["orgType"]=orgType;
        }
        if(stateVlaue){
            parame["tradingState"]=stateVlaue;
        }
        http.Request("szipee/trade!queryTradeList.action", "POST", null, parame).then(res => {
          if (res != null) {
            this.currentPage=parseInt(res[0].currentPage)+1;
            this.pageSize=res[0].pageCount;
            this.total=res[0].dataCounts;
            this.pstatus = true;
            this.nodata = false;
          } else {
            this.pstatus = false;
            this.nodata = true;
          }
          this.bargainList = res;
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
//主标题颜色
@maintitle: #16181e;
@subtitle: #8091a5;
#bargainList {
  background: @bodyBackground;
  .bargainContent {
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
              height: 60px;
              line-height: 60px;
              color: #fff;
              font-size: 40px;
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
              color: #eff2f6;
            }
          }
        }
      }
    }
    .bargainWarp {
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
          padding: 0 15px;
          display: flex;
          flex-direction: row;
          .public {
            border: 1px solid #def6ee;
            border-radius: 6px;
            background: #fff;
            font-size: 14px;
            color: #16181e;
          }
          .sPatent {
            width: 220px;
            margin-left: 15px;
            .el-input__inner {
              height: 40px;
              border-radius: 4px;
            }
          }
          .industry {
            margin-left: 15px;
          }
          .state{

          }
          .sBtn {
            background: #0099fa;
            margin-left: 15px;
            .el-icon-search {
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
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap; //换行
            padding-top: 30px;
            padding: 30px 15px;
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
                margin-bottom: 30px;
                margin-right: 30px;
                &:nth-child(4n){
                    margin-right:0px;
                }
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
                    margin-bottom: 40px;
                }
                dd {
                    margin-bottom: 20px;
                    font-size: 16px;
                    display: flex;
                    flex-direction:column;
                    align-items: center;
                    span{
                            &:nth-child(1) {
                                font-weight: 600;
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
          .item_icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url("../../assets/images/icon.png");
            background-repeat: no-repeat;
          }
          .icon_solid {
            background-position: -61px -1px;
          }
          .icon_hollow {
            background-position: -80px -1px;
          }
          .icon_date {
            background-position: -340px -1px;
          }
          .icon_address {
            background-position: -440px -1px;
          }
        }
      }
    }
  }
}
</style>


