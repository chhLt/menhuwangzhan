<template>
    <div id="apply_exhibition">
        <div class="content">
            <div class="release_title">
                <div class="release_name">
                    展厅申请
                </div>
                <div class="release_icon">
                    <span @click="prev">
                        <i class="item_icon icon_prev"></i>
                    </span>
                    <span  @click="next">
                        <i class="item_icon icon_next"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="tab_info">
            <div class="noDataWrap" v-if="showroomList==null">
                <div class="noData">
                    <span></span>
                    <p>您还没有展厅申请哦(●ˇ∀ˇ●)~~</p>
                </div>
            </div>
            <div class="tab_details" v-for="item in showroomList">
                <div class="tab_img">
                    <img src="../../../assets/images/search_test.png" alt="">
                </div>
                <div class="tab_con_01">
                    <p>专利名称：
                        <span>{{item.patentName}}</span>
                    </p>
                    <p>
                        <i style="visibility: hidden;">专</i>专利号：
                        <span>{{item.patentId}}</span>
                    </p>
                    <p>行业分类：
                        <span>{{item.orgType|orgTypeFilter}}</span>
                    </p>
                </div>
                <div class="tab_con_02">
                    <p>
                        联系姓名：
                        <span>{{item.contactName}}</span>
                    </p>
                    <p>
                        联系电话：
                        <span>{{item.contactPhone}}</span>
                    </p>
                    <p>Eemail：
                        <span>{{item.contactEmail}}</span>
                    </p>
                </div>
                <div class="tab_con_03">
                    <p>
                        联系地址：
                        <span>{{item.contactAddress}}</span>
                    </p>
                    <p>
                        申请时间：
                        <span>{{item.applyDate|formatDate_YMD}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../../config/request";
export default {
    data () {
        return {
            showroomList:[],
            pageCount:null,
            currentPage:null,
            total:null,
        }
    },
    created() {
        this.getShowroomList()
    },
    methods: {
        getShowroomList(currentPage,pageCount){
            var param={
                 currentPage:currentPage||0,
                 pageCount:pageCount||5
            }
            http.Request("szipee/showroom!queryShowroom.action", "POST", null, param).then(res => {
                if(res!=null){
                this.pageCount=res[0].pageCount;
                this.currentPage=res[0].currentPage;
                this.total=res[0].dataCounts;
            }
            this.showroomList = res;
            });
        },
        // 上一页
    prev(){
        //当前页大于0
        if(this.currentPage==0){
            this.$message.warning('已经是第一页了');
        }
        if(this.currentPage>0){
            this.getShowroomList(this.currentPage-1);
        }
    },
    //下一页
    next(){
        var pages=Math.ceil(this.total/this.pageCount);
        if(this.currentPage==pages-1){
            this.$message.warning('已经是最后一页了');
        }
        if(this.currentPage<pages-1){
            this.getShowroomList(this.currentPage+1);
            }
        },
    },
    components:{

    }
}
</script>

<style lang="less" rel="stylesheet/less">
    .exhibition{
        display:flex;
        justify-content: center;
        li{
            display: flex;
            flex-direction: row;
            width: 1080px;
            padding: 30px 0;
            border-bottom: 1px solid #dfe6ee;
        }
    }
</style>
