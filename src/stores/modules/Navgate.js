import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('navgate',  {
  state: () =>{
      return {
          currentTagView:'',
          tagsViewList:[]
      }
  },
    getters:{},
    actions:{
      addTagView(route){
          // console.log(route,'route')
          if(this.tagsViewList.some(v => v.path == route.path)) return
         this.tagsViewList.push({
             title:route.meta.title,
             path:route.path,
             affix:route.meta.affix ?? false
         })

      },
    changeTagView(value)  {
      this.currentTagView = value
    },
    deleteTagView(path){
        let index = this.tagsViewList.findIndex(v => v.path === path)
        this.tagsViewList.splice(index,1)
        if(this.currentTagView === path){
            index === 0 ? (index += 1) : index
            if(this.tagsViewList.length === 0){
                this.tagsViewList.push({
                    title:'面板页',
                    path:'/dashboard',
                    affix:false
                })
            }
            this.currentTagView = this.tagsViewList[index - 1].path

        }

    }

    }


})
