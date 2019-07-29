<template>
    <div id="user_set" >
        <div v-if="datailsInfo">
            <div  class="personal_info">
                <div class="content">
                    <div class="release_title">
                        <div class="release_name" >基本信息设置</div>
                    </div>
                </div>
                <div class="setInform">
                    <div class="personInform">
                        <div class="user_inform imgupload">
                            <span style="line-height:90px;">头像上传</span>
                            <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="output.imageUrl" :src="output.imageUrl|imgUrlFilter" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                        <div class="user_inform fontTitle">
                            <span>用户名</span>
                            <el-input class="user_input" :placeholder="output.loginName"  :disabled="true"></el-input>
                        </div>
                        <div class="user_inform fontTitle">
                            <span>昵称</span>
                            <el-input class="user_input" :placeholder="output.nickName"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="nickNameDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform fontTitle">
                            <span>真实姓名</span>
                            <el-input class="user_input" :placeholder="output.trueName|filterTrueName"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="trueNameDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform fontTitle">
                            <span>证件号码</span>
                            <el-input class="user_input" :placeholder="output.idNo|filterIdNo"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="idNoDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform fontTitle">
                            <span>密码</span>
                            <el-input class="user_input" :placeholder="output.password"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="updatePassword()" plain>修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="enterprise_info" v-if="output.custType == 2">
                <div class="content">
                    <div class="release_title">
                        <div class="release_name">
                            企业信息设置
                        </div>
                    </div>
                </div>
                <div class="setInform">
                    <div class="personInform">
                        <div class="user_inform">
                            <span>企业名称</span>
                            <el-input class="user_input" :placeholder="output.orgName"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="orgDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform">
                            <span>企业性质</span>
                            <el-input class="user_input" :placeholder="output.orgNature|orgNatureFilter"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="orgNatureDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform">
                            <span>行业分类</span>
                            <el-input class="user_input" :placeholder="output.orgType|orgTypeFilter"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="orgTypeDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform">
                            <span>联系姓名</span>
                            <el-input class="user_input" :placeholder="output.contactName"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="contactNameDialog = true" plain>修改</el-button>
                        </div>
                        <div class="user_inform">
                            <span>联系邮箱</span>
                            <el-input class="user_input" :placeholder="output.contactEmail"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="updateEmail()" plain>修改</el-button>
                        </div>
                        <div class="user_inform">
                            <span>联系电话</span>
                            <el-input class="user_input" :placeholder="output.contactPhone"  :disabled="true"></el-input>
                            <el-button class="user_set" @click="contactPhoneDialog = true" plain>修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 编辑昵称 -->
        <el-dialog title="编辑昵称" :visible.sync="nickNameDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item >
                    <el-input v-model="form.nickName" auto-complete="off" placeholder="请输入新的昵称"></el-input>
                </el-form-item>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="nickNameDialog = false">取 消</el-button>
                <el-button type="primary" @click="editNickName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑真实姓名 -->
        <el-dialog title="编辑真实姓名" :visible.sync="trueNameDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item >
                    <el-input v-model="form.trueName" auto-complete="off" placeholder="请输入真实姓名"></el-input>
                </el-form-item>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="trueNameDialog = false">取 消</el-button>
                <el-button type="primary" @click="editTrueName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑证件号 -->
        <el-dialog title="编辑真实姓名" :visible.sync="idNoDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item >
                    <el-input v-model="form.idNo" auto-complete="off" placeholder="请输入身份证号码"></el-input>
                </el-form-item>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="idNoDialog = false">取 消</el-button>
                <el-button type="primary" @click="editIdNoName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑企业名称 -->
        <el-dialog title="编辑企业名称" :visible.sync="orgDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.orgName" auto-complete="off" placeholder="请输入新的企业名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="orgDialog = false">取 消</el-button>
                <el-button type="primary" @click="editOrgName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑企业性质 -->
        <el-dialog title="编辑企业性质" :visible.sync="orgNatureDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item>
                    <el-select v-model="form.orgNature" placeholder="请选择企业性质">
                        <el-option v-for="item in org_nature_data" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="orgNatureDialog = false">取 消</el-button>
                <el-button type="primary" @click="editOrgNature">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑行业分类 -->
        <el-dialog title="编辑行业分类" :visible.sync="orgTypeDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item>
                    <el-select v-model="form.orgType" placeholder="请选择行业分类">
                        <el-option v-for="item in org_type" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="orgTypeDialog = false">取 消</el-button>
                <el-button type="primary" @click="editOrgType">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑联系人姓名 -->
        <el-dialog title="编辑联系人姓名" :visible.sync="contactNameDialog" placeholder="请输入新的联系人姓名"  class="updateName">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.contactName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="contactNameDialog = false">取 消</el-button>
                <el-button type="primary" @click="editContactName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑联系人电话 -->
        <el-dialog title="编辑联系人电话" :visible.sync="contactPhoneDialog"  class="updateName">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.contactPhone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="contactPhoneDialog = false">取 消</el-button>
                <el-button type="primary" @click="editContactPhone">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 重置手机号 -->
        <div v-if="tel">
            <div class="content">
                <div class="release_title">
                    <div class="release_name">
                        修改手机
                    </div>
                    <div>
                      <el-button plain style="margin-top: 10px;margin-right: 30px;" @click="back">返回</el-button>
                    </div>
                </div>
            </div>
            <resetphone></resetphone>
        </div>
        <!-- 修改密码 -->
        <div v-if="password">
            <div class="content">
                <div class="release_title">
                    <div class="release_name">
                        修改密码
                    </div>
                    <div>
                      <el-button plain style="margin-top: 10px;margin-right: 30px;" @click="back">返回</el-button>
                    </div>
                </div>
            </div>
            <div class="identity">
                <div class="identity_info">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="旧密码">
                            <el-input type="password" v-model="form.oldpassword"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input type="password" v-model="form.newpassword"></el-input>
                        </el-form-item>
                        <el-form-item label="再次输入">
                            <el-input type="password" v-model="form.renewpassword"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="editPassword">修改</el-button>
                    </el-form>
                </div>
            </div>
        </div>
        <!-- 修改邮箱 -->
        <div v-if="email">
            <div class="content">
                <div class="release_title">
                    <div class="release_name">修改邮箱</div>
                    <div>
                        <el-button plain style="margin-top: 10px;margin-right: 30px;" @click="back">返回</el-button>
                    </div>
                </div>
            </div>
            <div class="identity">
                <div class="identity_info">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="旧邮箱">
                            <el-input v-model="form.oldEmail"></el-input>
                        </el-form-item>
                        <el-form-item label="新邮箱">
                            <el-input v-model="form.newEmail"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="editEmail">修改</el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import resetphone from "../resetphone/resetphone";
