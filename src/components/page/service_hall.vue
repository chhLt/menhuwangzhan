<template>
  <div id="servicehall">
      <!-- header -->
      <curheader></curheader>
      <div class="hallCenterWrap">
          <div class="hallCenter">
            <ul class="quick_nav">
              <li>
                <router-link to="/patentClass">
                  <i class="find_patent"></i>
                  <span>我要发布专利</span>
                </router-link>
              </li>
              <li>
                <router-link to="/patentList">
                  <i class="rel_demand"></i>
                  <span>我要查找专利</span>
                </router-link>
              </li>
              <li>
                <router-link to="/releaseDemand">
                  <i class="find_projects"></i>
                  <span>我要发布需求</span>
                </router-link>
              </li>
              <li>
                <router-link to="/demandList">
                  <i class="rel_projects"></i>
                  <span>我要查找需求</span>
                </router-link>
              </li>
            </ul>
          </div>
      </div>
      <!-- bootom -->
      <bottom></bottom>
  </div>
</template>
<script>
import http from "../config/request";
export default {
  data () {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    
  },
  components:{
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  #servicehall{
    .hallCenterWrap{
        width:100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .hallCenter{
          width:1230px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top:60px;
          .quick_nav{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding:90px 0;
            li{
              margin-left: 96px;
              margin-bottom:60px;
              a{
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 210px;
                height: 210px;
                padding-top: 45px;
                padding-bottom:45px;
                justify-content: space-between;
                box-shadow:5px 2px 20px rgba(0, 0, 0, 0.1);
                i{
                  width: 82px;
                  height:82px;
                  display: inline-block;
                  background-image: url('../../assets/images/icon.png');
                }
                .rel_projects{background-position: -270px -158px;}
                .rel_demand{background-position: -360px -158px;}
                .find_projects{background-position: 0px -158px;}
                .find_patent{background-position: -90px -158px;}
                .find_financing{background-position: -180px -158px;}
                span{
                  font-size: 16px;
                  color: #313541;
                }
              }
            }
          }
        }
      }
    }
</style>
