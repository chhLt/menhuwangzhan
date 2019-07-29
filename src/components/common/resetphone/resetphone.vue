<template>
    <div id="resetpassword">
         <div class="reset">
             <div class="Info">
                 <el-steps :active="active" align-center>
                    <el-step title="验证信息" description=""></el-step>
                    <el-step title="新手机号" description=""></el-step>
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
                        <el-button class="codeButton public" type="primary" @click="getCode" v-show="sendCode" v-model="words">{{words}}</el-button>
                    </div> 
                </div>
                <div v-show="two">
                    <div class="inputInfo">
                        <span class="title">新手机号</span>
                        <el-input placeholder="请输入手机号" class="phone" v-model="newphone" clearable></el-input>
                    </div>
                    <div class="inputInfo inputCode">
                        <span class="title">验证码</span>
                        <el-input placeholder="请输入验证码" v-model="newcode" class="code" clearable></el-input>
                        <el-button disabled  class="repeat public" v-show="repeatnewcode" v-model="newtime">重发({{newtime}}s)</el-button>
                        <el-button class="codeButton public" type="primary" @click="getnewCode" v-show="sendnewCode" v-model="newwords">{{newwords}}</el-button>
                    </div> 
                </div>
                <div class="setSuccess" v-show="three">
                    <div class="item">
                        <i class="icon success"></i>
                    </div>
                    <div class="prompt">
                        <p>手机号设置成功</p>
                        <p v-model="countdown">自动跳转：{{countdown}}s</p>
                    </div>
                </div>
                <div class="inputCode">
                    <el-button class="enroll" @click="getNext" type="primary" v-show="next">下一步</el-button>
                     <el-button class="enroll" @click="getNextTwo" type="primary" v-show="nextTwo">下一步</el-button>
                    <router-link to="/">
                        <el-button class="enroll" type="primary" v-show="three">确定</el-button>
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
      newphone:"",//新手机号
      newcode:"",//新验证码
      repeatcode: false, //倒计时显示
      sendCode: true, //重新发送显示
      repeatnewcode: false, //新倒计时显示
      sendnewCode: true, //新重新发送显示
      time: 59, //倒计时秒数
      newtime:59,//新手机号验证码
      words: "发送验证码", //验证码按钮内容
      newwords: "发送验证码", //验证码按钮内容
      one: true, //第一步内容
      two: false, //第二步内容
      three: false, //第三步内容
      next: true, //第一个下一步按钮
      countdown: 5, //第三步内容倒计时秒数
      nextTwo: false, //第二个下一步按钮
      timers: null, //倒计时名称
      newtimers: null, //倒计时名称
      backtime: null //密码修改成功倒计时
    };
  },
  created() {
      
  },
  methods: {
        //获取验证码
        getCode() {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            let userPhone = userInfo.phone;
            var _this = this;
            //验证手机号
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
            }else if(this.phone != userPhone){
            this.$message({
                message: "请输入符合当前用户信息的手机号码",
                type: "warning"
            });
            return false;
            }
            this.sendCode = false;
            this.repeatcode = true;
            var data = {phone: this.phone};
            http.Request("szipee/user!phoneVerifyCode.action", "post", null, data).then(res => {
                if (res.state == "success") {
                    this.$notify({
                    title: "提示",
                    message: "验证码为：" + res.info,
                    duration: 10000
                    });
                    this.timers = setInterval(function() {
                    _this.time = parseInt(_this.time) - 1;
                    if (_this.time == 0) {
                        clearInterval(_this.timers);
                        _this.words = "重新发送";
                        _this.sendCode = true;
                        _this.repeatcode = false;
                        _this.time = 59;
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
        //新手机号获取验证码
        getnewCode(){
            var _this=this;
            //验证手机号
            if (this.newphone.length == 0) {
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
        this.sendnewCode = false;
        this.repeatnewcode = true;
        var data = {
            phone: this.phone
        };
        http.Request("szipee/user!phoneVerifyCode.action", "post", null, data)
            .then(res => {
            if (res.state == "success") {
                this.$notify({
                title: "提示",
                message: "验证码为：" + res.info,
                duration: 10000
                });
                this.newtimers = setInterval(function() {
                _this.newtime = parseInt(_this.newtime) - 1;
                if (_this.time == 0) {
                    clearInterval(newtimers);
                    _this.newwords = "重新发送";
                    _this.sendnewCode = true;
                    _this.repeatnewcode = false;
                    _this.newtime = 59;
                }
                }, 1000);
            } else {
                this.newwords = "重新发送";
                this.sendnewCode = true;
                this.repeatnewcode = false;
                this.newtime = 59;
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
            http.Request("szipee/user!retrievePwd.action", "post", null, data).then(res => {
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
        getCountdown() {
            var backtime = setInterval(()=> {
            this.countdown = parseInt(this.countdown) - 1;
            if (this.countdown == 0) {
                location.reload()
            }
            }, 1000);
        },
        //第二个下一步
        getNextTwo() {
            clearInterval(this.newtimers);
            if (this.newphone.length == 0) {
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
            if (this.newcode.length == 0) {
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
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            var data = {
                phone: this.newphone,
                phoneVCode: this.newcode,
                loginName:userInfo.loginName
            };
            http.Request("szipee/user!updateCust.action", "post", null, data).then(res => {
                if (res.state == "success") {
                this.$message({
                    message: "手机号码修改成功",
                    type: "success"
                });
                sessionStorage.userInfo = JSON.stringify(res);
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
    }
}
</script>
<style lang="less" ref="reference/less">
@import "../../../assets/less/index.less";
#resetpassword {
  background: #f4faf7;
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
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 80px;
      .el-steps {
        width: 800px;
        margin-top: 60px;
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
        height: 80px;
        display: flex;
        flex-direction: row;
        align-content: center;
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


