<template>
  <div class="message">
    <!-- 头部 -->
    <div class="message_top">
      <div class="message_top_title">留言板</div>
      <div class="message_top_middle">
        <!-- 状态区 -->
        <div class="message_top_login">
          <div
            ref="message_top_login_left"
            class="message_top_login_left"
            @click="open">
              {{message_top_login_left}}
          </div>
          <div
            v-if="isQuit"
            class="message_top_login_right"
            @click="quit">
            退出
          </div>
        </div>
        <!-- 写留言区 -->
        <textarea
          maxlength="200"
          v-model="textarea"
          name="content" 
          id="message"
          placeholder="说点啥吧...">
        </textarea>
        <el-button type="success" @click="submit">提交</el-button>
      </div>
    </div>
    <!-- 登录区 -->
    <transition name="el-zoom-in-top">
      <div class="message_login" v-if="message_login">
        <div class="login">
          <div class="login_title">登录</div>
          <el-image :src="url" class="login_X" @click="close"></el-image>
          <div class="account_name" :class="{active:!isAccount}">昵称（必填）
            <div v-show="a">
              <el-image :src="duihao" class="duihao" v-show="isAccount"></el-image>  
              <el-image :src="cuohao" class="cuohao" v-show="!isAccount"></el-image>
              <div class="account_span" ref="account">
                <span>{{ accountSpan }}</span>
              </div>
            </div>
          </div>
          <input
            maxlength="20" 
            @keyup="fd"
            @keyup.enter="$event.target.blur"
            @blur="accountBlur"
            type="text" 
            name="account" 
            v-model="account" 
            class="account"
            placeholder="小明/king/123"
            />     
          <div class="password_name">密码（必填）
            <div v-show="b">
              <el-image :src="duihao" class="duihao" v-show="isPassword"></el-image>  
              <el-image :src="cuohao" class="cuohao" v-show="!isPassword"></el-image>
              <div class="account_span" ref="password">
                <span>{{ passwordSpan }}</span>
              </div>
            </div>
          </div>
          <input 
            @keyup="fd"
            @keyup.enter="login"
            @blur="passwordBlur"
            type="password" 
            name="password" 
            v-model="password"
            class="password"
            placeholder="123456" />
          <div class="login_footer">
            <el-button type="success" @click="login">登录</el-button>  
            <el-button @click="reg">注册</el-button>  
          </div>
        </div>
      </div>
    </transition>
    <!-- 留言区 -->
    <div class="message_bottom">
      <div
      class="message_bottom_item"
      v-for="(item, index) in messageList"
      :key="index">
      <!-- 左侧大白 -->
        <div class="item_name">
          <div class="item_bai">
            <div class="item_img nine"></div>
            <div class="item_img ten"></div>
            <div class="item_img eight">
              <span class="name">{{item.name.slice(0,1)}}</span>
            </div>
            <div class="item_img one"></div>
            <div class="item_img two"></div>
            <div class="item_img three"></div>
            <div class="item_img four"></div>
            <div class="item_img five"></div>
            <div class="item_img six"></div>
            <div class="item_img seven"></div>
          </div>
          {{item.name}}
        </div>
        <div class="item_content">{{item.content}}</div>
        <div class="item_footer">
          <span class="item_id">
            {{ curPageNum+messageList.length-index}} 楼
          </span>        
          <span 
            class="item_remove"
            v-if="item.name == account"
            @click="removeItem(item)">删除</span>
          <span class="item_time">{{item.time}}</span> 
          <span 
            class="item_answer" 
            @click="handleAnswer(item,index)"
            v-show="!item.isAnswer">回复</span>
          <span 
            class="item_answer" 
            @click="handleAnswer(item,index)"
            v-show="item.isAnswer">收起</span> 
        </div>
        <!-- 回复内容区 -->
        <transition name="el-zoom-in-top">
          <div class="item_answer_main" v-if="item.isAnswer">
          <div class="answer_top"></div>
          <div class="answer_middle">
            <div 
              v-for="(as, asIndex) in answerList.slice(0,sliceNum)"
              :key="asIndex"
              >
              <div 
                v-if="as.message_id == item.id" 
                class="answer_as">
                <span>{{ as.name }}:</span>
                <span>
                  回复
                  <span class="to_name">{{ toName }}:</span>
                  {{as.content}}
                </span>
                <span>{{as.time}}</span>
                <span 
                  @click="handleAnswer2(item,as,index)">
                  回复
                </span>
              </div>
            </div>
          </div>
          <div class="answer_bottom">
            <textarea
            @focus="handleFocus(item,index)"
            v-model="answerTextarea[index].value"
            maxlength="200"
            name="answerText" 
            id="answer_text" 
            cols="55" 
            rows="2"></textarea>
            <div 
              class="answer_more" 
              v-if="answerResNum > 0"
              v-show="isMore">
              还有{{answerResNum}}条回复，
              <span 
                class="answer_more_click"
                @click="handleMore">点击查看</span>
            </div>
            <button type="primary" @click="handlePublish(item,index)">发表</button>
          </div>
          </div>
        </transition>
      </div>
      <div class="pagination">
        <span
          @click="backItem">
          &lt;
        </span>
        <span
          :class="{active:index+1 == currentPage}" 
          v-for="(item, index) in pageNum"
          :key="index"
          @click="pageClick(index)">{{index+1}}
        </span>
        <span
        @click="goItem">
          &gt;
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import close from "../../public/message/close.svg"
import duihao from "../../public/message/duihao2.svg"
import cuohao from "../../public/message/cuohao.svg"
import {debounce} from "../js/debounce.js"
import jwt from "jsonwebtoken"

