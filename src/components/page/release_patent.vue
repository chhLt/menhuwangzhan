<template>
<div id="releasePatent">
    <curheader></curheader>
    <div class="patentCenterWrap">
        <div class="detailCenter">
            <div class="breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/patentClass' }">专利分类</el-breadcrumb-item>
                    <el-breadcrumb-item>发布专利</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="patentContent">
                <h2 class="title">专利信息</h2>
                <el-form ref="form" :model="form" label-width="135px">
                    <el-form-item label="专利名称">
                        <el-input v-model="form.patentName" placeholder="请输入专利名称"></el-input>
                    </el-form-item>
                    <el-form-item label="专利号">
                        <el-input v-model="form.patentNo" placeholder="请输入专利号" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="专利权人">
                        <el-input v-model="form.patentCover" placeholder="请输入专利权人"></el-input>
                    </el-form-item>
                    <el-form-item label="申请日期" class="applydate">
                        <el-date-picker type="date" placeholder="请选择申请日期" v-model="form.patentApplydate" :editable="false"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="授权日期" class="applydate">
                        <el-date-picker type="date" placeholder="请选择授权日期" v-model="form.patentGrantdate" :editable="false"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="法律状态">
                        <el-select v-model="form.lawState" placeholder="请选择法律状态">
                            <el-option label="授权未下证" value="1"></el-option>
                            <el-option label="已下证" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权属人所属地区" class="applydate">
                        <el-cascader :options="options" v-model="form.coverAddress" ></el-cascader>
                    </el-form-item>
                    <el-form-item label="专利类别">
                        <el-select v-model="form.patentType" placeholder="请选择专利类别">
                            <el-option label="实用新型" value="1"></el-option>
                            <el-option label="外观设计" value="2"></el-option>
                            <el-option label="发明" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="意向价格" class="price">
                        <el-input v-model="form.hopePrice" placeholder="为零表示面议"></el-input>
                    </el-form-item>
                    <el-form-item label="行业分类" class="el-form-items">
                        <el-select v-model="form.orgType" placeholder="请选择分类">
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
                    <el-form-item label="IPC分类" class="el-form-items">
                        <el-select v-model="form.ipcType" placeholder="请选择分类">
                            <el-option label="人类生活必需" value="A"></el-option>
                            <el-option label="作业、运输" value="B"></el-option>
                            <el-option label="化学、冶金" value="C"></el-option>
                            <el-option label="纺织、造纸" value="D"></el-option>
                            <el-option label="固定建筑物" value="E"></el-option>
                            <el-option label="机械工程、照明、加热、武器、爆破" value="F"></el-option>
                            <el-option label="物理" value="G"></el-option>
                            <el-option label="电学" value="H"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专利级别">
                        <el-radio-group v-model="form.patentLevel">
                            <el-radio label="1">国际专利</el-radio>
                            <el-radio label="2">国内专利</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="合作方式">
                        <el-checkbox-group v-model="form.cooperationType">
                        <el-checkbox label="1" name="type">技术转让</el-checkbox>
                        <el-checkbox label="2" name="type">技术服务</el-checkbox>
                        <el-checkbox label="3" name="type">技术许可</el-checkbox>
                        <el-checkbox label="4" name="type">技术融资</el-checkbox>
                        <el-checkbox label="5" name="type">技术授权</el-checkbox>
                        <el-checkbox label="6" name="type">其他</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="信息有效期"  class="expiryDate">
                        <el-date-picker
                            v-model="form.expiryStardate"
                            type="date"
                            :editable="false"
                            placeholder="开始时间">
                        </el-date-picker>
                        <el-date-picker
                            v-model="form.expiryEnddate"
                            type="date"
                            :editable="false"
                            placeholder="结束时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="专利图片" class="uploader">
                        <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img  v-if="returnImgurl" :src="returnImgurl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <span class="uploader-tip">温馨提示：为了达到最佳的展示，上传的图片的最佳大小为 285*160</span>
                    </el-form-item>
                    <el-form-item label="专利摘要">
                        <el-input type="textarea" v-model="form.patentDes" :rows="8" placeholder="请输入摘要"></el-input>
                    </el-form-item>
                    <h2 class="title">联系人信息</h2>
                    <el-form-item label="联系人">
                        <el-input v-model="form.contactName" placeholder="请输入联系人姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="form.contactPhone" placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input v-model="form.contactEmail" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="通讯地址">
                        <el-input v-model="form.contactAddress" placeholder="请输入通讯地址"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即发布</el-button>
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
import { regionData } from 'element-china-area-data';
import {formatDateTime_YMD} from '../config/FormatDateTime';
import {randomString} from '../config/utils';
import {BaseUrl} from '../config/constUrl';
import http from "../config/request";
export default {
    data () {
        return {
            uploadUrl:'',
            returnImgurl: '',//返回图片
			options:regionData,//省市县数据来源
            form: {
                custId:'',//用户ID
                patentName: '',//专利名称
                patentNo:'',//专利号
                patentCover:'',//专利权人
                patentLevel: '1',//专利级别
                patentApplydate: '',//申请日期
                patentGrantdate: '',//授权日期
                lawState: '',//法律状态
                hopePrice:'',//意向价格
                orgType:this.$route.query.id.toString(),//行业分类
                ipcType:'',//IPC分类
                patentType:'',//专业类别
                cooperationType: [],//合作方式
                coverAddress:[],//省/市/县绑定值
                expiryStardate:'',//信息发布有效期起始时间
                expiryEnddate:'',//信息发布有效期截止时间
                patentDes: '',//专利摘要
                contactName:'',//联系人
                contactPhone:'',//电话
                contactEmail:'',//邮箱
                contactAddress:'',//通讯地址
                patentStatus:'',//发布专利信息状态
                releaseDate:'',//发布时间
                imgKey:''//图片返回值
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
                this.uploadUrl=BaseUrl+'szipee/uploadImg?custId='+userInfo.id+'&imageType=2&imgKey='+randomString(16);
            }else{
                this.$message({message: '请先登录！！',type: 'warning'});
                this.$router.push({path: "/patentClass"});
            }
        },
        onSubmit() {
            var params = {
                custId:this.form.custId,//用户ID
                patentName:this.form.patentName,//专利名称
                patentNo:this.form.patentNo,//专利号
                patentCover:this.form.patentCover,//专利权人
                patentLevel: this.form.patentLevel,//专利级别
                lawState: this.form.lawState,//法律状态
                hopePrice:this.form.hopePrice,//意向价格
                orgType:this.form.orgType,//行业分类
                ipcType:this.form.ipcType,//IPC分类
                patentType:this.form.patentType,//专利类别
                coverAddress:this.form.coverAddress.join("|"),//省/市/县绑定值
                patentApplydate:formatDateTime_YMD(Date.parse(this.form.patentApplydate)),//申请日期
                patentGrantdate:formatDateTime_YMD(Date.parse(this.form.patentGrantdate)),//授权日期
                cooperationType:this.form.cooperationType.join("|"),//合作方式
                expiryStardate:formatDateTime_YMD(Date.parse(this.form.expiryStardate)),//信息发布有效期起始时间
                expiryEnddate:formatDateTime_YMD(Date.parse(this.form.expiryEnddate)),//信息发布有效期截止时间
                patentDes: this.form.patentDes,//专利摘要
                contactName:this.form.contactName,//联系人
                contactPhone:this.form.contactPhone,//电话
                contactEmail:this.form.contactEmail,//邮箱
                contactAddress:this.form.contactAddress,//通讯地址
                patentStatus:this.form.patentStatus,//发布专利信息状态
                releaseDate:this.form.releaseDate,//发布时间
                imgKey:this.form.imgKey
            }
            if(params.patentName.length==0){
                this.$message({message: '专利名称不能为空',type: 'warning'});
                return false;
            }
            if(params.patentNo.length==0){
                this.$message({message: '专利号不能为空',type: 'warning'});
                return false;
            }
            if(params.patentCover.length==0){
                this.$message({message: '专利权人不能为空',type: 'warning'});
                return false;
            }
            if(params.patentApplydate=="NaN-aN-aN"){
                this.$message({message: '请选择申请日期',type: 'warning'});
                return false;
            }
            if(params.patentGrantdate=="NaN-aN-aN"){
                this.$message({message: '请选择授权日期',type: 'warning'});
                return false;
            }
            if(params.lawState.length==0){
                this.$message({message: '请选择法律状态',type: 'warning'});
                return false;
            }
            if(params.coverAddress.length==0){
                this.$message({message: '请选择权属人所属地区',type: 'warning'});
                return false;
            }
            if(params.patentType.length==0){
                this.$message({message: '请选择专利类别',type: 'warning'});
                return false;
            }
            if(params.hopePrice.length==0){
                this.$message({message: '请填写意向价格',type: 'warning'});
                return false;
            }
            if(params.ipcType.length==0){
                this.$message({message: '请选择IPC分类',type: 'warning'});
                return false;
            }
            if(params.cooperationType.length==0){
                this.$message({message: '请选择合作方式',type: 'warning'});
                return false;
            }
            if(params.expiryStardate=="NaN-aN-aN"){
                this.$message({message: '请选择信息有效期开始时间',type: 'warning'});
                return false;
            }
            if(params.expiryEnddate=="NaN-aN-aN"){
                this.$message({message: '请选择信息有效期结束时间',type: 'warning'});
                return false;
            }
            if(params.imgKey.length==0){
                this.$message({message: '请上传专利图片',type: 'warning'});
                return false;
            }
            if(params.patentDes.length==0){
                this.$message({message: '专利摘要不能为空',type: 'warning'});
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
                this.$message({message: '通讯地址不能为空',type: 'warning'});
                return false;
            }
            http.Request('szipee/patent!releasePatent.action','POST', null,params).then(res=>{
                if (res.state == "success") {
                    this.$message({ message: "发布成功", type: "success" });
                    this.$router.push({ path: "/" });
                }
            })
        },
        handleAvatarSuccess(res, file) {
            this.returnImgurl = res.urls+'&'+Math.floor(Math.random() * 100 + 1) +1
            this.form.imgKey = res.imgKey
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                this.$message.error('上传图片只能是 JPG/PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }
            return isJPG || isPNG && isLt2M;
		},
    },
    components:{
        curheader: resolve => {require(['../common/header/header'], resolve)},
        bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
        starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    }
}
</script>
<style lang="less" rel="stylesheet/less">
    #releasePatent{
        background-color: #f4f7fa;
        .patentCenterWrap{
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
                .patentContent{
                    width: 100%;
                    background: #fff;
                    padding: 30px 75px;
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
                    .applydate{
                        .el-date-editor.el-input{
                            width:420px;
                        }
                    }
                    .price{
                        .el-input__inner{
                            width:180px;
                        }
                    }
                    .expiryDate{
                        .el-date-editor.el-input{margin-right:30px;width:180px;}
                        .el-input__inner{
                            width:180px;
                        }
                    }
                    .el-form-items{
                        .el-input__inner{
                            width:180px;
                        }
                        .el-select{
                            margin-right: 30px;
                        }
                    }
                    .uploader-tip{
                        position: absolute;
                        top: 0;
                        left:140px;
                        line-height: 120px;
                        color: #909399;
                    }
                    .avatar-uploader .el-upload {
                        border: 1px dashed #d9d9d9;
                        border-radius: 6px;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                        display: inline-block;
                    }
                    .avatar-uploader .el-upload:hover {
                        border-color: #409EFF;
                    }
                    .avatar-uploader-icon {
                        font-size: 28px;
                        color: #8c939d;
                        width: 120px;
                        height: 120px;
                        line-height: 120px;
                        text-align: center;
                    }
                    .avatar {
                        width: 120px;
                        height: 120px;
                        display: block;
                    }
                    
                    
                }
            }
        }
    }        
</style>
