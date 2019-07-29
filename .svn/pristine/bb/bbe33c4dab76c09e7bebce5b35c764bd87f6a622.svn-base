<template>
    <div id="login">
        <!-- 已登陆 -->
        <router-link class="already_login" v-if="isLogin" to="/userCenter">
            <div class="portrait">
                <img alt="" v-bind:src="output.portrait|imgUrlFilter">
            </div>
            <span class="userName">{{output.nickName}}</span>
            <span class="userPhone">{{output.phone}}</span>
        </router-link>
        <!-- 未登录 -->
        <div class="not_login" v-else>
            <h2>登录</h2>
            <ul class="form">
                <li>
                    <el-input placeholder="请输入手机号码" v-model="input.userName" @blur="updateVcode" clearable></el-input>
                </li>
                <li>
                    <el-input placeholder="请输入密码" v-model="input.password" type="password" clearable @keyup.enter.native="login"></el-input>
                </li>
                <li class="vCode_wrap">
                    <div class="vCode_input">
                        <el-input placeholder="请输入验证码" v-model="input.vCode" clearable @keyup.enter.native="login"></el-input>
                    </div>
                    <div class="vCode_img">
                        <img v-bind:src="imgUrl" alt="" v-on:click="updateVcode">
                    </div>
                </li>
                <li class="loginBnt">
                    <span class="error_Message">{{errMsg}}</span>
                    <el-button type="primary" v-on:click="login">登录</el-button>
                </li>
            </ul>
            <div class="textBtn">
                <router-link to="/selectRegister">
                    <el-button type="text">免费注册</el-button>
                </router-link>
                <router-link to="/resetPassword">
                    <el-button type="text">找回密码</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { BaseUrl } from "../../config/constUrl.js";
import http from "../../config/request";
export default {
  data() {
    return {
      input: {
        //输入
        userName: "", //用户名
        password: "", //用户密码
        vCode: "" //验证码
      },
      output: {
        //输出
        portrait:'', //头像
        userName: "", //用户名
        phone: "", //电话号码
        nickName: "" //昵称
      },
      isLogin: false, //false--未登录 ture---已登录
      errMsg: "", //错误提示
      baseUrl: BaseUrl + "szipee/user!VerifyCode.action", //验证码地址
      imgUrl: BaseUrl + "szipee/user!VerifyCode.action"
    };
  },
  created() {
    //这里可以取当前路径判断是否是首页调用
    this.getUserInfo();
  },
  methods: {
    //登陆
    login() {
      let params = {
        loginName: this.input.userName,
        password: this.input.password,
        verifyCode: this.input.vCode
      };
      if (params.loginName == "" || params.password == "") {
        this.errMsg = "用户名或密码不能为空!";
      } else if (params.verifyCode == "") {
        this.errMsg = "请输入验证码!";
      } else {
        http.Request("szipee/user!login.action", "POST", null, params).then(res => {
            if (res.state == "success") {
              this.isLogin = true;
              sessionStorage.userInfo = JSON.stringify(res); //存储用户信息
              this.output.portrait = res.urls;
              this.output.userName = res.loginName;
              this.output.phone = res.phone;
              this.output.nickName = res.nickName;
              this.$notify({
                title: "提示",
                message: res.info,
                type: "success"
              });
              //当前不为首页就跳转首页
              if (this.$route.path != "/") {
                this.$router.push({ path: "/" });
              }
            } else {
              this.errMsg = res.info;
            }
          });
      }
    },
    //初始化调用用户信息
    getUserInfo() {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo) {
        this.isLogin = true;
        this.output.userName = userInfo.loginName;
        http.Request("szipee/user!queryCust.action", "post", null, {loginName: userInfo.loginName}).then(res => {
            this.output.nickName = res.nickName; //登录名
            this.output.phone = res.phone; //手机号
            this.output.portrait = res.urls; //头像
        });
      }
    },
    updateVcode() {
      this.imgUrl = this.baseUrl +"?" +"num=" +Math.floor(Math.random() * 100 + 1) +1 +"&loginName=" +this.input.userName;
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
#login {
  width: 270px;
  height: 330px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    padding: 20px 0;
    text-align: center;
    font-size: 18px;
  }
  .form {
    width: 200px;
    li {
      margin-bottom: 15px;
      .el-button {
        padding: 12px 85px;
      }
    }
    //自定义验证码框
    .vCode_wrap {
      // position: relative;
      display: flex;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      margin-bottom: 0px;

      .vCode_input {
        width: 140px;
        .el-input__inner {
          border: none;
        }
      }
      .vCode_img {
        width: 60px;
        height: 40px;
        font-size: 14px;
        display: flex;
        cursor: pointer;
        img {
          width: 70px;
          height: 40px;
        }
      }
    }
    .loginBnt {
      margin-top: 30px;
      margin-bottom: 0px;
      position: relative;
      .error_Message {
        position: absolute;
        top: -30px;
        text-align: center;
        line-height: 30px;
        color: #e34c4c;
        width: 100%;
        font-size: 14px;
      }
    }
  }
  .textBtn {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  .already_login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    .portrait {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      img{
          width: 100%;
          height: 100%;
      }
    }
    .userName {
      font-size: 24px;
      color: #16181e;
      text-align: center;
      margin-bottom: 20px;
    }
    .userPhone {
      font-size: 14px;
      color: #667587;
      text-align: center;
    }
  }
}
</style>
