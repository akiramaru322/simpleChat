import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)

require('bulma/css/bulma.min.css');

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})