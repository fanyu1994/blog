const Koa = require("koa");
const router = require("koa-router")();
const koaBodyparser = require("koa-bodyparser");
const cors = require("koa-cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("./db/models");

const app = new Koa();
app.use(koaBodyparser());
app.use(cors());

app.use(async (ctx, next) => {
  console.log(ctx.url, ctx.method);
  await next()
});
//查询
router.get("/api/message/:page", async (ctx, next) => {
  let{ page} = ctx.params;
    let limit = 10;
    let offset = (page - 1)*limit
    let result = await models.Message.findAndCountAll({
      limit,
      offset
    });
    let answer = await models.Answer.findAndCountAll();
    ctx.body = {
      result,
      answer
    }
})

//创建评论
router.post("/api/create", async (ctx, next) => {
  const {id, name, content, time} = ctx.request.body;
  let res = await models.Message.create({
    name,
    time,
    content,
    user_id:id
  })
  if (res) {
    let newMessage = await models.Message.findAndCountAll(); 
    ctx.body = {
      success:true,
      result:newMessage,
    }
  }
})

//删除评论
router.delete("/api/remove/:id", async (ctx, next) => {
  const { id } = ctx.params;
  let message = await models.Message.findOne({
    where: {
      id
    }
  });
  if (message) {
    //先删除关联子数据，在删除数据
    await models.Answer.destroy({
      where:{
        message_id:id
      }
    });
    await models.Message.destroy({
      where: {
        id
      }
    });
    message = await models.Message.findAndCountAll();
    ctx.body = {
      success: true,
      info: "评论已删除！",
      message
    }
  } else {
    ctx.body = {
      success: false,
      info: "评论不存在！"
    }
  }
 

})

//修改message状态，控制打开关闭回复栏
router.put("/api/message/update", async (ctx, next) => {
  const {isAnswer, id} = ctx.request.body;
  //先关闭上一个展开的回复框  isAnswer： 1：打开 ， 0：关闭
  //查找展开的回复框
  let messageOne = await models.Message.findOne({
    where: {
      isAnswer
    }
  })
  //如果存在打开的回复框，关闭它
  if (messageOne) {
    await messageOne.update({
      isAnswer:0
    })
  }
  if (id != -1) {
    let message = await models.Message.findOne({
      where:{
        id
      }
    });
    await message.update({
      isAnswer
    });
  }
  let message = await models.Message.findAndCountAll();
  let answer = await models.Answer.findAndCountAll({
    where:{
      message_id:id
    }
  });
  ctx.body = {
    answer,
    message
  }
})

//写回复
router.post("/api/answer/create", async (ctx, next) => {
  const {name, content, time, message_id} = ctx.request.body;
  await models.Answer.create({
    name,
    content,
    time,
    message_id
  });
  let message = await models.Message.findAndCountAll()
  let answer = await models.Answer.findAndCountAll({
    where:{
      message_id
    }
  });
  ctx.body = {
    success:true,
    info:"回复成功！",
    answer,
    message
  }
})

//用户注册
router.post("/reg", async (ctx, next) => {
  const { account, password} = ctx.request.body;
  let user = await models.User.findOne({
    where: {
      username:account
    }
  })
  if (user) {
    ctx.body = {
      success: false,
      info:"账户已存在，无需注册！"
    }
  } else {
    let hashPassword = bcrypt.hashSync(password, 10)
    await models.User.create({
      username:account,
      password:hashPassword
    });
    ctx.body = {
      success: true,
      info:"注册成功！2秒后自动登录~"
    }
  }
})

//用户登录
router.post("/login", async (ctx, next) => {
  let { account, password} = ctx.request.body;
  let user = await models.User.findOne({
    where:{
      username:account
    }
  })
  if (user != null) {//用户存在
    if (!bcrypt.compareSync(password, user.password)) {
      ctx.body = {
        success: false,
        info: "密码错误！"
      }
    } else {
      const userToken = {
        name: user.username,
        id:user.id,
        // time:new Date().getTime(),
        // timeout:1000*60*60*2
      };
      const secret = 'koa221';
      const token = jwt.sign(userToken,secret);//签发token
      ctx.body = {
        success: true,
        token: token
      }
    }
  }else{
    ctx.body = {
      success: false,
      info:"用户不存在！请注册后尝试登录~"
    }
  }
  
})

app.use(router.routes());
app.listen("3000", () => {
  console.log("服务启动成功！")
});

