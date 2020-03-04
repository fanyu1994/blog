<template>
  <div class="blog"> 
    <div class="blog_top">
      <div class="blog_top_left">
        <el-image :src="tou"></el-image>
      </div>
      <div class="blog_top_right">
        <h2>
          个人博客
        </h2>
        <span class="blog_top_main">
          个人博客日记，记录一些美好的事物！分享开心快乐！
        </span>
      </div>
    </div>
    <div class="blog_main">
      <div class="blog_main_top">
        最新博文
      </div>
      <div class="blog_main_main">
        <div class="blog_main_item">
          <div class="title">
            <router-link to="/one">
              深度优先遍历（BFS）与广度优先遍历（DFS）
            </router-link>
          </div>
          <el-image :src="one"></el-image>
          <div class="item_right">
            <div class="item_right_top">
              来点图记录一下学习的知识，好记性真的不如烂笔头哦。
            </div>
            <div class="item_right_middle">
              范宇
              2020年3月2日
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tou from "../../public/myBlog/tou.jpg"
import one from "../../public/myBlog/one.jpg"
export default {
  data() {
    return {
      tou:tou,
      one:one
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/myBlog.styl";
</style>