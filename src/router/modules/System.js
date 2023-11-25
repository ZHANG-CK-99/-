const System  =   {
    path:'/',
    name:'layout',
    meta:{
        title:'布局页'
    },
    component: () => import('@/views/Layout/index.vue'),
    redirect:'/dashboard',
    children:[
        {
            path:'/dashboard',
            name:'Dashboard',
            component:() => import('@/views/DashBoard/index.vue'),
            meta:{
                title:'面板页',
                affix:false,
                power:'A'
            }
        },
        {
            path:'/userManage',
            name:'UserManage',
            component:() => import('@/views/UserManage/index.vue'),
            meta:{
                title:'用户管理',
                affix: true,
                power:'B'
            }
        },
        {
            path:'/menuManage',
            name:'menuManage',
            component:() => import('@/views/menuManage/index.vue'),
            meta:{
                title:'菜单管理',
                affix: true,
                power:'C'
            }
        }
    ]
}


export default System
