<template>
    <div id="header">
        <div class="headerWrap">
            <div class="header">
                <router-link class="logo" to="/"><img src="./logo.png" alt=""></router-link>
                <!-- <div class="search_input">
                    <el-input placeholder="请输入关键字" v-model="inputVal" class="input-with-select"></el-input>
                    <el-select v-model="select" slot="prepend" placeholder="全部">
                        <el-option label="专利" value="1"></el-option>
                        <el-option label="商标" value="2"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </div> -->
                <div class="phoneWrap">
                    <i class="phone_icon"></i>
                    <div class="content">
                        <span class="phone">0755 - 26470311</span>
                        <span class="time">周一 ~ 周五 09:00-12:00，14:00-18:00</span>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navWrap">
            <ul class="nav">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/serviceHall">服务大厅</router-link></li>
                <li><router-link to="/bargainHall">交易大厅</router-link></li>
                <li><router-link to="/infoMedia">资讯大厅</router-link></li>
                <li><router-link to="/downloadCenter/dataDownload">下载中心</router-link></li>
                <li><router-link to="/aboutour/profile">关于我们</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputVal:'',
                select: ''
            }
        },
        created() {
            
        },
        methods: {
            search(){
                this.$router.push({path:'/searchlist'})
            }
        },
    }
</script>
<style lang="less" rel="stylesheet/less">
    @import '../../../assets/less/index.less';
    .headerWrap{
        width:100%;
        height:100px;
        display:flex;
        justify-content: center;
        background-color:#fff;
        .header{
            width:1230px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .search_input{
                display: flex;
                flex-direction: row;
                .input-with-select{
                    .el-input__inner{
                        border-radius:4px 0px 0px 4px;
                        border: 1px solid #dcdfe6;
                    }
                }
                .el-select {
                    width:143px;
                    .el-input__inner{
                        border: 0px;
                        border-top:1px solid #dcdfe6;
                        border-radius:0px;
                        border-bottom:1px solid #dcdfe6;
                    }
                }
                .input-with-select .el-input-group__prepend{
                    background-color: #fff;
                }
                .el-button{
                    background: @lightThemeColor;
                    color: #fff;
                    border-radius: 0 4px 4px 0;
                    border: 0px;
                    border-top:1px solid @lightThemeColor;
                    border-bottom:1px solid @lightThemeColor;
                    border-right:1px solid @lightThemeColor;
                }
            }
            .phoneWrap{
                height:40px;
                display: flex;
                flex-direction:row;
                .phone_icon{
                    background-image: url('../../../assets/images/icon.png');
                    background-repeat: no-repeat;
                    background-position:0px -88px;
                    width:40px;
                    height: 40px;
                    display: inline-block;
                    margin-right:10px;
                }
                .content{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .phone{
                        font-size:18px;
                        color: #16181e;
                        font-weight: bold;
                    }
                    .time{
                        font-size: 14px;
                        color:#667587;
                    }
                }
            }
            
        }
    }
    .navWrap{
        width:100%;
        height:42px;
        background: @lightThemeColor;
        display:flex;
        justify-content: center;
        .nav{
            width: 1230px;
            height:42px;
            li{
                display:inline-block;
                a{
                    display: inline-block;
                    height: 42px;
                    line-height: 42px;
                    width: 105px;
                    text-align:center;
                    color:#fff;
                }
            }
        }
    }
</style>