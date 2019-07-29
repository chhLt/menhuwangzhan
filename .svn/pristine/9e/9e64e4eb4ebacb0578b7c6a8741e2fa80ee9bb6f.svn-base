<template>
    <div id="userCenter">
        <curheader></curheader>
        <div class="user_cnter">
            <div class="user_banner">
                <img src="../../assets/images/user_center.jpg" alt="">
            </div>
            <!-- 中间用户信息显示    -->
            <div class="user_wrap">
                <div class="user_wrap">
                    <div class="userBox">
                        <div class="user_pic">
                            <div class="pic_bg">
                                <img :src="output.avatarImg|imgUrlFilter" alt="">
                            </div>
                        </div>
                        <div class="user_details">
							<p>{{output.nickName}}</p>
							<p>{{output.phone}}</p>
						</div>
                    </div>
                </div>
            </div>
            <!-- 导航 -->
            <div class="user_tab">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的发布" name="1">
                        <myrelease></myrelease>
                    </el-tab-pane>
                    <el-tab-pane label="我的收藏" name="2">
                        <mycollection></mycollection>
                    </el-tab-pane>
                    <el-tab-pane label="个人设置  "name="3">
                        <userset v-bind:message="activeName" v-on:userInfo="userInfo"></userset>
                    </el-tab-pane>
                    <el-tab-pane label="展厅申请" name="4" v-if="status">
                        <applyExhibition></applyExhibition>
                    </el-tab-pane>
                </el-tabs>
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
        activeName: "1",
        status:false,
        output: {
            nickName: "",
            phone: "",
            avatarImg: "",
            loginName:""
        },
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    //获取子组件会传数据更新用户信息  
    userInfo(userInfo){
        this.output.nickName = userInfo.nickName; //昵称
        this.output.phone = userInfo.phone; //手机号
        this.output.avatarImg = userInfo.urls; //头像
        if(userInfo.loginName=="18571926665"||userInfo.loginName=="admin"){
            this.status=true;
        }
    },
    //初始化调用用户信息
    getUserInfo(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            http.Request("szipee/user!queryCust.action", "post", null, {loginName: userInfo.loginName}).then(res => {
                this.output.nickName = res.nickName; //昵称
                this.output.phone = res.phone; //手机号
                this.output.avatarImg = res.urls; //头像
                if(res.loginName=="18571926665"||userInfo.loginName=="admin"){
                   this.status=true;
                }
            });
        }else{
            this.$message({message: '请先登录！！',type: 'warning'});
            this.$router.push({path: "/"});
        }
    },
    // //切换tab事件
    handleClick(tab, event) {},
  },
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    myrelease: resolve => {require(['../common/userCenter/my_release'], resolve)},
    mycollection: resolve => {require(['../common/userCenter/my_collection'], resolve)},
    userset: resolve => {require(['../common/userCenter/user_set'], resolve)},
    applyExhibition: resolve => {require(['../common/userCenter/apply_exhibition'], resolve)},
  }
};
</script>
<style lang="less" ref="reference/less">
@import "../../assets/less/index.less";
//主标题颜色
@maintitle: #16181e;
@subtitle: #8091a5;
#userCenter {
  .user_cnter {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: @bodyBackground;
    .user_banner {
      min-width: 1230px;
      img {
        width: 100%;
        height: 360px;
      }
    }
    .user_wrap {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .user_wrap {
        width: 1230px;
        background: red;
        z-index: 999;
        position: absolute;
        top: 0;
        .userBox {
          position: absolute;
          width: 180px;
          height: 220px;
          top: 170px;
          right: 45%;
          margin-top: -458px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          .user_pic {
            display: flex;
            justify-content: center;
            .pic_bg {
              width: 138px;
              height: 138px;
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.25);
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                border: 1px solid #eee;
                border-radius: 50%;
                width: 125px;
                height: 125px;
              }
            }
          }
          .user_details {
            margin-top: 25px;
            text-align: center;
            p {
              &:nth-child(1) {
                height: 36px;
                line-height: 36px;
                font-size: 22px;
                font-weight: bold;
              }
              &:nth-child(2) {
                font-size: 14px;
                font-weight: bold;
                color: #748397;
              }
            }
          }
        }
      }
    }
    .user_tab {
      display: flex;
      justify-content: center;
      width: 100%;
      .el-tabs {
        width: 100%;
        .el-tabs__header {
          background-color: #fff;
          display: flex;
          justify-content: center;
          height: 60px;
          .el-tabs__nav-wrap::after {
            background-color: #fff;
          }
          .el-tabs__nav {
            height: 60px;
            line-height: 60px;
            .el-tabs__item {
              font-size: 16px;
            }
          }
        }
        .el-tabs__content {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 60px;
          .enterprise_info {
            background: #f4f7fa;
            padding-top: 30px;
          }
          .el-tab-pane {
            width: 1230px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .content {
              display: flex;
              flex-direction: column;
              .release_title {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 60px;
                background: #fff;
                border-bottom: 1px solid #dfe6ee;
                .release_name {
                  height: 60px;
                  line-height: 60px;
                  color: #16181e;
                  padding-left: 30px;
                  .bule{
                    color: #0099fa;
                  }
                  span{
                    cursor: pointer;
                  }
                }
                .release_icon {
                  width: 100px;
                  height: 42px;
                  margin-top: 9px;
                  margin-right: 30px;
                  span {
                    display: inline-block;
                    width: 42px;
                    height: 42px;
                    border: 1px solid #e6ebf2;
                    border-radius: 4px;
                    cursor: pointer;
                    &:nth-child(1) {
                      margin-right: 10px;
                    }
                    i {
                      margin: 8.5px 8.5px;
                      .item_icon(20px);
                    }
                  }
                }
              }
            }

            .tab_info {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              min-height: 177px;
              padding-bottom: 40px;
              .tab_details {
                width: 1080px;
                border-bottom: 1px solid #dfe6ee;
                display: flex;
                flex-direction: row;
                padding: 30px 0;
                &:last-child{
                    border:none;
                }
                .tab_img {
                  width: 210px;
                  height: 117px;
                  margin-right: 30px;
                  border: 1px solid #e6ebf2;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .tab_con_01,.tab_con_02,.tab_con_03{
                  width: 315px;
                  height: 117px;
                  p {
                    height: 39px;
                    line-height: 39px;
                    color: #667587;
                    text-overflow: ellipsis;
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 14px;
                    &:nth-child(1) {
                      span {
                        color: #16181e;
                      }
                    }
                    &:nth-child(2) {
                      span {
                        color: #0099fa;
                      }
                    }
                    &:nth-child(3) {
                      span {
                        color: #3f4a56;
                      }
                    }
                  }
                }
                .tab_button {
                  width: 288px;
                  height: 117px;
                  display: flex;
                  flex-direction: row-reverse;
                  align-items: center;
                  .delete {
                    background-color: #fff;
                    border: 1px solid #0099fa;
                    color: #0099fa;
                    width: 106px;
                    height: 48px;
                  }
                  .end {
                    width: 106px;
                    height: 48px;
                    background-color: #fff;
                    border: 1px solid #91a0b1;
                    color: #91a0b1;
                  }
                }
              }
            }
            .collection {
              ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap; //换行
                margin-left: 105px;
                margin-top: 30px;
                width: 1103px;
                li {
                  width: 285px;
                  height: 310px;
                  border: 1px solid #dfe6ee;
                  margin-right: 82px;
                  margin-bottom: 30px;
                  display: flex;
                  flex-direction: column;
                  overflow: hidden;
                  border-radius: 4px;
                  .mainImage {
                    width: 100%;
                    height: 160px;
                    position: relative;
                    img {
                      width: 285px;
                      height: 160px;
                    }
                    em {
                      width: 48px;
                      height: 48px;
                      position: absolute;
                      left: 0;
                      top: 0;
                      background-image: url("../../assets/images/icon.png");
                      background-repeat: no-repeat;
                    }
                    .patentFlag {
                      background-position: -700px 0px;
                    }
                    .demandFlag {
                      background-position: -640px -60px;
                    }
                  }
                  .mainTitle {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    span {
                      color: @maintitle;
                      font-size: 16px;
                      margin-left: 10px;
                      font-weight: 600;
                      letter-spacing: 1px;
                    }
                    i {
                      .item_icon(20px);
                      display: inline-block;
                      margin-right: 10px;
                      cursor: pointer;
                    }
                  }
                  .subTitle {
                    margin-top: 10px;
                    color: @subtitle;
                    font-size: 14px;
                    margin-left: 10px;
                    p {
                      text-overflow: ellipsis;
                      word-break: keep-all;
                      white-space: nowrap;
                      overflow: hidden;
                    }
                  }
                  .price {
                    margin: 20px 0;
                    width: 100%;
                    p {
                      width: 100%;
                      text-align: center;
                      color: #0099fa;
                      font-size: 18px;
                    }
                  }
                  .bottomView {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding: 0 10px;
                    .date {
                      display: flex;
                      flex-direction: row;
                      width: 50%;
                      span {
                        color: #3f4a56;
                        font-size: 14px;
                        display: inline-block;
                        line-height: 20px;
                        margin-left: 3px;
                      }
                    }
                    .address {
                      width: 50%;
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-end;
                      span {
                        color: #3f4a56;
                        font-size: 14px;
                        display: flex;
                        justify-content: flex-end;
                        align-content: center;
                        text-overflow: ellipsis;
                        word-break: keep-all;
                        white-space: nowrap;
                        overflow: hidden;
                        em {
                          line-height: 20px;
                          width: ~"calc(100% - 20px)";
                          justify-content: flex-end;
                          align-content: center;
                          text-overflow: ellipsis;
                          word-break: keep-all;
                          white-space: nowrap;
                          overflow: hidden;
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
                    cursor: pointer;
                  }
                }
              }
            }
            .setInform {
              width: 100%;
              display: flex;
              justify-content: center;
              background: #fff;
              .personInform {
                width: 1080px;
                display: flex;
                flex-direction: column;
                .user_inform {
                  display: flex;
                  flex-direction: row;
                  width: 100%;
                  height: 60px;
                  border-bottom: 1px solid #dfe6ee;
                  &:last-child{
                    border: none;
                  }
                  span {
                    display: inline-block;
                    width: 105px;
                    line-height: 60px;
                    font-size: 14px;
                    color: #333333;
                  }
                  .user_input {
                    width: 870px;
                    .el-input__inner {
                      height: 59px;
                      background-color: #fff;
                      border: none;
                      padding: 0 30px;
                    }
                  }
                  .user_set {
                    width: 105px;
                    padding: 0;
                    text-align: right;
                    border: none;
                    &:hover {
                      border: none;
                    }
                    span {
                      color: #0085da;
                    }
                  }
                  .avatar-uploader .el-upload {
                    border: 1px dashed #d9d9d9;
                    border-radius: 6px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    margin-left: 28px;
                    margin-top: 5px;
                  }
                  .avatar-uploader .el-upload:hover {
                    border-color: #409eff;
                  }
                  .avatar-uploader-icon {
                    font-size: 28px;
                    color: #8c939d;
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    text-align: center;
                  }
                  .avatar {
                    width: 70px;
                    height: 70px;
                    display: block;
                  }
                }
                .imgupload {
                  height: 90px;
                }
                .fontTitle {
                  .user_input {
                    width: 870px;
                    .el-input__inner {
                      height: 52px;
                    }
                  }
                  span {
                    line-height: 56px;
                  }
                }
              }
            } //认证
            .identity {
              display: flex;
              justify-content: center;
              width: 100%;
              height: auto;
              .identity_info {
                margin-top: 60px;
                margin-bottom: 110px;
                width: 370px;
                .el-form-item__label {
                  padding-left: 0 21px 0 0;
                  text-align: left;
                }
                .el-button {
                  width: 180px;
                  height: 42px;
                  margin-left: 80px;
                  margin-top: 17px;
                }
              }
            }
          }
        }
      }
    }
  } 
  //修改用户名
  .updateName {
    .el-dialog {
      border-radius: 16px;
      width: 600px;
      height: 260px;
      .el-dialog__header {
        border-radius: 16px;
        background-color: #f4f8fb;
      }
      .el-dialog__body {
        padding: 40px 0 7px 0;
        .el-form {
          
          .el-form-item {
            .el-form-item__content {
            //   margin-left: 0px !important;
              display: flex;
              justify-content: center;
              .el-input {
                  width: 380px;
                .el-input__inner {
                  height: 40px;
                  padding-left: 15px;
                }
              }
            }
          }
        }
      }
      .dialog-footer {
        display: flex;
        justify-content: center;
        .el-button {
          width: 135px;
          height: 42px;
          &:nth-child(1) {
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
