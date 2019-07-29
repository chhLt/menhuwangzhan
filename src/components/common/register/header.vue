<template>
    <div id="register">
        <div class="headerWarp">
            <div class="header">
                <router-link class="logo" to="/"><img src="./logo.png" alt=""></router-link>
                <div class="login" v-show="login">
                    <el-button type="text" class="login_button" @click="dialogVisible = true">登录</el-button>
                </div>
                <div class="resetlogin" v-show="resetlogin" @click="dialogVisible = true">
                    <span>登录</span>
                </div>
            </div>
        </div>
        <nav class="navWrap">
            <ul class="nav">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/serviceHall">服务大厅</router-link></li>
                <li><router-link to="/bargainHall">交易大厅</router-link></li>
                <li><router-link to="/infoMedia">资讯大厅</router-link></li>
                <li><router-link to="/downloadCenter/dataDownload">下载中心</router-link></li>
                <li><router-link to="/aboutour/profile">关于我们</router-link></li>
            </ul>
        </nav>
        <el-dialog title="" :visible.sync="dialogVisible" width="310px" :before-close="handleClose">
            <login></login>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      resetlogin: false,
      login: false
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "reset") {
        console.log(1);
      } else if (to.name === "register") {
        console.log(2);
      }
    }
  },
  //根据不同的路径名改变按钮的展示
  created() {
    var local = window.location.href;
    var router_name = local.split("/").pop();
    if (router_name == "reset") {
      this.resetlogin = true;
    } else if (
      router_name == "selectRegister" ||
      router_name == "paregister" ||
      router_name == "enregister"
    ) {
      this.login = true;
    }
  },
  
  methods: {
    handleClose(done) {
      done();
    }
  },
  components: {
    login: resolve => {require(['../login/login'], resolve)},
    
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/less/index.less";
#register {
  .headerWarp {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    .header {
      width: 1230px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .login {
        width: 75px;
        height: 100px;
        display: flex;
        align-items: center;
        .login_button {
          width: 95px;
          height: 32px;
          line-height: 9px;
          background-color: #fff;
          border: 1px solid @darkThemeColor;
          color: @darkThemeColor;
          font-weight: 600 !important;
        }
      }
      .resetlogin {
        width: 175px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          padding-left: 23px;
          color: @lightThemeColor;
          cursor: pointer;
        }
      }
    }
  }
  .el-dialog__body {
    padding: 20px 20px;
  }
  .navWrap{
        width:100%;
        height:42px;
        background: @lightThemeColor;
        display:flex;
        justify-content: center;
        .nav{
            width: 1230px;
            height:42px;
            li{
                display:inline-block;
                a{
                    display: inline-block;
                    height: 42px;
                    line-height: 42px;
                    width: 105px;
                    text-align:center;
                    color:#fff;
                }
            }
        }
    }
}
</style>

