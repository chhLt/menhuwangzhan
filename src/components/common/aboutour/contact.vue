<template>
    <div id="servicehall">
        <div id="contact">
            <div class="profile">
                <p class="title">联系我们</p>
                <iframe width='795' height='400' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://f.amap.com/1GQzB_0D64joY'></iframe>'
                <ul class="list-ol">
                    <li>
                        <img src="../../../assets/images/tel.png">
                        <p>
                            咨询热线<br> 0755-26470311
                            <br> 周一 ~ 周五 09:00-18:00
                        </p>
                        <p>&nbsp;</p>
                    </li>
                    <li>
                        <img src="../../../assets/images/headset.png">
                        <p>在线客服</p>
                        <a target="_blank" class="btn-hegii" href="http://wpa.qq.com/msgrd?v=3&uin=1827776842&site=qq&menu=yes">立即咨询</a>
                    </li>
                    <li>
                        <img src="../../../assets/images/coordinate1.png">
                        <p>
                            地址 <br>
                            南山区科技北二路<br>
                            航天微电机大厦D座202
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {}
};
</script>
<style lang="less" rel="stylesheet/less">
#servicehall {
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
  .profile_text {
    p {
      text-indent: 28px;
      font-size: 14px;
      color: #16181e;
      line-height: 36px;
    }
    .profile_img {
      margin: 40px 0;
    }
  }
  .list-ol {
    width: 100%;
    display: flex;
    margin-top: 25px;
    flex-direction: row;
    li {
      flex: 1;
      text-align: center;
      &:nth-child(2n + 1) {
        border-left: 1px dashed #c2c2c2;
        border-right: 1px dashed #c2c2c2;
      }
      p {
        color: #1a355e;
        font-size: 14px;
        margin-top: 20px;
        line-height: 30px;
        margin-bottom: 0;
      }
      .btn-hegii {
        margin-top: 5px;
        background-color: #1a355e;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        letter-spacing: 2px;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}
</style>
