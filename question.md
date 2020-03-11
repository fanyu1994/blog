## 1.单个楼层控制展现回复框，需要在数据库单起字段0/1（isAnswer）


## 2.数据表关联 ORM sequelize和 sequelize-cli工具的使用

  1：n 用户：留言
  2：n 留言：回复


### 3.vue中的循环创建和展现问题

    vue中v-if 和 v-for不能一起使用。因为处理某项数据，不需要遍历整个数组 可以先把数组在computed中做处理


### 4.回复者，被回复者，展现昵称问题

  回复输入时，如果删除了自动填写的 被回复着昵称和冒号，而且敲好编辑内容出现了英文输入法的冒号，也会出现字符串截取的问题。 (暂时没有好的办法) 

### 5.楼层展现问题

  楼层排序问题“从后往前排（10-1,20-11，30-21）”
  1、reverse翻转数组
  2、10*(当前页面数-1)+当前页面楼层数总和-楼层索引值 = 第几楼

### 6.jwt的使用(记住)

  验证token，减少网络资源浪费，头，主体，密钥
  1.签发token `jwt.sign({name:name,id:id},secret)`
  2.解析 `jwt.decode(token)`
          `jwt.verify(token, secret, (err, decode) => {`
            `if(err){err}`
            `if(decode){`
              `解码之后的 Token 数据`
            `}`
          `})`

### 7.bcrypt密码加密
 
  $2a$10$7qDzDTNHWKff9qXlaUWawedFwilNz.1f9Wyo39SBWpvwlnZY1exzi
  $ 分隔号没有意义
  2a 是bcrypt加密的版本号
  10 是cost的值
  之后的22位是salt值
  接着是密码密文

  1.解密` bacrypt.compareSync(前台登录密码，数据库存储密码)`，返回布尔值
  2.加密`bcrypt.hashSync(登录密码， 1~10)`