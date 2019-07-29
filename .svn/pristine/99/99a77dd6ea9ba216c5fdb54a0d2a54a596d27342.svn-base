<template>
    <div id="my_release">
        <div class="content">
            <div class="release_title">
                <div class="release_name">
                    <span @click="showpatent" :class="{'bule':zlshow}">我的专利</span>丨
                    <span @click="showdemand" :class="{'bule':xqshow}">我的需求</span>
                </div>
                <div class="release_icon">
                    <span @click="prev">
                        <i class="item_icon icon_prev"></i>
                    </span>
                    <span @click="next">
                        <i class="item_icon icon_next"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="noDataWrap" v-if="noPatentData&&status==1">
            <div class="noData">
                <span></span>
                <p>您还没有发布任何专利(●ˇ∀ˇ●)~~</p>
            </div>
        </div>
        <div class="noDataWrap" v-if="nodemandData&&status==2">
            <div class="noData">
                <span></span>
                <p>您还没有发布任何需求(●ˇ∀ˇ●)~~</p>
            </div>
        </div>
        <div class="tab_info" v-show="zlshow">
            <div class="tab_details" v-for="item in patentList">
                <div class="tab_img">
                    <img src="../../../assets/images/search_test.png" alt="">
                </div>
                <div class="tab_con_01">
                    <p>专利名称：
                        <span>{{item.patentName}}</span>
                    </p>
                    <p>专利价格：
                        <span>{{item.hopePrice|priceFilter}}</span>
                    </p>
                    <p>发布时间：
                        <span>{{item.releaseDate|formatDate_YMD}}</span>
                    </p>
                </div>
                <div class="tab_con_02">
                    <p>
                        <i style="visibility: hidden;">专</i>专利号：
                        <span>{{item.patentNo}}</span>
                    </p>
                    <p>专利类型：
                        <span>{{item.ipcType|ipcClassFilter}}</span>
                    </p>
                    <p>专利状态：
                        <span>{{item.patentStatus|projectStateFilter}}</span>
                    </p>
                </div>
                <div class="tab_button">
                    <el-button class="delete" plain @click="delPatent(item.id)">删除</el-button>
                </div>
            </div>
        </div>
        <div class="tab_info" v-show="xqshow">
            <div class="tab_details" v-for="item in demandList">
                <div class="tab_img">
                    <img src="../../../assets/images/search_test.png" alt="">
                </div>
                <div class="tab_con_01">
                    <p>需求名称：
                        <span>{{item.demandName}}</span>
                    </p>
                    <p>需求类型：
                        <span>{{item.demandType|changeDemandType}}</span>
                    </p>
                    <p>发布时间：
                        <span>{{item.releaseDate|formatDate_YMD}}</span>
                    </p>
                </div>
                <div class="tab_con_02">
                    <p>参考价格：
                        <span>面议</span>
                    </p>
                    <p>电话号码：
                        <span>{{item.contactPhone}}</span>
                    </p>
                    <p>通讯地址 ：
                        <span>{{item.contactAddress}}</span>
                    </p>
                </div>
                <div class="tab_button">
                    <el-button class="delete" plain @click="delDemand(item.id)">删除</el-button>
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
        patentList: [], //发布的专利
        demandList: [], //发布的需求
        noPatentData:false,
        nodemandData:false,
        zlshow:true,
        xqshow:false,
        status:1,//1为默认显示专利
        p_pageCount:null,
        p_currentPage:null,
        p_total:null,
        d_pageCount:null,
        d_currentPage:null,
        d_total:null,
    };
  },
  created() {
    this.getUserInfo()
    this.getPatentList()
    this.getDemandList()
  },
  methods: {
    //初始化获取用户信息
    getUserInfo(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.custId = userInfo.id
        }
    },
    prev(){
        if(this.status==1){
            if(this.p_currentPage==0){
                this.$message.warning('已经是第一页了');
            }
            if(this.p_currentPage>0){
                this.getPatentList(this.p_currentPage-1);
            }
        }else if(this.status==2){
            if(this.d_currentPage==0){
                this.$message.warning('已经是第一页了');
            }
            if(this.d_currentPage>0){
                this.getDemandList(this.d_currentPage-1);
            }
        }
    },
    next(){
        if(this.status==1){
            let pages=Math.ceil(this.p_total/this.p_pageCount);
            if(this.p_currentPage==pages-1){
                this.$message.warning('已经是最后一页了');
            }
            if(this.p_currentPage<pages-1){
                this.getPatentList(this.p_currentPage+1);
            }
        }else if(this.status==2){
            let pages=Math.ceil(this.d_total/this.d_pageCount);
            if(this.d_currentPage==pages-1){
                this.$message.warning('已经是最后一页了');
            }
            if(this.d_currentPage<pages-1){
                this.getDemandList(this.d_currentPage+1);
            }
        }
    },
    //显示专利
    showpatent(){
        this.zlshow=true;
        this.xqshow=false;
        this.status=1;
    },
    // 显示需求
    showdemand(){
        this.zlshow=false;
        this.xqshow=true;
        this.status=2;
    },
    //获取发布专利列表
    getPatentList(currentPage,pageCount) {
        if(this.custId != undefined){
            let params = { 
            id:this.custId,
            currentPage:currentPage||0,
            pageCount:pageCount||6
            };
            http.Request("szipee/user!myReleasePatent.action", "post", null,params).then(res => {
                this.patentList = [];
                if(res.patentList!=undefined){
                    this.p_pageCount=res.patentList[0].pageCount;
                    this.p_currentPage=res.patentList[0].currentPage;
                    this.p_total=res.patentList[0].dataCounts;
                    for (let i in res.patentList) {
                        this.patentList.push(res.patentList[i]);
                    }
                }else{
                    this.noPatentData = true
                }
            });
        }
    },
    //获取发布需求列表
    getDemandList(currentPage,pageCount){
        if(this.custId != undefined){
            let params = { 
            id:this.custId,
            currentPage:currentPage||0,
            pageCount:pageCount||6
            };
            http.Request("szipee/user!myReleaseDemand.action", "post", null,params).then(res => {
                this.demandList = [];
                if(res.demandList!=undefined){
                    this.d_pageCount=res.demandList[0].pageCount;
                    this.d_currentPage=res.demandList[0].currentPage;
                    this.d_total=res.demandList[0].dataCounts;
                    for (let i in res.demandList) {
                        this.demandList.push(res.demandList[i]);
                    }
                }else{
                    this.nodemandData = true
                }
            });
        }
    },
    //删除专利
    delPatent(id) {
      this.$confirm("确定删除此专利？").then(_ => {http.Request("/szipee/patent!delPatent.action", "post", null, {id: id}).then(res => {
              if (res.state == "success") {
                this.getMyrelease(this.userId);
              }
            });
        })
        .catch(_ => {});
    },
    //删除需求
    delDemand(id) {
      this.$confirm("确定删除此专利？").then(_ => {
          http.Request("/szipee/demand!delDemand.action", "post", null, {id: id}).then(res => {
              if (res.state == "success") {
                this.getMyrelease(this.userId);
              }
            });
        })
        .catch(_ => {});
    },
  }
};
</script>
