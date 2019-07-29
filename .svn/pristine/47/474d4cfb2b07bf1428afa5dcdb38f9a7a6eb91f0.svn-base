<template>
<div id="table_download">
    <div  class="download_center">
        <p class="title">专利文件下载</p>
        <div class="download">
            <template>
            <el-table :data="tableList" border style="width: 100%">
                <el-table-column prop="documentName" label="文档名称" width="523"></el-table-column>
                <el-table-column prop="documentName | getType" label="文档类型" width="135" align="center">
                    <template slot-scope="scope">
                        <i class="file_type" v-bind:class="scope.row.documentName.substr(scope.row.documentName.length-3)"></i>
                    </template>
                </el-table-column>
                <el-table-column  label="操作"  width="135" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" v-on:click="downloadDoc(scope.row.id)">下载</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </template>
        </div>
        <div class="pagination">
            <div class="block" v-show="pstatus">
                <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize" 
                    layout="prev, pager, next, jumper"
                    :total="total"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {BaseUrl} from '../../config/constUrl';
import http from "../../config/request";
export default {
    data () {
        return {
            tableList:[],
            pstatus:true,//分页是否显示
            currentPage:1,//当前页
            pageSize:null,//每页条数
            total:null,//数据总数
        }
    },
    created() {
        this.gettableList()
    },
    methods: {
        //分页切换事件
        handleCurrentChange(val) {
            this.gettableList(parseInt(val)-1,10);
        },
        //获取表格数据
        gettableList(currentPage,pageCount){
            let params ={
                documentType:3,
                currentPage:currentPage||0,
                pageCount:pageCount||10
            }
            http.Request("szipee/cms!queryDocment.action", "POST", null, params).then(res => {
                this.tableList = res;
                this.currentPage=parseInt(res[0].currentPage)+1;
                this.pageSize=res[0].pageCount;
                this.total=res[0].dataCounts;
            });
        },
        //下载文档
        downloadDoc(id){
            console.log(id)
            window.location.href = BaseUrl+"/szipee/downloadDoc?type=3&id="+id
        }
    },
    components:{

    }   
}
</script>
<style lang="less" rel="stylesheet/less">
    @import "../../../assets/less/index.less";
    //下载中心
    #table_download{
        .file_type{
            display: inline-block;
            width: 35px;
            height: 35px;
            background-image: url("../../../assets/images/filetype.png");
            background-repeat: no-repeat;
        }
        .word{
            background-position: -5px 0px;
        }
        .pdf{
            background-position: -50px 0px;
        }
        .rar{
            background-position: -97px 0px;
        }
        .el-table--border td, .el-table--border th{
            border-right: none;
        }
        .el-table td, .el-table th{
            padding:12px 0 12px 24px;
        }
    }
</style>
