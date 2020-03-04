<template>
  <div class="life">
    <div class="life_top">
      记录路上的“时光”
    </div>
    <el-timeline>
      <el-timeline-item 
        timestamp="2020/12/30"
        placement="top">
        <el-card>
          <h3>去景区溜达溜达</h3>
          <p>欣赏一次家乡里的小风景，挺美好的！</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item 
        timestamp="2020/2/21"
        placement="top">
        <el-card>
          <h3>开工了</h3>
          <p>第一次</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style lang="stylus" scoped>
.life
  .life_top
    height 80px
    line-height 80px
    font-size 30px
    font-weight 800
    border-bottom 1px solid #dadada 
    margin 0 70% 20px 30px
</style>