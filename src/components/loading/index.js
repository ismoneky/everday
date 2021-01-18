import Vue from 'vue'
import loading from './loading.vue'

const CreateLoading = Vue.extend(loading)

const newLoading = new CreateLoading({
    el : document.createElement('div')
})

newLoading.show = false

const $loading = {
    show(){
        newLoading.show = true
        document.body.appendChild(newLoading.$el)
    },
    hide(){
        newLoading.show = false
    }
}

export default {
    install(){
        if(!Vue.$loading){
            Vue.$loading = $loading
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            },
        })
    }
}