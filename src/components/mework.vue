<template>
  <div class="work">
    <div class="work_top">项目经验详解</div>
    <h3>● 项目1：仿写美团外卖(Vue/Vue-Router/Vuex)</h3>
    <div class="work_item">
      ● 项目技术：Vue/Vue-Router/Vuex
    </div>
    <div class="work_item">
      ● 主要功能：通过路由控制页面切换，使用axios请求数据，利用mockjs模拟数据。vuex的统一状态管理，实现了数据的同一，商品、价格的独立和汇总。
      利用了sessionStorage储存数据状态
    </div>
    <div class="work_item">
      ● 技能掌握：学会了vue-cli脚手架的操作，vuex状态管理，css水平的提高，js的理解更加深刻。
    </div>
    <div class="work_item">
      ● 问题总结：这是学习了差不多3个月的时候，作为练手尝试的作品。但是遇到了很多问题，不过凭借着面向浏览器编程，
      都一一解决了。比如说对于数据的创建，最初只是做了一个json数据，后来在网上知道了mockjs可以模拟数据，让前台axios请求使用。
      让人比较兴奋的大概就是对于轮播图的使用了，当时真的不知道插件，只是凭借着定时器，独自实现了。那个兴奋劲别提有多高了。
      后面的难点就是对商品的加减，价格的加减汇总了。这里面只是依照自己理解，利用vuex的getter计算功能实现了。虽然很不好看，
      但是却也是自己亲手实现的，傲娇。
    </div>
    <h3>● 项目2：任务汇总处理(Vue/koa)</h3>
    <div class="work_item">
      ● 项目技术：Vue/element-ui/koa/mysql/sequelize
    </div>
    <div class="work_item">
      ● 主要功能：登录后台，进行任务的增删改查
    </div>
    <div class="work_item">
      ● 技能掌握：vue和路由的使用的进一步熟练，尝试了webpack的基础配置，element-ui的使用。整个业务流程的认识更加清晰，
      学会了koa请求处理，结果处理，seqeulize对数据库的增删改查。
    </div>
    <div class="work_item">
      ● 问题总结：学习前端有段时间了，对于node也有了认识，知道这东西是前端人应该
      掌握的技能，时间有限，选择学习了koa框架，基本的请求处理能够做到，对于前端请求，区别对待。
      然后就是对数据库的操作了，选择了sequelize这个ORM来操作mysql数据库。数据库的可视化工具是heidiSQL。
      难点很多，前端页面刷新出错，让我知道了historyApiFallback，前端路由配置的路径都是不真实存在的。
      由于任务列表是利用v-for展现的，所以单个的状态管理必须要依靠本身的状态，在数据库增加这个字段，就能控制。
    </div>
    <h3>● 项目3：博客网站(Vue/koa)</h3>
    <div class="work_item">
      ● 项目技术：webpack/Vue/koa/mysql/sequelize/JWT/bcryptjs
    </div>
    <div class="work_item">
      ● 主要功能：网站设计，留言的增删改查
    </div>
    <div class="work_item">
      ● 技能掌握：webpack初步认知，vue，vue-router，css，js进一步提升，对于服务端理解更加深刻，
      学会了jwt的使用，bcrypt加密。对于数据库的关联有了初步的学习。
    </div>
    <div class="work_item">
      ● 问题总结：走到这里，也算是对前面项目的加深吧。就想要做一个完整的网站，水平有限，只能充分的实战所学，
      问题很多，对于css，js的使用，自我感觉还是可以的。网页的布局，主流样式的实现，都能做到了。在vue方面，主要
      还是路由的掌控不是很充足，还需努力的学习。这个项目的难点就是对于留言板的处理了。一开始想着很容易，但是实现的时候，
      发现错了。这里我知道了数据库的关联，1:1,1:n,n:m。有了这个之后，再去处理楼层回复就容易了许多，不过在处理被回复者
      的时候，出现了难点，就是被回复者的名字，如果在textarea中删除了，而且恰好回复内容有英文的冒号就会出现问题。
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.work
  padding 20px
  margin 20px 20% 0
  .work_top
    text-align center
    font-size 25px
    font-weight 800
  .work_item
    background-color #ececec
    border-radius 10px
    padding 15px
    font-size 14px
    line-height 25px
</style>