export default {
  data() {
    return {
      sliceNum:3,
      messageList:[],
      account:"",
      password:"",
      message_top_login_left:"^_^请先登录吧~~",
      message_login:false,
      isQuit:false,
      url:close,
      duihao:duihao,
      cuohao:cuohao,
      a:false,
      isAccount:true,
      accountSpan:"",
      b:false,
      isPassword:true,
      passwordSpan:"",
      toName:"",
      textarea:"",
      answerList:[],
      isMore:true,
      answerTextarea:[],
      //总页码数
      pageNum:[],
      //显示楼层计算值
      curPageNum:0,
      //当前页码
      currentPage:1
    }
  },
  created() {
    //如果登陆过
    const user = this.getUser();
    if (user) {
      this.isQuit = true
      this.account = user.name
      this.message_top_login_left = `欢迎${user.name}!`
    }
    this.$nextTick(() => {
      this.$http.put("http://localhost:3000/api/message/update",{
      isAnswer:1,
      id:-1
      }).then(res => {
        console.log("刷新一次不管用的问题")
      })
      //获取第一页所有留言
      this.getMessage(1);
    })
  },
  mounted() {},
  computed: {
    answerResNum:function(){   
      let num = 0
      num = this.answerList.length - 3
      return num
    }
  },
  methods: {
    backItem(){
      if (this.currentPage>1) {
        this.pageClick(this.currentPage-2)
      } 
    },
    goItem(){
      if (this.currentPage<this.pageNum.length) {
        this.pageClick(this.currentPage)
      } else{
        console.log(233);
      }
    },
    pageClick(index){
      this.getMessage(index+1)
      this.curPageNum = 10*(index)
      this.currentPage = index+1
    },
    //获取留言
    getMessage(page) {
      this.$http.get("http://localhost:3000/api/message/"+page)
      .then(res => {
        this.messageList = res.data.result.rows.reverse()
        this.answerList = res.data.answer.rows.reverse()
        this.pageNum.length = Math.ceil(res.data.result.count/10)
        this.answerTextarea = [...new Array(res.data.result.count)]
        .map(() => ({"value":""}))
      })
      .catch(err => {
        console.log(err)
      })
    },
    //打开回复窗
    handleAnswer(param,index){
      //answer条数展现，点击展现三条，剩余隐藏
      this.isMore = true
      this.sliceNum = 3
      //提交变更message的回复展开状态isAnswer
      //点击展开当前，关闭其它
      let status = param.isAnswer
      status == 1 ? status = 0 : status = 1
      this.$http.put('http://localhost:3000/api/message/update', {
        isAnswer:status,
        id:param.id,
      })
      .then(res => {
        // this.getMessage(-1)
        this.messageList = res.data.message.rows.reverse()
        this.answerList = res.data.answer.rows.reverse()
        this.pageClick(this.currentPage)
      })
    },
    //打开回复窗2
    handleAnswer2(item,as,index) { 
      this.$set(this.answerTextarea,index,{value:as.name+":"})
    },
    //回复框选中
    handleFocus(item,index){
      let value = this.answerTextarea[index].value
      if (!value) {
        this.$set(this.answerTextarea,index,{value:item.name+":"})
      }
    },
    //提交回复
    handlePublish(item,index) { 
      if (!this.isQuit) {
        this.$message.error("对不起！您还没有登录，请登录后尝试！")
        return 
      }
      if (this.answerTextarea == "") {
        this.$message.error("提交内容不能为空！")
        return 
      }
      this.toName = this.answerTextarea[index].value.split(":")[0]
      //当出现手打 ： 时还是会出现问题。。。
      let contentCur = this.answerTextarea[index].value
        .includes(":")?
        this.answerTextarea[index].value.split(":")[1] 
        :this.answerTextarea[index].value
      let obj = {
        message_id:item.id,
        name: this.account,
        content: contentCur,
        time:this.getCurrentDate()
      }
      this.$http.post("http://localhost:3000/api/answer/create", obj)
      .then(res => {
        if (res.data.success) {
          this.$message({
            type:"success",
            message:res.data.info
          });
          this.answerList = res.data.answer.rows.reverse()
          //提交完清空输入框内容
          this.$set(this.answerTextarea,index,{value:""})
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    //展开剩余回复
    handleMore(){
      this.sliceNum = this.answerList.length
      this.isMore = false
    },
    //提交留言
    submit() {
      if (!this.isQuit) {
        this.$message.error("对不起！您还没有登录，请登录后尝试！")
        return
      };
      if (this.textarea == "") {
        this.$message.error("请输入留言内容！")
        return
      };
      this.$message({
        type: 'success',
        message: '提交成功!'
      });
      let obj = {
        id:jwt.decode(sessionStorage.getItem("koa")).id,
        name:this.account,
        content:this.textarea,
        time: this.getCurrentDate()
      };
      this.$http.post("http://localhost:3000/api/create", obj)
      .then(res => {
        this.messageList = res.data.result.rows.reverse()
        this.pageClick(Math.ceil(res.data.result.count/10)-1)
        this.answerTextarea = [...new Array(res.data.result.count)]
        .map(() => ({"value":""}))
        this.textarea = ""
      })
      .catch(err => {
        console.log(err)
      });
    },
    //删除留言
    removeItem(param) {
      this.$http.delete("http://localhost:3000/api/remove/"+param.id)
      .then(res => {
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "评论删除成功！"
          })
          this.messageList = res.data.message.rows.reverse()
          this.pageClick(Math.ceil(this.currentPage)-1)
        } else {
          this.$message.error(res.data.info)
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    //退出登录
    quit() {
      this.isQuit = false;
      this.account = "";
      this.password = "";
      this.message_top_login_left = "^_^请先登录吧~~";
      sessionStorage.setItem("koa", null);
    },
    //打开登录框
    open() {
      if (this.account) {
        return
      }
      this.message_login = true
    },
    //关闭登录框
    close() {
      this.message_login = false
    },
    //注册账号
    reg() {
      this.format()
      if (!this.format()) {
        return
      };
      this.accountSpan = "格式正确"
      this.passwordSpan = "格式正确"
      let obj = {
        account:this.account,
        password:this.password
      };
      this.$http.post("http://localhost:3000/reg", obj).then(res => {
        if (res.data.success) {
          this.$message({
            type:"success",
            message:res.data.info
          })
          //自动登录
          setTimeout(() => {
            this.login()
          }, 2000);
        } else {
          this.$message.error(res.data.info)
        }
      })
      
    },
    //登录账号
    login() {
      this.format()
      if (!this.format()) {
        return
      };
      let obj = {
        account: this.account,
        password: this.password
      };
      this.$http.post("http://localhost:3000/login", obj)
      .then(res => {
        if (res.data.success) {
          //登陆成功
          sessionStorage.setItem("koa", res.data.token)
          this.message_login = false
          this.message_top_login_left = `欢迎${this.account}`
          this.$message({
            type: "success",
            message: "登陆成功！"
          })
          this.isQuit = true
        } else {
          //登陆失败
          this.$message.error(res.data.info)
          sessionStorage.setItem("koa", null)//清空token
        }
      })
      .catch(err => {
        console.log(err)
        this.$message.error("请求错误！")
        sessionStorage.setItem("koa", null)//清空token
      })
    },
    //账号格式提醒
    accountBlur() {
      if (this.account.length > 1) {
        this.a = true
        this.isAccount = true
        this.accountSpan = "格式正确"
      } else {
        this.a = true
        this.isAccount = false
        this.accountSpan = "账户格式错误：字符少于2"
      }
    },
    //密码格式提醒
    passwordBlur() {
      if (this.password.length > 2) {
        this.b = true
        this.isPassword = true
        this.passwordSpan = "格式正确"
      } else {
        this.b = true
        this.isPassword = false
        this.passwordSpan = "密码格式错误：字符少于3"
      }
    },
    //防抖去空格
    fd:debounce (function() {
      this.account = this.account.replace(/\s*/g,'')
      this.password = this.password.replace(/\s*/g,'')
    }, 100),
    //刷新后获取用户的方法
    getUser() {
      const token = sessionStorage.getItem("koa");
      if (token != null && token != "null") {
        let decode = jwt.decode(token);
        return decode;
      }else{
        return null
      }
    },
    //获取此刻时间2020-2-27 15:10:22
    getCurrentDate() {
      var timeStr = '-';
      var curDate = new Date();
      var curYear =curDate.getFullYear();  //获取完整的年份(4位,1970-????)
      var curMonth = curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
      var curDay = curDate.getDate();       //获取当前日(1-31)
      var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
      var curHour = curDate.getHours();      //获取当前小时数(0-23)
      var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
      var curSec =curDate.getSeconds();      //获取当前秒数(0-59)
      var Current= curYear+timeStr+curMonth+timeStr+curDay
      + " " + curHour + ":" + curMinute + ":" + curSec
      return Current;
    },
    //登录，注册前验证
    format() {
      if (this.account.length < 2 || this.password.length < 3) { 
        if (this.password.length < 3) {
          this.b = true
          this.isPassword = false
          this.passwordSpan = "密码格式错误：字符少于3"
        }
        if (this.account.length < 2) {
          this.accountSpan = "账户格式错误：字符少于2"
        }
        this.$message.error("账号或密码格式错误，请重新填写尝试！")
        return false
      }
      return true
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../css/message.styl"
</style>