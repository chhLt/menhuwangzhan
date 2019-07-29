<template>
    <div id="starboard">
           <el-popover ref="customer" placement="left" width="100" trigger="hover">
                <span> 在线客服</span>
            </el-popover>
            <el-popover ref="account" placement="left" width="100" trigger="hover">
                <span>我的账户</span>
            </el-popover>
            <el-popover ref="wechat" placement="left-start" width="100" trigger="hover">
                <span class="weixin">
                    <img src="../../../assets/images/qrcode.png" alt="">
                    <span class="wordsize">关注微信公众号</span>
                </span>
            </el-popover>
            <el-popover ref="backTop" placement="left" width="100" trigger="hover">
                <span>回到顶部</span>
            </el-popover>
        <div class="starboard">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1827776842&site=qq&menu=yes">
            <el-button class="item_icon spacing" v-popover:customer>
                <i class="icon customer"></i>
            </el-button>
            </a>
            <el-button  class="item_icon spacing" @click="linkUserConter" v-popover:account> 
                <i class="icon-count account"></i>
            </el-button>
            <el-button  class="item_icon spacing" v-popover:wechat> 
                <i class="icon wechat"></i>
            </el-button>
            <el-button  class="item_icon spacing" @click="backTotop" v-popover:backTop>
                <i class="icon goTop"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    created(){
        
    },
    methods:{
        backTotop(){
            //利用scrollBy()和cancelAnimationFrame配合定时器实现动画型回滚到头部
            let timer = null;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(oTop > 0){
                    scrollBy(0,-50);
                    timer = requestAnimationFrame(fn);
                }else{
                    cancelAnimationFrame(timer);
                }
            });
        },
        linkUserConter(){
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(userInfo){
                this.$router.push({path:'/userCenter'})
            }else{
                this.$message({message: '请先登录！！',type: 'warning'});
            }
        }
    }
}
</script>
<style lang="less" rel="stylesheet/less">
.el-popover{
    min-width: 110px;
    span,a{
        display: inline-block;
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
    .weixin{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         img{
            width: 68px;
            height: 68px;
            margin-bottom: 10px;
         }
         span{
             font-size: 10px;
         }
    }
}
#starboard{
    position: fixed;
    z-index: 9999;
    //绝对居中
    top: 50%;
    margin-top: -122px;
    right: 30px;
    .starboard{
    width: 48px;
    height: 244px;
    display: flex;
    flex-direction: column;
    justify-content: center;
        .spacing{
            margin-bottom: 1px;
        }
        .el-button{
            border: none;
            margin-left: 0;
        }
       
        .item_icon{
            background-color: #b0bac5;
            display: inline-block;
            width:48px;
            height:48px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                background-color: #0099fa;
            }
            .icon{
                display: inline-block;
                width: 25px;
                height: 25px;
                background-image: url("../../../assets/images/icon.png");
                background-repeat: no-repeat;
            }
            .icon-count{
                display: inline-block;
                width: 24px;
                height: 25px;
                background-image: url("../../../assets/images/icon.png");
                background-repeat: no-repeat;
            }
            .customer{background-position:0 -40px;}//客服
            .account{background-position:-24px -40px;}//账户
            .wechat{background-position:-72px -40px;}//微信
            .QRcode{background-position:-47px -40px;}//二维码
        }
    }
}

</style>

