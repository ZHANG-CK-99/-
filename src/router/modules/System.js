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
            name:'MenuManage',
            component:() => import('@/views/menuManage/index.vue'),
            meta:{
                title:'菜单管理',
                affix: true,
                power:'C'
            },
            children:[
                {
                    path:'/menuManage/rolesManage',
                    name:'RolesManage',
                    component:() => import('@/views/RolesManage/index.vue'),
                    meta:{
                        title:'权限管理',
                        affix: true,
                        power:'D'
                    }
                },
            ]
        }
    ]
}


export default System
