const notFound  =   [{
    path:'/:pathMatch(.*)*',
    redirect:'/404'
},{
    path:'/404',
    component: () => import('@/views/404.vue'),
}]


export default notFound
