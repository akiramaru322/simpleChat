import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
        ,
        {
            path: '/chat',
            name: 'Chat',
            component: Chat,
            props: true,
            beforeEnter: (to, from, next)=>{
                if( to.params.name ){
                    next()
                }
                else{
                    next({name: 'Home'})
                }
            }
        }
    ]
})