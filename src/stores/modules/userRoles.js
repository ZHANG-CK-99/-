import System from '@/router/modules/System.js'
import { defineStore } from 'pinia'
// console.log(System,'System')ss
export const useUserRole = defineStore('uerRoles',  {
  state: () =>{
      return {
        roles:['A','B','C'],
        routes:[]
      }
  },
    getters:{},
    actions:{
      generatorRoutes(){
        let accessRoutes = []

          accessRoutes = this.handleRoutes([System])
          this.routes = accessRoutes
          return accessRoutes
      },
        handleRoutes(routes){
          let resultRoutes = []
            routes.map(route => {
            if(this.filterPower(route)) {
              if (route.children?.length > 0) {
                route.children = this.handleRoutes(route.children)
              }
              resultRoutes.push(route)
            }
        })
          return resultRoutes
        },
        filterPower(route) {
          if (route.meta && route.meta.power) {
            console.log(route.meta,'route.meta')
            return this.roles.includes(route.meta.power)
          }
            else{
            return true
          }
        }


    }


})
