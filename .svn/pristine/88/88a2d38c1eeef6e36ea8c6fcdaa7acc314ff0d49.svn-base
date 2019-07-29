<template>
    <div id="searchList">
       <curheader></curheader>
       <div class="searchContent">
           <div class="banner">
             <div class="banner_img">
                <img src="../../assets/images/searchbanner.jpg" alt="">
             </div>
             <div class="result_warp">
                <div class="result_box">
                  <div class="result">
                      <p>XXXX查询结果</p>
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
                    <span class="title">所属分类：</span>
                    <div>
                        <el-select v-model="selectSort" class="selectSort public" clearable placeholder="请选择">
                          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <el-select v-model="selectAll" class="selectAll public" clearable placeholder="全部">
                          <el-option v-for="item in All" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    
                  </div>
                  <div>
                      <el-select v-model="selectNewest" class="newest public" clearable placeholder="最新">
                          <el-option v-for="item in All" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                  </div>
                </div>
                <div class="contentList">
                  <ul>
                    <li v-for="item in listInfo">
                      <router-link to="/projectDetails">
                        <div class="mainImage">
                          <img v-bind:src="item.img" alt="">
                        </div>
                        <div class="mainTitle">
                          <span>{{item.maintitle}}</span>
                          <i class="item_icon" v-bind:class="[item.isCollect ? 'icon_solid' : 'icon_hollow']" @click="changeLike(item.isCollect)"></i>
                        </div>
                        <div class="subTitle">
                          <p>{{item.subtitle}}</p>
                        </div>
                        <div class="price">
                          <p>￥{{item.price}}万</p>
                        </div>
                        <div class="bottomView">
                          <div class="date">
                            <i class="item_icon icon_date"></i>
                            <span>{{item.date}}</span>
                          </div>
                          <div class="address">
                            <i class="item_icon icon_address"></i>
                            <span>{{item.address}}</span>
                          </div>
                        </div>
                        </router-link>
                    </li>
                  </ul>
                </div>
                <div class="pagination">
                    <div class="block">
                      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="4000">
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
  data () {
      return {
        options: [{
          value:"选项3",
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        All:[
          {
            value:1,
            label:"农业"
        },
        {
            value:2,
            label:"渔业"
        },
        {
            value:3,
            label:"林业"
        },
        {
            value:4,
            label:"牧业"
        }
        ],
        listInfo:[
          {
            id:1,
            img:require('../../assets/images/search_test.png'),
            maintitle:"多功能草木燃料炉",
            subtitle:"仪器设备",
            price:"15.00",
            isCollect:true,
            date:"2017-11-22",
            address:"广州·深圳"
          },
           {
            id:2,
            img:require('../../assets/images/search_test.png'),
            maintitle:"多功能草木燃料炉",
            subtitle:"仪器设备",
            price:"15.00",
            isCollect:false,
            date:"2017-11-22",
            address:"广州·深圳"
          },
           {
            id:3,
            img:require('../../assets/images/search_test.png'),
            maintitle:"多功能草木燃料炉",
            subtitle:"仪器设备",
            price:"15.00",
            isCollect:true,
            date:"2017-11-22",
            address:"广州·深圳"
          },
           {
            id:4,
            img:require('../../assets/images/search_test.png'),
            maintitle:"多功能草木燃料炉",
            subtitle:"仪器设备",
            price:"15.00",
            isCollect:true,
            date:"2017-11-22",
            address:"广州·深圳"
          },
           {
            id:5,
            img:require('../../assets/images/search_test.png'),
            maintitle:"多功能草木燃料炉",
            subtitle:"仪器设备",
            price:"15.00",
            isCollect:true,
            date:"2017-11-22",
            address:"广州·深圳"
          },
        ],
        currentPage: 1,
        selectSort: '',
        selectAll:'',
        selectNewest:'',
      }
  },
  updated () {
    
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      changeLike(item){
        
      }
  },
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
}
</script>
<style lang="less" ref="reference/less">
@import '../../assets/less/index.less';
//主标题颜色
@maintitle:#16181e;
@subtitle:#8091a5;
#searchList{
    background: @bodyBackground;
    .searchContent{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      .banner{
        min-width: 1230px;
        overflow: auto;
        display: flex;
        justify-content: center;
        .banner_img{
          transform: translateX(0px) scale(1);
          img{
            width: 100%;
            height: 240px;
          }
        }
        //banner显示搜索来源
        .result_warp{
          width: 1230px;
          position: absolute;
          top:0;
          z-index: 2;
          .result_box{
            position: absolute;
            top:241px;
            right:0;
            width: 1230px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            .result{
              p{
                width: 100%;
                height: 42px;
                line-height: 42px;
                color:#fff;
                font-size: 20px;
              }
            }
          }
        }
        //banner为导航
        .nav_warp{
          width: 1230px;
          position: absolute;
          top:0;
          z-index: 2;
          .nav_box{
            position: absolute;
            top:335px;
            right:0;
            width: 1230px;
            height: 42px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav{
              .el-breadcrumb__inner, .el-breadcrumb__inner a{
                color: #fff;
              }
            }
          }
        }
      }
      .searchWarp{
        width: 100%;
        margin-top:40px;
        display: flex;
        justify-content: center;
        .list{
          max-width: 1260px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          .inquire{
            width: 1260px;
            height: 42px;
            display: flex;
            justify-content: space-between;
            .public{
              border: 1px solid #def6ee;
              border-radius: 6px;background: #fff;
              font-size: 14px;
              color: #16181e;
            }
            .sort{//分类
              display: flex;
              flex-direction: row;
              margin-left: 30px;
              .title{
                width: 105px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                color:#313541;
                font-size: 14px;
              }
              .selectSort{
                width: 180px;
              }
              .selectAll{
                width: 180px;
                margin-left: 30px;
              }
            }
            .newest{//最新
              width: 105px;
              height: 42px;
              line-height: 42px;
              margin-right: 15px;
            }
          }
          .contentList{
            width: 1260px;
            display: flex;
            flex-direction: row;
            ul{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;//换行
              li{
                display: inline-block;
                background-color: #fff;
                width: 285px;
                height: 310px;
                margin:20px 15px 15px 15px;
                display: flex;
                flex-direction: column;
                .mainImage{
                  width: 100%;
                  height: 160px;
                  img{
                  width: 285px;
                  height: 160px;
                  }
                }
                .mainTitle{
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                  span{
                    color: @maintitle;
                    font-size: 16px;
                    margin-left: 10px;
                    font-weight: 600;
                    letter-spacing: 1px;
                  }
                  i{
                    display: inline-block;
                    margin-right: 10px;
                  }
                }
                .subTitle{
                  margin-top: 10px;
                  color:@subtitle;
                  font-size: 14px;
                  margin-left: 10px;
                }
                .price{
                  margin:20px 0;
                  width: 100%;
                  p{
                    width: 100%;
                    text-align: center;
                    color:#0099fa;
                    font-size: 18px;
                  }
                }
                .bottomView{
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  margin-bottom: 20px;
                  height: 20px;
                  .date{
                    margin-left: 10px;
                    display: flex;
                    flex-direction: row;
                    span{
                      color:#3f4a56;
                      font-size: 14px;
                      display: inline-block;
                      height: 20px;
                      line-height: 18px;
                      padding-left: 5px;
                    }
                  }
                  .address{
                    margin-right: 10px;
                    display: flex;
                    flex-direction: row;
                    span{
                      color:#3f4a56;
                      font-size: 14px;
                      display: inline-block;
                      height: 20px;
                      line-height: 18px;
                      padding-left: 5px;
                    }
                  }
                }
              }
            }
          .item_icon{
              display: inline-block;
              width: 20px;
              height: 20px;
              background-image: url("../../assets/images/icon.png");
              background-repeat: no-repeat;
            }
            .icon_solid{
                background-position:-61px -1px;
            }
            .icon_hollow{
                background-position:-80px -1px;
            }
            .icon_date{
                background-position: -340px -1px;
            }
            .icon_address{
                background-position: -440px -1px;
            }
          }
          .pagination{
            width: 100%;
            margin-top: 40px;
            margin-bottom: 60px;
            .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
              height: 42px;
              width: 42px;
              line-height: 42px;
              background: #fff;
              color:#b0bac5;
              font-size: 16px;
              
            }
            .el-pagination button, .el-pagination span:not([class*=suffix]),.el-pagination__editor.el-input .el-input__inner{
              height: 42px;
              line-height: 42px;
              font-size: 16px;
            }

            .el-pager li.active {
              background-color: #409EFF !important;
              cursor: default;
              color:#fff !important;
            }
          }
        }
      }
    }
}
</style>


