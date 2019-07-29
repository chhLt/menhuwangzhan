import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    // mode:'history',//取消#号后补
    //配置路由跳转后,滚动条回到number设置的位置
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            component: resolve => require(['@/components/page/index'], resolve),
            mata:{
                title:"首页"
            }
        },
        {
            path: "/selectRegister",
            component: resolve => require(['@/components/page/select_register'], resolve),
            mata:{
                title:"选择注册方式"
            }
        },
        {
            path: "/paregister",
            component: resolve => require(['@/components/page/pa_register'], resolve),
            mata:{
                title:"个人注册"
            }
        },
        {
            path: "/enregister",
            component: resolve => require(['@/components/page/en_register'], resolve),
            mata:{
                title:"企业注册"
            }
        },
        {
            path: "/resetPassword",
            component: resolve => require(['@/components/page/reset_password'], resolve),
            mata:{
                title:"重置密码"
            }
        },
        {
            path: "/searchList",
            component: resolve => require(['@/components/page/search_list'], resolve),
            mata:{
                title:"查询列表"
            }
        },
        {
            path: "/aboutOur",
            component: resolve => require(['@/components/page/about_our'], resolve),
            mata:{
                title:"查询列表"
            },
            children: [
                {
                    path: 'profile', 
                    component: resolve => require(['@/components/common/aboutour/profile'], resolve),
                    mata:{
                        title:"公司简介"
                    }
                },
                { 
                    path: 'contact', 
                    component: resolve => require(['@/components/common/aboutour/contact'], resolve),
                    mata:{
                        title:"联系我们"
                    }
                },
                    
                { 
                    path: 'apply',
                    component:resolve => require(['@/components/common/aboutour/apply'], resolve),
                    mata:{
                        title:"展厅申请"
                    }
                }
            ]
        },
        {
            path:"/downloadCenter",
            component:resolve => require(['@/components/page/download_center'], resolve),
            mata:{
                title:"下载中心"
            },
            children:[
                {
                    path:'dataDownload', 
                    component:resolve => require(['@/components/common/download/data_download'], resolve),
                    mata:{
                        title:"文档下载"
                    },
                },
                {
                    path:'tableDownload',
                    component:resolve => require(['@/components/common/download/table_download'], resolve),
                    mata:{
                        title:"表格下载"
                    },
                },
                {
                    path:'patentDownload',
                    component:resolve => require(['@/components/common/download/patent_download'], resolve),
                    mata:{
                        title:"专利下载"
                    },
                }
            ]
        },
        {
            path: "/infoMedia",
            component: resolve => require(['@/components/page/info_media'], resolve),
            mata:{
                title:"媒体资讯"
            },
        },
        {
            path: "/mediaDetail",
            component: resolve => require(['@/components/page/media_detail'], resolve),
            mata:{
                title:"媒体详情"
            },
        },
        {
            path: "/bargainHall",
            component: resolve => require(['@/components/page/bargain_hall'], resolve),
            mata:{
                title:"交易大厅"
            },
        },
        {
            path: "/bargainDetails",
            component: resolve => require(['@/components/page/bargain_details'], resolve),
            mata:{
                title:"交易详情"
            },
        },
        {
            path: "/serviceHall",
            component: resolve => require(['@/components/page/service_hall'], resolve),
            mata:{
                title:"服务大厅"
            },
        },
        {
            path: "/patentClass",
            component: resolve => require(['@/components/page/patent_class'], resolve),
            mata:{
                title:"专利分类"
            },
        },
        {
            path: "/releasePatent",
            component: resolve => require(['@/components/page/release_patent'], resolve),
            mata:{
                title:"发布专利"
            },
        },
        {
            path: "/releaseDemand",
            component: resolve => require(['@/components/page/release_demand'], resolve),
            mata:{
                title:"发布需求"
            },
        },
        {
            path: "/userCenter",
            component: resolve => require(['@/components/page/user_center'], resolve),
            mata:{
                title:"用户中心"
            },
        },
        {
            path: "/patentList",
            component: resolve => require(['@/components/page/patent_list'], resolve),
            mata:{
                title:"专利列表"
            },
        },
        {
            path: "/patentDetail",
            component: resolve => require(['@/components/page/patent_detail'], resolve),
            mata:{
                title:"专利详情"
            },
        },
        {
            path: "/demandList",
            component: resolve => require(['@/components/page/demand_list'], resolve),
            mata:{
                title:"需求列表"
            },
        },
        {
            path: "/demandDetail",
            component: resolve => require(['@/components/page/demand_detail'], resolve),
            mata:{
                title:"需求详情"
            },
        },
    ]
})
// router.push('/');
export default router