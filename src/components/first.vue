<template>
  <transition name="el-fade-in-linear">
    <el-row class="first">
      <el-row :gutter="20">
        <el-col :span="12" >
          <!-- 轮播图 -->
          <el-carousel>
            <el-carousel-item
              class="item"
              v-for="(item, index) in imageList"
              :key="index">
              <el-image :src="item"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <!-- 两篇文章 -->
        <el-col :span="6">
          <div class="top1">
            <div class="top1_span">美食对创作的影响，你知道有多大吗(程序员)</div>
            <el-image :src="top1" fit="cover"></el-image>
          </div>
          <div class="top2">
            <div class="top1_span">运动产生的快乐，你不知道有多高(程序员)</div>
            <el-image :src="top2" fit="cover"></el-image>
          </div>
        </el-col>
        <!-- 名片 -->
        <el-col :span="6" class="top_end">
          <div class="top_end_all">
            <div class="top_end_all_one">我的名片</div>
            <div class="top_end_all_two">姓名：范宇</div>
            <div class="top_end_all_three">职业：web前端设计师</div>
            <div class="top_end_all_four">现居：河南泌阳</div>
            <div class="top_end_all_five">Email:fanyu_1994@163.com</div>
            <div class="top_end_all_six">
              <el-button  circle @click="toGitHub" title="Github">
                <el-image :src="shouye"></el-image>
              </el-button>
              <el-button circle @click="toMail" title="qq邮箱">
                <el-image :src="youjian"></el-image>
              </el-button>
              <el-button circle @click="toMail" title="" >
                <el-image :src="qq" @mouseover="myqq = true" @mouseout="myqq = false"></el-image>
                <el-image :src="qqer" class="myqq" v-show="myqq"></el-image>
              </el-button>
              <el-button circle @click="toMail" title="qq邮箱">
                <el-image :src="weixin" @mouseover="myweixin = true" @mouseout="myweixin = false"></el-image>
                <el-image :src="weixiner" class="myqq" v-show="myweixin"></el-image>
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row> 
      <el-row :gutter="20" class="two">
        <el-col :span="18">
          <div class="two_left">
            <el-tabs
            v-model="activeItem" 
            @tab-click="handleClick">
            <!-- 个人博客 -->
            <el-tab-pane label="个人博客" name="one">
              <div 
              class="item" 
              @mouseover="itemNum = 1"
              :class="{active:itemNum == 1}">
                <div class="item_num">1</div>
                <span class="item_title">享受失败的煎熬</span>
                <p class="item_p" v-show="itemNum == 1">秦王朝被推翻后。项羽和刘邦为争夺帝位，
                  进行了数年战争，史称“楚汉相争”。
                  在近五年的楚汉战争中，项羽由强大转为弱小。
                  最后被刘邦的军队包围，项羽带着十几个部下逃到乌江边
                </p>
              </div>
              <div 
              class="item" 
              @mouseover="itemNum = 2"
              :class="{active:itemNum == 2}">
                <div class="item_num">2</div>
                <span class="item_title">成功不一定是好事</span>
                <p class="item_p" v-show="itemNum == 2">23岁的时候我年入500万，
                  在一个4-5线的小城市靠自己赚那么多，
                  感觉我已经很牛了，别人都是靠关系 靠爸妈，
                  我靠我自己！很狂妄，无形当中得罪了很多人，
                  当时真的是目中无人，认为钱可以解决一切！
                </p>
              </div> 
              <div 
              class="item" 
              @mouseover="itemNum = 3"
              :class="{active:itemNum == 3}">
                <div class="item_num">3</div>
                <span class="item_title">曲突徒薪</span>
                <p class="item_p" v-show="itemNum == 3">
                  有位客人到某人家里做客，
                  看见主人家的灶上烟囱是直的，
                  旁边又有很多木材。客人告诉主人说，
                  烟囱要改曲，木材须移去，否则将来可能会有火灾，
                  主人听了没有作任何表示。
                </p>
              </div>
              <div 
              class="item" 
              @mouseover="itemNum = 4"
              :class="{active:itemNum == 4}">
                <div class="item_num">4</div>
                <span class="item_title">扁鹊的医术</span>
                <p class="item_p" v-show="itemNum == 4">
                  事后控制不如事中控制，事中控制不如事前控制，
                  可惜大多数的事业经营者均未能体会到这一点，
                  等到错误的决策造成了重大的损失才寻求弥补。
                  而往往是即使请来了名气很大的"空降兵"，结果于事无补。
                </p>
              </div>
            </el-tab-pane>
            <!-- 学习经历 -->
            <el-tab-pane label="学习经历" name="two">
              <div
                class="item"
                @mouseover="itemNum2 = 1"
                :class="{active:itemNum2 == 1}">
                <div class="item_num">1</div>
                <span class="item_title">孟母断布</span>
                <p class="item_p" v-show="itemNum2 == 1">
                  古时候，有个学问家叫孟轲。他刚上学的时候，
                  很用心，写字一笔一划，很工整。不久，
                  他觉得学习太辛苦，不如在外面玩耍快活。
                  于是，他逃学了，常到山坡上树林中去玩
                </p>
              </div>
              <div
                class="item"
                @mouseover="itemNum2 = 2"
                :class="{active:itemNum2 == 2}">
                <div class="item_num">2</div>
                <span class="item_title">映雪囊萤</span>
                <p class="item_p" v-show="itemNum2 == 2">
                  晋朝时候，有一个人名叫孙康，非常好学。
                  他家里很穷买不起灯油，夜晚不能读书，
                  他就想尽办法刻苦地学习。冬天夜里，
                  他常常不顾天寒地冻，在户外借着白雪的光亮读书。 
                </p>
              </div>
              <div
                class="item"
                @mouseover="itemNum2 = 3"
                :class="{active:itemNum2 == 3}">
                <div class="item_num">3</div>
                <span class="item_title">苏秦刺股</span>
                <p class="item_p" v-show="itemNum2 == 3">
                  战国时期，有一个人名叫苏秦，也是出名的政治家。
                  在年轻时，由于学问不多不深，曾到好多地方做事，
                  都不受重视。回家后，家人对他也很冷淡，瞧不起他。
                  这对他的刺激很大。所以，他下定决心，发奋读书。
                  他常常读书到深夜，很疲倦，常打盹，直想睡觉
                </p>
              </div>
              <div
                class="item"
                @mouseover="itemNum2 = 4"
                :class="{active:itemNum2 == 4}">
                <div class="item_num">4</div>
                <span class="item_title">孙敬悬梁</span>
                <p class="item_p" v-show="itemNum2 == 4">
                  东汉时候，有个人名叫孙敬，是着名的政治家。
                  他年轻时勤奋好学，经常关起门，独自一人不停地读书。
                  每天从早到晚读书，常常是废寝忘食。读书时间长，
                  劳累了，还不休息。时间久了，疲倦得直打瞌睡。
                </p>
              </div>
            </el-tab-pane>
            <!-- 成长经历 -->
            <el-tab-pane label="成长经历" name="three">
              <el-timeline :reverse="true">
                <el-timeline-item
                  v-for="(item,index) in lifeList"
                  :key="index"
                  :timestamp="item.timestamp">
                  {{ item.content }}
                </el-timeline-item>
              </el-timeline>
            </el-tab-pane>
          </el-tabs>
          </div>
        </el-col>
        <!-- 右侧文学 -->
        <el-col :span="6" class="two_right">
          <div class="two_right_all">
              <div class="two_right_top">
                最近更新
              </div>
              <div class="two_right_item">时间告诉我们，感情可以变淡，说过的话可以不算，爱过的人可以再换</div>
              <div class="two_right_item">感情没有先来后到，明明是我先遇见你，你却把你的温柔和耐心全部给了后来的人。</div>
              <div class="two_right_item">没资格吃的醋最酸，先动心的人最惨。</div>
              <div class="two_right_item">感情的世界里，根本就难以存在好聚好散，总有一个拔腿先走，另一个原地发呆。</div>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </transition>
