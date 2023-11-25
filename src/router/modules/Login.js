const Login  = {
    path: '/login',
    name: 'login',
    meta:{
        title:'登录页'
    },
    component: () => import('@/views/Login/index.vue')
}


export default Login
