<template>
    <div id="select_register">
        <registerHerder></registerHerder>
        <div class="select_register">
            <router-link to="/paregister">
                <div class="item">
                    <img src="../../assets/images/pa.png" alt="">
                    <span>个人注册</span>
                </div>
            </router-link>
            <router-link to="/enregister">
                <div class="item">
                    <img src="../../assets/images/en.png" alt="">
                    <span>企业注册</span>
                </div>
            </router-link>
        </div>
        <starboard></starboard>
        <bottom></bottom>
    </div>
</template>
<script>
import http from "../config/request";
export default {
    data () {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    components:{
        registerHerder: resolve => {require(['../common/register/header'], resolve)},
        bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
        starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
    }
}
</script>

<style lang="less" rel="stylesheet/less">
    #select_register{
        background: #f4f7fa;
        .select_register{
            width: 1230px;
            margin: 0 auto;
            display:flex;
            justify-content: space-around;
            align-items: center;
            padding: 100px 0;
            .item{
                width: 400px;
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                    display: block;
                    margin-top: 20px;
                    font-size: 24px;
                    color: #232326;
                }
                &:hover{
                    box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
</style>