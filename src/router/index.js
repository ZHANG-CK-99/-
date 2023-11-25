import { createRouter, createWebHistory } from 'vue-router'
import {storeToRefs} from 'pinia'
import useStore from '@/stores'


const routes = []
const  modules = import.meta.glob('./modules/*.js', {eager:true})
console.log(modules,'modules')

for(const path in modules){
    // console.log(path,'path')
    if(path == './modules/System.js') continue
    if(Array.isArray(modules[path].default)){
        modules[path].default.map(v => routes.push(v))
    }else {
        routes.push(modules[path].default)
    }
    // console.log(routes,'routes')
}
// console.log(routes,'routes')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


//定义白名单
const whiteList= ['/login']

router.beforeEach((to,from,next) => {
  const {userRole} = useStore()
  const {roles,routes} = storeToRefs(userRole)

  const hasToken = "MMMM"
  if(hasToken){
        if(to.path === '/login'){
            next({path:'/'})
        }else {

            const hasRoute = roles.value && routes.value.length > 0
            if(hasRoute){
                next()
            }else{
                // console.log(router,'router')
                console.log(to.redirectedFrom,'to.redirectedFrom')
                const SystemRoutes = userRole.generatorRoutes()

                SystemRoutes.map(res => {
                    router.addRoute(res)

                })
                console.log(to,'to.redirectedFrom')
                if(to.path == '/404' && to.redirectedFrom != undefined){

                    next({path:to.redirectedFrom?.fullPath, replace: true})
                }else{
                    next()
                }
            }
        }
  }else{
    whiteList.includes(to.path) ? next() : next('/login')
  }
})

export default router
