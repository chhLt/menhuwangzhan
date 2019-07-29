<template>
    <div id="Aboutour">
        <div class="aboutOur">
            <curheader></curheader>
            <div class="banner">
                <img src="../../assets/images/about_our.jpg" alt="">
            </div>
            <div class="aboutWarp">
                <div class="aboutBox">
                    <div class="aboutNav">
                        <ul>
                             <li>
                                <router-link to="/aboutour/profile">公司简介</router-link>
                            </li>
                            <li>
                                <router-link to="/aboutour/apply">展厅申请</router-link>
                            </li>
                            <li>
                                <router-link to="/aboutour/contact">联系我们</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="aboutContent">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <bottom></bottom>
        <starboard></starboard>
    </div>
</template>
<script>
export default {
  data () {
      return {
          
      }
  },
  updated () {
      
  },
  methods:{
    
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
.aboutOur{
    width: 100%;
    height: auto;
    background-color: @bodyBackground;
    display: flex;
    flex-direction: column;
    .banner{
        min-width: 1230px;
        img{
            width: 100%;
            height: 240px;
        }
    }
    .aboutWarp{
        width: 100%;
        display: flex;
        justify-content: center;
        .aboutBox{
            width: 1230px;
            height: auto;
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            margin-bottom:40px;
            .aboutNav{
                width: 285px;
                height:180px;
                border-radius: 4px;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                overflow: hidden;
               li{
                   a{
                        display: inline-block;
                        width: 100%;
                        height: 60px;
                        line-height: 60px;
                        padding-left: 30px;
                        cursor: pointer;
                        font-size:15px;
                        color: #16181e;
                   }
                   .router-link-active{
                        background: @lightThemeColor;
                        color:#fff;
                    }
                }
                
            }
            .aboutContent{
                width: 915px;
                margin-left: 30px;
                background: #fff;
            }
        }
    }
}
</style>

