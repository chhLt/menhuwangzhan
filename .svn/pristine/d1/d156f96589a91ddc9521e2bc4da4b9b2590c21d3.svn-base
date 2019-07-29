<template>
    <div class="resetpassword">
         <div class="reset">
             <div class="Info">
                 <el-steps :active="active" align-center>
                    <el-step title="验证信息" description=""></el-step>
                    <el-step title="重置密码" description=""></el-step>
                    <el-step title="设置成功" description=""></el-step>
                </el-steps>
                <div v-show="one">
                    <div class="inputInfo">
                        <span class="title">手机号</span>
                        <el-input placeholder="请输入手机号" class="phone" v-model="phone" clearable></el-input>
                    </div>
                    <div class="inputInfo inputCode">
                        <span class="title">验证码</span>
                        <el-input placeholder="请输入验证码" v-model="code" class="code" clearable></el-input>
                        <el-button disabled  class="repeat public" v-show="repeatcode" v-model="time">重发({{time}}s)</el-button>
                        <el-button class="codeButton public" type="primary" @click="checkUserName" v-show="sendCode" v-model="words">{{words}}</el-button>
                    </div> 
                </div>
                <div v-show="two">
                    <div class="inputInfo">
                        <span class="title">重置密码</span>
                        <el-input placeholder="请输入密码" type="password" class="phone" v-model="password" clearable></el-input>
                    </div>
                     <div class="inputInfo inputCode">
                        <span class="title">再次输入</span>
                        <el-input placeholder="请再次输入密码" type="password" class="phone" v-model="Reinput" clearable></el-input>
                    </div>
                </div>
                <div v-show="three">
                    <div class="setSuccess">
                        <div class="item">
                            <i class="icon success"></i>
                        </div>
                        <div class="prompt">
                            <p>密码设置成功</p>
                            <p v-model="countdown">自动跳转：{{countdown}}s</p>
                        </div>
                    </div>
                </div>
                <div class="inputCode">
                    <el-button class="enroll" @click="getNext" type="primary" v-show="next">下一步</el-button>
                    <el-button class="enroll" @click="getNextTwo" type="primary" v-show="nextTwo">下一步</el-button>
                    <router-link to="/">
                        <el-button class="enroll" type="primary" @click="ensure" v-show="three">确定</el-button>
                    </router-link>
                </div>
             </div>
         </div> 
    </div>
