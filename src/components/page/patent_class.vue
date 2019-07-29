<template>
<div id="demandcls">
    <curheader></curheader>
    <div class="clsCenterWrap">
        <div class="clsCenter">
            <h2 class="title">专利分类</h2>
            <ul class="cls">
                <li v-for="item in option">
                    <h3 class="item_title">{{item.name}}</h3>
                    <div class="item_img">
                        <img :src="item.img" alt="">
                        <div class="item_info">
                            <span>
                                <i>{{item.patentCount}}</i>
                                <em>{{item.total}}个专利</em>
                            </span>
                        </div>
                    </div>
                    <span  class="item_btn"  @click="release(item.id)">发布</span>
                </li>
            </ul>
        </div>
    </div>
    <starboard></starboard>
    <bottom></bottom>
</div>
</template>
<script>
import {typeData} from '../../assets/data/IndustryType';
import http from "../config/request";
export default {
  data() {
    return {
      option:''
    };
  },
  created() {
      this.getPatent();
  },
  methods: {
    //获取专利分类列表
    getPatent() {
			http.Request('szipee/patent!getPatentCount.action','GET').then(res=>{
                if(res!=null){
                    for(let i in typeData){
                        let index =parseInt(i)+1
                        let total = res[index]
                        if(total==undefined){
                            this.$set(typeData[i],'total',0)
                        }else{
                            this.$set(typeData[i],'total',total)
                        }
                    }
                }else{
                    for(let i in typeData){
                        this.$set(typeData[i],'total',0)
                    }
                }
                this.option = typeData
			})
    },
    //发布按钮
    release(id){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.$router.push({path:'/releasePatent',query: {id:id}})
        }else{
            this.$message({message: '请先登录！！',type: 'warning'});
        }
    }
  },
  components: {
    curheader: resolve => {require(['../common/header/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
};
</script>
<style lang="less" rel="stylesheet/less">
#demandcls {
  background-color: #f4f7fa;
  .clsCenterWrap {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .clsCenter {
      width: 1230px;
      padding-bottom: 40px;
      .title {
        padding: 40px 0;
        font-size: 24px;
        color: #16181e;
        text-align: center;
      }
      .cls {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          height: 300px;
          width: 180px;
          background-color: #fff;
          padding-top: 40px;
          padding-bottom: 40px;
          display: flex;
          align-items: center;
          flex-direction: column;
          border-radius: 4px;
          margin-right: 30px;
          margin-bottom: 20px;
          cursor: pointer;
          &:hover .item_img > .item_info {
            display: block;
          }
          &:hover .item_btn {
            color: #fff;
            background-color: #0099fa;
          }
          &:nth-child(6n) {
            margin-right: 0px;
          }
          &:hover {
            box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.1);
          }
          .item_title {
            font-size: 16px;
            color: #16181e;
            margin-bottom: 20px;
          }
          .item_img {
            width: 120px;
            height: 120px;
            border-radius: 60px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-bottom: 30px;
            .item_info {
              position: absolute;
              display: none;
              span {
                background: rgba(0, 0, 0, 0.5);
                width: 120px;
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                flex-direction: column;
                line-height: 24px;
                i {
                  font-size: 24px;
                  font-style: normal;
                }
                em {
                  font-style: normal;
                  font-size: 14px;
                }
              }
            }
          }
          .item_btn {
            width: 130px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            border-radius: 4px;
            background: #fff;
            border: 1px solid #0099fa;
            font-size: 16px;
            color: #0099fa;
          }
        }
      }
    }
  }
}
</style>
