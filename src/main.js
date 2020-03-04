import Vue from "vue";
import vueRouter from "vue-router";
import axios from "axios";
import App from "./App.vue";
import index from "./components/index.vue";
import life from "./components/life.vue";
import message from "./components/message.vue";
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"



Vue.use(vueRouter);
Vue.use(elementUI);
Vue.prototype.$http = axios;

const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes:[
    {
      path:"/",
      component: index,
      redirect:"first",
      children: [
        {
          path: "life",
          component: () => import("./components/life.vue")
        },
        {
          path: "first",
          component: () => import("./components/first.vue")
        },
        {
          path: "myBlog",
          component: () => import("./components/myBlog.vue")
        },
        {
          path: "me",
          component: () => import("./components/me.vue")
        },
        {
          path: "message",
          component: () => import("./components/message.vue")
        },
        {
          path: "one",
          component: () => import("./components/myBlog/one.vue")
        },
        {
          path: "two",
          component: () => import("./components/myBlog/two.vue")
        },
        {
          path: "work",
          component: () => import("./components/mework.vue")
        }
      ]
    }
  ]
}); 


new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
