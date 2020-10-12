import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieAnimation from "lottie-vuejs"; // import lottie-vuejs
 
Vue.use(LottieAnimation); // add lottie-animation to your global scope
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
