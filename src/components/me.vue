<template>
  <div class="me">
    <div class="me_top">
      <el-image :src="me"></el-image>
      <span>范宇</span>
    </div>
    <div class="me_main">
      <div class="me_one">
        <div class="me_hoon"></div>
        联系方式
      </div>
      <div class="me_email">
        <span>● Email : fanyu_1994@163.com</span>
        <span>● QQ : 52902919</span>
      </div>
      <div class="me_one">
        <div class="me_hoon"></div>
        个人信息
      </div>
      <div class="me_email">
        <span>● 范宇 | 男 |1994.12</span>
        <span>● 河南农业大学|农林经济管理|本科</span>
        <span>● 半年自学前端</span>
        <span class="item_block">● Github : 
          <a href="https://github.com/fanyu1994">
            https://github.com/fanyu1994
          </a>
        </span>
      </div>
      <div class="me_one">
        <div class="me_hoon"></div>
        技术掌握
      </div>
      <div class="me_email">
      <span>● 使用vue框架</span>
      <span>● 掌握html、css、ES6、Webpack</span>
      <span>● 使用node/koa框架（请求处理）</span>
      <span>● 使用sequelize对数据库增删改查</span>
      </div>
      <div class="me_one">
        <div class="me_hoon"></div>
        项目经验
      </div>
      <div class="me_email">
      <span>● 仿写美团外卖(Vue/Vue-Router/Vuex)</span>
      <span>● 任务汇总处理(Vue/Koa/mysql)</span>
      <span>● 博客网站(Koa/Vue/mysql)</span>
      </div>
      <div class="me_one">
        <div class="me_hoon"></div>
        <router-link to="/work">工作经验</router-link>
      </div>
      <div class="me_email">
      <span>● 自媒体运营（2018.8~2019.6）</span>
      <span>● 工程项目资料员（2019.6~2019.9）</span>
      <span>● 自学前端（2019.9~）</span>
      </div>
    </div>
  </div>
</template>
<script>
import me from "../../public/fanyu.jpg"
export default {
  data() {
    return {
      me:me
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/me.styl"
</style>