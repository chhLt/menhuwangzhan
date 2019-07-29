<template>
<div id="releaseDemand">
    <curHeader></curHeader>
    <div class="demandCenterWrap">
        <div class="detailCenter">
            <div class="breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/servicehall' }">服务大厅</el-breadcrumb-item>
                    <el-breadcrumb-item>发布需求</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="demandCenter">
                <h2 class="title">需求信息</h2>
                <el-form ref="form" :model="form" label-width="135px">
                    <el-form-item label="需求名称">
                        <el-input v-model="form.demandName" placeholder="请输入需求名称"></el-input>
                    </el-form-item>
                    <el-form-item label="需求类型">
                        <el-checkbox-group v-model="Type">
                            <el-checkbox label="1" name="demandType" style="margin-left:0px">专利权转让</el-checkbox>
                            <el-checkbox label="2" name="demandType">专利权实施许可</el-checkbox>
                            <el-checkbox label="3" name="demandType">专利权独家实施许可</el-checkbox>
                            <el-checkbox label="4" name="demandType">专利申请权</el-checkbox>
                            <el-checkbox label="5" name="demandType">技术秘密转让</el-checkbox>
                            <el-checkbox label="6" name="demandType">股权转让</el-checkbox>
                            <el-checkbox label="7" name="demandType">投资</el-checkbox>
                            <el-checkbox label="8" name="demandType">其他</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input v-model="form.contactName" placeholder="请输入联系人姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="form.contactPhone" placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input v-model="form.contactEmail" placeholder="请输入E-mail"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人地址">
                        <el-input v-model="form.contactAddress" placeholder="请输入联系人地址"></el-input>
                    </el-form-item>
                    <el-form-item label="需求说明">
                        <el-input type="textarea" v-model="form.demandDes" :rows="8" placeholder="请输入需求说明"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">发布需求</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    <starboard></starboard>
    <bottom></bottom>
</div>
</template>
<script>
import http from "../config/request";
import {formatDateTime_YMD} from '../config/FormatDateTime'
export default {
    data () {
        return {
            Type:[],
            form: {
                custId:'',
                demandName:'',
                demandType:"",
                contactName:'',
                contactPhone:'',
                contactEmail:'',
                contactAddress:'',
                demandDes:''
            }
        }
    },
    created() {
        this.getUserInfo()
    },
    methods: {
        //初始化调用用户信息
        getUserInfo(){
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(userInfo){
                this.form.custId = userInfo.id
            }else{
                this.$message({message: '请先登录！！',type: 'warning'});
                this.$router.push({path: "/servicehall"});
            }
        },
        onSubmit() {
            if(this.form.demandName.length==0){
                this.$message({message: '需求名不能为空',type: 'warning'});
                return false;
            }
            if(this.Type.length==0){
                this.$message({message: '请选择需求类型',type: 'warning'});
                return false;
            }else{
                this.form.demandType=this.Type.join("|");
            }
            if(this.form.contactName.length==0){
                this.$message({message: '联系人不能为空',type: 'warning'});
                return false;
            }
            if(this.form.contactPhone.length==0){
                this.$message({message: '联系电话不能为空',type: 'warning'});
                return false;
            }else if (!/^1[345678]\d{9}$/.test(this.form.contactPhone)) {
                this.$message({message: '联系电话输入有误',type: 'warning'});
                return false;
            }
            if(this.form.contactEmail.length==0){
                this.$message({message: 'E-mail不能为空',type: 'warning'});
                return false;
            }
            if(this.form.contactAddress.length==0){
                this.$message({message: '联系人地址不能为空',type: 'warning'});
                return false;
            }
            if(this.form.demandDes.length==0){
                this.$message({message: '需求说明不能为空',type: 'warning'});
                return false;
            }
            let params =this.form
            http.Request('szipee/demand!releaseDemand.action','POST', null,params).then(res=>{
                if (res.state == "success") {
                    this.$message({ message: "发布成功", type: "success" });
                    this.$router.push({ path: "/" });
                }
            })
        },
    },
    components:{
        curHeader: resolve => {require(['../common/header/header'], resolve)},
        bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
        starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    }
}
</script>
<style lang="less" rel="stylesheet/less">
    #releaseDemand{
        background-color: #f4f7fa;
        .demandCenterWrap{
            width:100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .detailCenter{
                width:1230px;
                padding-bottom: 60px;
                .breadcrumb{
                    padding:20px 0;
                }
                .demandCenter{
                    width: 100%;
                    background: #fff;
                    padding: 30px 75px;
                    .el-checkbox{
                        margin-left: 24px;
                    }
                    .title{
                        font-size: 16px;
                        color: #16181e;
                        font-weight: bold;
                        line-height: 40px;
                        border-bottom: 1px solid #dfe6ee;
                        margin-bottom: 40px;
                    }
                    .el-form-item{
                        margin-bottom: 30px;
                        .el-form-item__label{
                            padding: 0 30px 0 0;
                        }
                        .el-input__inner{
                            width:420px;
                        }
                        .el-textarea__inner{
                            width: 600px;
                        }
                    }
                }
            }
        }
    }        
</style>
