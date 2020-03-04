<template>
  <el-row class="index">
    <!-- 首部 -->
    <el-row class="index_top_top"></el-row>
    <el-row class="index_top_bottom">
      <el-col :span="5" :offset="4"><div class="index_top_bottom_one">范宇个人博客</div></el-col>
      <el-col :span="2"><div><router-link to="/first">首页</router-link></div></el-col>
      <el-col :span="2"><div><router-link to="/myBlog">个人博客</router-link></div></el-col>
      <el-col :span="2"><div><router-link to="/life">时间轴</router-link></div></el-col>
      <el-col :span="2"><div><router-link to="/message">留言</router-link></div></el-col>
      <el-col :span="2"><div><router-link to="/me">关于我</router-link></div></el-col>
    </el-row>
    <!-- 中部 -->
    <router-view></router-view>
    <!-- 底部 -->
    <el-row class="index_bottom"> 
      <el-col :span="3" :offset="4">
        <el-image :src="url1"></el-image>
        <span>我的微信</span>  
      </el-col>
      <el-col :span="3">
        <el-image :src="url2"></el-image>
        <span>我的QQ</span>
      </el-col>
      <el-col :span="14">
        <h3>站点声明：</h3>
        <span>1、自己的随笔or分享其它，如有侵权，联系删除。</span><br />
        <span>2、欢迎大家交流学习，言语用词尽量和谐。</span><br />
        <span>3、再说。。。</span>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import weixin from "../../public/weixin.jpg"
import qq from "../../public/qq.jpg"

export default {
  data() {
    return {
      url1:weixin,
      url2:qq
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/index.styl"
</style>