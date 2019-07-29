<template>
    <div id="my_collection">
        <div class="content">
            <div class="release_title">
                <div class="release_name">
                    我的收藏
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
        <div class="collection">
            <div class="noDataWrap" v-if="patentList.length<=0&&demandList.length<=0">
                <div class="noData">
                    <span></span>
                    <p>您还没有收藏任何项目(●ˇ∀ˇ●)~~</p>
                </div>
            </div>
            <ul v-else>
                <!-- 专利 -->
                <li v-for="item in patentList">
                    <div class="mainImage">
                        <router-link :to="{path:'patentDetail',query:{id:item.id}}">
                            <img src="../../../assets/images/search_test.png" alt="">
                            <em class="patentFlag"></em>
                        </router-link>
                    </div>
                    <div class="mainTitle">
                        <span>{{item.patentName}}</span>
                        <i class="item_icon icon_solid" @click="changePatentCollection(item.id)"></i>
                    </div>
                    <div class="subTitle">
                        <p>{{item.orgType|orgTypeFilter}}</p>
                    </div>
                    <div class="price">
                        <p>{{item.hopePrice|priceFilter}}</p>
                    </div>
                    <div class="bottomView">
                        <div class="date">
                            <i class="item_icon icon_date"></i>
                            <span>{{item.releaseDate|formatDate_YMD}}</span>
                        </div>
                        <div class="address" v-bind:title="item.coverAddress|addressFilter">
                            <span>
                                <i class="item_icon icon_address"></i>
                                <em>{{item.coverAddress|addressFilter}}</em>
                            </span>
                        </div>
                    </div>
                </li>
                <!-- 需求 -->
                <li v-for="item in demandList">
                    <div class="mainImage">
                        <router-link :to="{path:'demandDetail',query:{id:item.id}}">
                            <img src="../../../assets/images/search_test.png" alt="">
                            <em class="demandFlag"></em>
                        </router-link>
                    </div>
                    <div class="mainTitle">
                        <span>{{item.demandName}}</span>
                        <i class="item_icon icon_solid" @click="changeDemandCollection(item.id)"></i>
                    </div>
                    <div class="subTitle">
                        <p>{{item.demandType|changeDemandType}}</p>
                    </div>
                    <div class="price">
                        <p>价格面议</p>
                    </div>
                    <div class="bottomView">
                        <div class="date">
                            <i class="item_icon icon_date"></i>
                            <span>{{item.releaseDate|formatDate_YMD}}</span>
                        </div>
                        <div class="address" v-bind:title="item.contactAddress">
                            <span>
                                <i class="item_icon icon_address"></i>
                                <em>{{item.contactAddress}}</em>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import http from "../../config/request";
export default {
  data() {
    return {
      patentList: [], //专利
      demandList: [],//需求
      pageCount:null,
      currentPage:null,
      total:null,
    };
  },
  created() {
    this.getUserInfo();
    this.getCollectionData();
  },
  methods: {
    //初始化获取用户信息
    getUserInfo(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.custId = userInfo.id
        }
    },
    // 上一页
    prev(){
        //当前页大于0
        if(this.currentPage==0){
            this.$message.warning('已经是第一页了');
        }
        if(this.currentPage>0){
            this.getCollectionData(this.currentPage-1);
        }
    },
    //下一页
    next(){
        var pages=Math.ceil(this.total/this.pageCount);
        if(this.currentPage==pages-1){
            this.$message.warning('已经是最后一页了');
        }
        if(this.currentPage<pages-1){
            this.getCollectionData(this.currentPage+1);
        }
    },
    //获取我的收藏数据
    getCollectionData(currentPage,pageCount) {
        if(this.custId != undefined){
            let params = { 
            id:this.custId,
            currentPage:currentPage||0,
            pageCount:pageCount||6
            };
            http.Request("szipee/user!queryColle.action", "POST", null, params).then(res => {
                this.patentList = [];
                this.demandList = [];
                if(res!=null){
                    this.pageCount=res[0].pageCount;
                    this.currentPage=res[0].currentPage;
                    this.total=res[0].dataCounts;
                }
                for (let x in res) {
                    if (res[x].productType == 1) {
                        this.patentList.push(res[x].patentList[0]);
                    }
                    if (res[x].productType == 2) {
                        this.demandList.push(res[x].demandList[0]);
                    }
                }
            });
        }
    },
    //改变专利收藏状态
    changePatentCollection(id) {
      
      let parame = {
        id: this.custId,
        productId: id,
        productType: 1
      };
      http.Request("szipee/user!custColle.action", "POST", null, parame).then(res => {
          if (res.state == "success" && res.info == "取消收藏成功！") {
            this.$message.success("专利取消收藏成功！");
            this.getCollectionData();
          }
        });
    },
    //改变需求收藏状态
    changeDemandCollection(id) {
      let parame = {
        id: this.custId,
        productId: id,
        productType: 2
      };
      http.Request("szipee/user!custColle.action", "POST", null, parame).then(res => {
          if (res.state == "success" && res.info == "取消收藏成功！") {
            this.$message.success("需求取消收藏成功！");
            this.getCollectionData();
          }
        });
    },
  }
};
</script>