</template>
<script>
import img1 from "../../public/first/1.jpg"
import img2 from "../../public/first/2.jpg"
import img3 from "../../public/first/3.jpg"
import img4 from "../../public/first/4.jpg"
import img5 from "../../public/first/5.jpg"
import top1 from "../../public/first/top1.jpg"
import top2 from "../../public/first/top2.jpg"
import shouye from "../../public/first/shouye.svg"
import youjian from "../../public/first/youjian.svg"
import qq from "../../public/first/qq.svg"
import weixin from "../../public/first/weixin.svg"
import weixiner from "../../public/weixin.jpg"
import qqer from "../../public/qq.jpg"

export default {
  data() {
    return {
      imageList: [img1,img2,img3,img4,img5],
      top1:top1,
      top2:top2,
      shouye:shouye,
      youjian:youjian,
      weixin:weixin,
      qq:qq,
      weixiner:weixiner,
      qqer:qqer,
      myqq:false,
      myweixin:false,
      activeItem:"one",
      itemNum:1,
      itemNum2:1,
      lifeList:[]
    }
  },
  created() {},
  mounted() {
    this.lifeList = [
      {
        content:"初中（花园乡中心学校）",
        timestamp: "2008.9~2011.6"
      },
      {
        content: "高中（泌阳县第一高级中学）",
        timestamp:"2011.9~2014.6"
      },
      {
        content: "大学（河南农业大学）",
        timestamp:"2014.9~2018.6"
      }
    ]
  },
  methods:{
    toGitHub() {
      window.open("https://github.com/fanyu1994")
    },
    toMail() {
      window.open("http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=mquqqK_rr6mso63a6_u0_fX3")
    },
    handleClick(tab,event){
      console.log(tab, event)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/first.styl"
</style>