import http from "../../config/request";
import { randomString } from "../../config/utils";
import { BaseUrl } from "../../config/constUrl";
export default {
    props: ["message"],
    data() {
        return {
            imgKey: "", //图片返回值
            uploadUrl: "", //上传路径
            status: true,
            name: "",
            nickNameDialog: false,//修改昵称弹窗
            orgDialog:false,//修改企业名称弹窗
            contactNameDialog:false,//修改联系人姓名弹窗
            contactPhoneDialog:false,//修改联系人电话弹窗
            orgNatureDialog:false,//修改企业性质弹窗
            orgTypeDialog:false,//修改行业分类弹窗
            trueNameDialog:false,//真实姓名弹窗
            idNoDialog:false,//身份证弹窗
            form: {
                nickName: "", //昵称
                oldpassword: "", //旧密码
                newpassword: "", //新密码
                renewpassword: "", //重新输入密码
                oldEmail:"",//旧企业邮箱
                newEmail:"",//新企业邮箱
                orgName:"",//新的企业名称
                contactName:"",//新的企业联系人姓名
                contactPhone:"",//新的企业联系人电话
                orgNature:"",//新的企业性质
                orgType:"",//新的行业分类
                trueName:"",//真实姓名
                idNo:""//身份证号码
            },
            output: {
                loginName:"",//用户名  
                imageUrl: "", //上传成功返回路径  
                nickName: "", //昵称
                trueBind:"",//实名认证
                phone: "",//手机号码
                password: "********",//密码
                orgName:"",//企业名称
                orgNature:"",//企业性质
                contactName:"",//企业联系人姓名
                contactPhone:"",//企业联系人电话
                contactEmail: "",//企业联系人邮箱
                orgType:"",//企业行业分类
                trueName:"",//真实姓名
                idNo:""//身份证号码
            },
            org_nature_data: [
                {
                value: 1,
                label: "行政机关"
                },
                {
                value: 2,
                label: "社会团体"
                },
                {
                value: 3,
                label: "事业单位"
                },
                {
                value: 4,
                label: "国有企业"
                },
                {
                value: 5,
                label: "股份集团"
                },
                {
                value: 6,
                label: "外资企业"
                },
                {
                value: 7,
                label: "三资企业"
                },
                {
                value: 8,
                label: "集团企业"
                },
                {
                value: 9,
                label: "乡镇企业"
                },
                {
                value: 10,
                label: "私营企业"
                }
            ],
            org_type: [
                {
                value: 1,
                label: "农林牧业"
                },
                {
                value: 2,
                label: "食品饮料"
                },
                {
                value: 3,
                label: "家具用品"
                },
                {
                value: 4,
                label: "教育休闲"
                },
                {
                value: 5,
                label: "医药与医疗"
                },
                {
                value: 6,
                label: "化学化工"
                },
                {
                value: 7,
                label: "电气自动化"
                },
                {
                value: 8,
                label: "新能源"
                },
                {
                value: 9,
                label: "电子信息源"
                },
                {
                value: 10,
                label: "仪器仪表"
                },
                {
                value: 11,
                label: "环保和资源"
                },
                {
                value: 12,
                label: "轻工纺织"
                },
                {
                value: 13,
                label: "包装印刷"
                },
                {
                value: 14,
                label: "建筑建材"
                },
                {
                value: 15,
                label: "新型材料"
                },
                {
                value: 16,
                label: "海洋开发"
                },
                {
                value: 17,
                label: "航空航天"
                },
                {
                value: 18,
                label: "采矿冶金"
                },
                {
                value: 19,
                label: "交通运输"
                },
                {
                value: 20,
                label: "橡胶塑料"
                },
                {
                value: 21,
                label: "机械"
                },
                {
                value: 22,
                label: "安全防护"
                }
            ],
            tel: false,
            password: false,
            email: false,
            datailsInfo: true
        };
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        //初始化调用用户信息
        getUserInfo() {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (userInfo) {
                //基础信息
                this.output.loginName = userInfo.loginName;//用户名
                this.output.imageUrl = userInfo.urls;//头像
                this.output.nickName = userInfo.nickName; //昵称
                this.output.phone = userInfo.phone;//手机号码
                this.output.trueBind = userInfo.trueBind;//真实姓名
                this.output.custType = userInfo.custType;//用户类型
                this.oldpassword = userInfo.password;//密码
                this.output.trueName = userInfo.trueName;//真实姓名
                this.output.idNo = userInfo.idNo;//身份证号码
                //企业信息
                this.output.orgName = userInfo.orgName;//企业名称
                this.output.orgNature = userInfo.orgNature//企业性质
                this.output.orgType = userInfo.orgType//行业分类
                this.output.contactEmail = userInfo.contactEmail;//联系邮箱
                this.output.contactName  = userInfo.contactName//联系人姓名
                this.output.contactPhone = userInfo.contactPhone//联系人电话
                //头像上传地址
                this.uploadUrl =BaseUrl +"szipee/uploadImg?custId=" +userInfo.id +"&imageType=1&imgKey=" +randomString(16);
        }
        },
        //上传图片回显
        handleAvatarSuccess(res, file) {
            this.output.imageUrl = res.urls + "&" + Math.floor(Math.random() * 100 + 1) + 1;
            this.imgKey = res.imgKey;
            let param = {loginName: this.output.loginName,imgKey: res.imgKey};
            http.Request("szipee/user!updateCust.action", "POST", null, param).then(res => {
                sessionStorage.userInfo = JSON.stringify(res);
                this.$emit('userInfo',res);
            });
        },
        //上传头像
        beforeAvatarUpload(file) {
        const isJPG = file.type === "image/*";
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isLt2M;
        },
        //修改昵称
        editNickName() {
            if (this.form.nickName.length == 0) {
                this.$message({message: "请输入昵称",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                nickName: this.form.nickName
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
            if(res.state == "success"){
                this.$message({message: "昵称修改成功",type: "success"});//通知
                sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                this.$emit('userInfo',res);//传值到user_center更新修改
                this.getUserInfo();//重新获取用户数据渲染
                this.nickNameDialog = false;//关闭
            }
            });
        },
        editTrueName(){
            if (this.form.trueName.length == 0) {
                this.$message({message: "请输入真实姓名",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                trueName: this.form.trueName
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修改真实姓名成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.trueNameDialog = false;//关闭
                }
            });
        },
        editIdNoName(){
            if (this.form.idNo.length == 0) {
                this.$message({message: "请输入身份证号码",type: "warning"});
                return false;
            }else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.form.idNo)) {
                this.$message({message: "请输入正确的身份证号码",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                idNo: this.form.idNo
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修好身份证号码成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.idNoDialog = false;//关闭
                }
            });
        },
        //修改企业名称
        editOrgName(){
            if (this.form.orgName.length == 0) {
                this.$message({message: "请输入企业名称",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                orgName: this.form.orgName
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "企业名称修改成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.orgDialog= false;//关闭
                }
            });
        },
        //修改企业性质
        editOrgNature(){
            if (this.form.orgNature.length == 0) {
                this.$message({message: "请选择企业性质",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                orgNature: this.form.orgNature
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修改企业性质成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.orgNatureDialog= false;//关闭
                }
            });
        },
        //修改行业分类
        editOrgType(){
            if (this.form.orgType.length == 0) {
                this.$message({message: "请选择行业分类",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                orgType: this.form.orgType
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修改行业分类成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.orgTypeDialog= false;//关闭
                }
            });
        },
        //修改联系人姓名
        editContactName(){
            if (this.form.contactName.length == 0) {
                this.$message({message: "请输入联系人姓名",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                contactName: this.form.contactName
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修改联系人姓名成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.contactNameDialog= false;//关闭
                }
            });
        },
        //修改联系电话
        editContactPhone(){
            if (this.form.contactPhone.length == 0) {
                this.$message({message: "请输入联系人电话",type: "warning"});
                return false;
            } else if (!/^1[345678]\d{9}$/.test(this.form.contactPhone)) {
                this.$message({message: "请输入正确电话号码",type: "warning"});
                return false;
            }
            let param = {
                loginName: this.output.loginName,
                contactPhone: this.form.contactPhone
            };
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({message: "修改联系电话成功",type: "success"});//通知
                    sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                    this.getUserInfo();//重新获取用户数据渲染
                    this.contactPhoneDialog= false;//关闭
                }
            });
        },
        //修改密码
        editPassword() {
            let reg = /^[\w]{6,12}$/;
            if (this.form.oldpassword.length == 0) {
                this.$message({
                    message: "旧密码不能为空",
                    type: "warning"
                });
                return false;
            }
            if (this.form.newpassword.length == 0) {
                this.$message({
                    message: "新密码不能为空",
                    type: "warning"
                });
                return false;
            } else if (!reg.test(this.form.newpassword)) {
                this.$message({
                    message: "新密码需6-12，由数字、字母、下划线组成",
                    type: "warning"
                });
                return false;
            }
            if (this.form.renewpassword.length == 0) {
                this.$message({
                    message: "再次输入的密码不能为空",
                    type: "warning"
                });
                return false;
            }
            if (this.form.newpassword != this.form.renewpassword) {
                this.$message({
                    message: "两次输入密码不一致",
                    type: "warning"
                });
                return false;
            }
            let param = {
                phone: this.output.loginName,
                password: this.form.newpassword,
                oldPassword: this.form.oldpassword
            };
            http.Request("szipee/user!updatePwd.action", "post", null, param).then(res => {
                if(res.state == "success"){
                    this.$message({
                        message: res.info,
                        type: "success"
                    });
                    sessionStorage.removeItem('userInfo');
                    this.$router.push({ path: "/" });
                }else{
                    this.$message({
                        message: res.info,
                        type: "success"
                    });
                }
            });
        },
        //修改邮箱
        editEmail(){
            let param = {
                loginName: this.output.loginName,
                contactEmail: this.form.newEmail
            };
            //旧邮箱
            if (this.form.oldEmail.length == 0) {
                this.$message({message: "旧邮箱不能为空",type: "warning"});
                return false;
            } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.oldEmail)){
                this.$message({message: "旧邮箱格式输入有误，请重新输入",type: "warning"});
                return false;
            }else if(this.output.contactEmail != this.form.oldEmail){
                this.$message({message: "旧邮箱和当前用户信息不符合，请重新输入",type: "warning"});
            }
            //新邮箱
            if (this.form.newEmail.length == 0) {
                this.$message({message: "新邮箱不能为空",type: "warning"});
                return false;
            } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.newEmail)){
                this.$message({message: "新邮箱格式输入有误，请重新输入",type: "warning"});
                return false;
            }
            http.Request("szipee/user!updateCust.action", "post", null, param).then(res => {
            if(res.state == "success"){
                this.$message({message: "修改邮箱成功",type: "success"});
                sessionStorage.userInfo = JSON.stringify(res);//更新sessionStorage用户数据
                this.getUserInfo();//重新获取用户数据渲染
                this.updateEmail()//显示列表
            }
            });
        },
        back(){
        this.datailsInfo = true;
        this.tel = false;
        this.password = false;
        this.email = false;
        },
        //修改手机
        updatePhone() {
        this.tel = true;
        this.datailsInfo = false;
        },
        //修改密码
        updatePassword() {
        this.password = true;
        this.datailsInfo = false;
        },
        //修改邮箱
        updateEmail() {
        this.email = !this.email;
        this.datailsInfo = !this.datailsInfo;
        }
    },
    components: {
        resetphone
    },
    filters:{
        filterTrueName(val){
            if(val == null){
                return '未填写'
            }else{
                return  val
            }
        },
        filterIdNo(val){
            if(val == null){
                return '未填写'
            }else{
                return  val
            }
        }
    }
};
</script>


