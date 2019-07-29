<template>
    <div id="apply">
        <div class="profile">
            <p class="title">展厅申请</p>
            <el-form ref="form" :model="form" label-width="135px">
                <el-form-item label="专利名称">
                    <el-input v-model="form.patentName" placeholder="请输入专利名称"></el-input>
                </el-form-item>
                <el-form-item label="专利号">
                    <el-input v-model="form.patentId" placeholder="请输入专利号"></el-input>
                </el-form-item>
                <el-form-item label="行业分类">
                    <el-select v-model="form.orgType" placeholder="请选择行业分类">
                        <el-option label="农林牧业" value="1"></el-option>
                        <el-option label="食品饮料" value="2"></el-option>
                        <el-option label="家具用品" value="3"></el-option>
                        <el-option label="教育休闲" value="4"></el-option>
                        <el-option label="医药与医疗" value="5"></el-option>
                        <el-option label="化学化工" value="6"></el-option>
                        <el-option label="电气自动化" value="7"></el-option>
                        <el-option label="新能源" value="8"></el-option>
                        <el-option label="电子信息源" value="9"></el-option>
                        <el-option label="仪器仪表" value="10"></el-option>
                        <el-option label="保和资源" value="11"></el-option>
                        <el-option label="轻工纺织" value="12"></el-option>
                        <el-option label="包装印刷" value="13"></el-option>
                        <el-option label="建筑建材" value="14"></el-option>
                        <el-option label="新型材料" value="15"></el-option>
                        <el-option label="海洋开发" value="16"></el-option>
                        <el-option label="航空航天" value="17"></el-option>
                        <el-option label="采矿冶金" value="18"></el-option>
                        <el-option label="交通运输" value="19"></el-option>
                        <el-option label="橡胶塑料" value="20"></el-option>
                        <el-option label="机械" value="21"></el-option>
                        <el-option label="安全防护" value="22"></el-option>
                        <el-option label="其他" value="23"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input v-model="form.contactName" placeholder="请输入联系人姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="form.contactPhone" placeholder="请输入联系人电话"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="form.contactEmail" placeholder="请输入联系Email"></el-input>
                </el-form-item>
                <el-form-item label="联系地址">
                    <el-input v-model="form.contactAddress" placeholder="请输入联系地址"></el-input>
                </el-form-item>
                </el-form-item>
                <el-form-item label="专利描述">
                    <el-input type="textarea" :rows="8" placeholder="请输入专利描述" v-model="form.patentDes"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即申请</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import http from "../../config/request";
export default {
  data() {
    return {
      form: {
        custId:"",//用户ID
        patentName: "",//专利名称
        patentId: "",//专利号
        orgType: "",//行业分类
        contactName: "",//联系人姓名
        contactPhone: "",//联系人电话
        contactEmail: "",//联系人邮箱
        contactAddress: "",//联系人地址
        patentDes:""  //专利描述
      }
    };
  },
  created() {
      this.getUserInfo()
  },
  methods: {
    //初始化获取用户信息  
    getUserInfo(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.form.custId = userInfo.id
        }else{
            this.$message({message: '请先登录！！',type: 'warning'});
            this.$router.push({path: "/aboutour/profile"});
        }
    },
    onSubmit() {
        let params = this.form;
        if(params.patentName.length==0){
            this.$message({message: '专利名称不能为空',type: 'warning'});
            return false;
        }
        if(params.patentId.length==0){
            this.$message({message: '专利号不能为空',type: 'warning'});
            return false;
        }
        if(params.orgType.length==0){
            this.$message({message: '请选择行业专利行业类别',type: 'warning'});
            return false;
        }
        if(params.contactName.length==0){
            this.$message({message: '联系人不能为空',type: 'warning'});
            return false;
        }
        if(params.contactPhone.length==0){
            this.$message({message: '联系电话不能为空',type: 'warning'});
            return false;
        }else if (!/^1[345678]\d{9}$/.test(params.contactPhone)) {
            this.$message({message: '联系电话格式有误，请重新输入',type: 'warning'});
            return false;
        }
        if (params.contactEmail.length == 0) {
            this.$message({message: 'E-mail不能为空',type: 'warning'});
            return false;
        } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(params.contactEmail)){
            this.$message({message: 'E-mail格式有误，请重新输入',type: 'warning'});
            return false;
        }
        if(params.contactAddress.length==0){
            this.$message({message: '联系地址不能为空',type: 'warning'});
            return false;
        }
        if(params.patentDes.length==0){
            this.$message({message: '联系地址不能为空',type: 'warning'});
            return false;
        }
        http.Request('szipee/showroom!showroomApply.action','POST', null,params).then(res=>{
            if (res.state == "success") {
                this.$message({ message: "申请成功", type: "success" });
                this.$router.push({ path: "/" });
            }
        })
    }
  },
  components: {}
};
</script>
<style lang="less" rel="stylesheet/less">
#apply {
  .profile,
  .download_center {
    padding: 40px 100px 40px;
    .title {
      font-size: 20px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      padding-bottom: 30px;
      letter-spacing: 1px;
      margin-bottom: 25px;
      border-bottom: 1px solid #dfe6ee;
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
  .el-form-item {
    margin-bottom: 30px;
    padding-right: 120px;
    .el-input {
      width: 440px;
    }
    .el-textarea__inner {
      width: 440px;
    }
    .el-form-item__label{
        padding: 0 30px 0 0;
    }
  }
}
</style>