</template>
<script>
import http from "../../config/request";
export default {
  data() {
    return {
      active: 1, //步骤条显示第几步
      phone: "", //手机号
      code: "", //验证码
      password: "", //密码
      Reinput: "", //重置密码
      repeatcode: false, //倒计时显示
      sendCode: true, //重新发送显示
      time: 59, //倒计时秒数
      words: "发送验证码", //验证码按钮内容
      one: true, //第一步内容
      two: false, //第二步内容
      three: false, //第三步内容
      next: true, //第一个下一步按钮
      countdown: 5, //第三步内容倒计时秒数
      nextTwo: false, //第二个下一步按钮
      timers: null, //倒计时名称
      backtime: null //密码修改成功倒计时
    };
  },
    updated() {},
    methods: {
        //获取验证码的同时验证手机号码是否已经存在
    checkUserName(){
        if (this.phone.length == 0) {
            this.$message({
                message: "手机号不能为空",
                type: "warning"
            });
            return false;
        } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
            this.$message({
                message: "请输入正确的手机号",
                type: "warning"
            });
            return false;
        }
        let parame = {loginName:this.phone}
        http.Request("szipee/user!userRepeat.action", "POST", null, parame).then(res => {
            if(res.state == "success"){
                this.$message({message: "该用户不存在,请检查输入是否有误！",type: "warning"});
            }else{
                this.getCode()
            }
        })
    },
    //获取验证码
    getCode() {
      this.sendCode = false;
      this.repeatcode = true;
      let data = {phone: this.phone};
      http.Request("szipee/user!phoneVerifyCode.action", "POST", null, data).then(res => {
          if (res.state == "success") {
            this.$notify({
              title: "提示",
              message: "验证码为：" + res.info,
              duration: 10000
            });
            this.timers = setInterval(()=> {
              this.time = parseInt(this.time) - 1;
              if (this.time == 0) {
                clearInterval(timers);
                this.words = "重新发送";
                this.sendCode = true;
                this.repeatcode = false;
                this.time = 59;
              }
            }, 1000);
          } else {
            this.words = "重新发送";
            this.sendCode = true;
            this.repeatcode = false;
            this.time = 59;
            this.$message.error("获取验证码失败，请稍再试~~");
          }
        });
    },
    //第一个下一步
    getNext() {
      if (this.active == 1) {
        //验证手机号
        clearInterval(this.timers);
        if (this.phone.length == 0) {
          this.$message({
            message: "手机号不能为空",
            type: "warning"
          });
          return false;
        } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
          this.$message({
            message: "请输入正确的手机号",
            type: "warning"
          });
          return false;
        }
        //验证验证码
        if (this.code.length == 0) {
          this.$message({
            message: "验证码不能为空",
            type: "warning"
          });
          return false;
        } else if (this.code.length != 4) {
          this.$message({
            message: "验证码输入有误",
            type: "warning"
          });
          return false;
        }
        var data = {
          phone: this.phone,
          phoneVerifyCode: this.code
        };
        http.Request("szipee/user!retrievePwd.action", "POST", null, data).then(res => {
            if (res.state == "success") {
              this.active = parseInt(this.active) + 1;
              this.one = false;
              this.two = true;
              this.next = false;
              this.nextTwo = true;
              this.$message({
                message: res.info,
                type: "success"
              });
            } else {
              this.$message({
                message: res.info,
                type: "warning"
              });
            }
          });
      }
      if (this.active > 3) {
            this.active = 1;
      }
    },
    //第二个下一步
    getNextTwo() {
      if (this.active == 2) {
        var reg = /^[\w]{6,12}$/;
        if (this.password.length == 0) {
          this.$message({
            message: "密码不能为空",
            type: "warning"
          });
          return false;
        } else if (!reg.test(this.password)) {
          this.$message({
            message: "密码需6-12，由数字、字母、下划线组成",
            type: "warning"
          });
          return false;
        }
        if (this.password != this.Reinput) {
          this.$message({
            message: "两次密码输入不一致",
            type: "warning"
          });
          return false;
        }
        var data = {
            phone: this.phone,
            password: this.password
        };
        http.Request("szipee/user!retrieveUpdatePwd.action", "POST", null, data).then(res => {
            if (res.state == "success") {
              this.$message({
                message: "密码重置成功",
                type: "success"
              });
              this.active = parseInt(this.active) + 1;
              this.two = false;
              this.nextTwo = false;
              this.three = true;
              this.getCountdown();
            } else {
              this.$message({
                message: res.info,
                type: "warning"
              });
            }
          });
      }
    },
    ensure(){
        this.$router.push({ path: "/" });
    },
    getCountdown() {
      this.backtime = setInterval(()=> {
        this.countdown = parseInt(this.countdown) - 1;
        if (this.countdown == 0) {
            this.$router.push({ path: "/" }); 
        }
      }, 1000);
    }
  }
};
</script>
<style lang="less" ref="reference/less">
@import "../../../assets/less/index.less";
.resetpassword {
  height: auto;
  display: flex;
  flex-direction: column;
  .reset {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    .Info {
      width: 1230px;
      height: 520px;
      margin-top: 37px;
      margin-bottom: 80px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-steps {
        width: 800px;
        margin-top: 40px;
        .el-step__title.is-process {
          color: #b0bac5;
          font-weight: 500;
        }
        .el-step__head.is-process {
          color: #b0bac5;
          border-color: #b0bac5;
        }
      }
      .inputInfo {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        .title {
          display: inline-block;
          width: 120px;
          height: 42px;
          line-height: 42px;
          text-align: center;
        }
        .el-input__inner {
          border: 1px solid #dfe6ee;
          border-radius: 4px;
          height: 42px;
        }
        .phone {
          width: 285px;
        }
        .code {
          width: 170px;
        }
        .codeButton {
          width: 100px;
          height: 42px;
          background-color: #fff;
          color: @lightThemeColor;
          border: 1px solid @lightThemeColor;
          span {
            width: 100px;
            display: inline-block;
            position: relative;
            right: 21px;
            text-align: center;
          }
        }
        .repeat {
          width: 100px;
          height: 42px;
          margin-left: 15px;
          background-color: #def6ee;
          color: #8091a5;
          border: 1px solid #def6ee;
          span {
            width: 100px;
            display: inline-block;
            position: relative;
            right: 21px;
            text-align: center;
          }
        }
      }
      .setSuccess {
        margin-top: 40px;
        width: 180px;
        height: 80px;
        display: flex;
        flex-direction: row;
        margin-right: 100px;
        .item {
          width: 50px;
          height: 50px;
          .icon {
            display: inline-block;
            width: 48px;
            height: 48px;
            background-image: url("../../../assets/images/icon.png");
            background-repeat: no-repeat;
          }
          .success {
            background-position: -260px -80px;
          } //客服
        }
        .prompt {
          margin-left: 20px;
          p {
            &:nth-child(1) {
              height: 50px;
              line-height: 50px;
              font-size: 18px;
            }
            &:nth-child(2) {
              font-size: 14px;
              color: #fb9d84;
            }
          }
        }
      }
      .inputCode {
        margin-top: 20px;
        .enroll {
          width: 170px;
          margin-left: 13px;
        }
      }
      .el-button {
        background-color: @lightThemeColor;
        border-color: @lightThemeColor;
      }
    }
  }
}
</style>


