<template>
    <div id="download">
        <div class="download">
            <curheader></curheader>
            <div class="banner">
                <img src="../../assets/images/about_our.jpg" alt="">
            </div>
            <div class="downloadWarp">
                <div class="downloadBox">
                    <div class="downloadNav">
                        <ul>
                            <li>
                                <router-link to="/downloadCenter/dataDownload">资料下载</router-link>
                            </li>
                            <li>
                                <router-link to="/downloadCenter/tableDownload">表格下载</router-link>
                            </li>
                             <li>
                                <router-link to="/downloadCenter/patentDownload">专利文件下载</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="downloadContent">
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
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
};
</script>
<style lang="less" ref="reference/less">
@import "../../assets/less/index.less";
.download {
  width: 100%;
  height: auto;
  background-color: @bodyBackground;
  display: flex;
  flex-direction: column;
  .banner {
    min-width: 1230px;
    img {
      width: 100%;
      height: 240px;
    }
  }
  .downloadWarp {
    width: 100%;
    display: flex;
    justify-content: center;
    .downloadBox {
      width: 1230px;
      height: auto;
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 40px;
      .downloadNav {
        width: 285px;
        height:180px;
        border-radius: 4px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        li {
          a {
            display: inline-block;
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 30px;
            cursor: pointer;
            font-size: 15px;
            color: #16181e;
          }
          .router-link-active {
            background: @lightThemeColor;
            color: #fff;
          }
        }
      }
      .downloadContent {
        width: 915px;
        margin-left: 30px;
        background: #fff;
        .profile,
        .download_center {
          padding: 40px 60px 60px;
          .title {
            font-size: 20px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            margin-bottom: 25px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>

