<template>
  <div class="two">
    <h1>Github上传项目</h1>
    <h4>1、新建项目</h4>
    <pre>
      进入Github首页，点击New repository新建一个项目。
    </pre>
    <h4>2、复制出现的https://github.com/xxx/xx.git备用</h4>
    <pre>
      稍后的git上使用这个地址
    </pre>
    <h4>3、进入git bash here</h4>
    <pre>
      cd 到项目目录下
    </pre>
    <h4>4、git init</h4>
    <pre>
      此命令初始化一个新本地仓库，它在工作目录下生成一个名为.git的隐藏文件夹
    </pre>
    <h4>5、git add .</h4>
    <pre>
      此命令将所有的文件加入到暂存区
    </pre>
    <h4>6、git commit -m "我的第一次提交"</h4>
    <pre>
      此命令生成一次提交，将暂存区里的改动给提交到本地的版本库
    </pre>
    <h4>7、git remote add origin https://github.com/Vivianyuwei</h4>
    <pre>
      此命令写仓库url地址（上面有说到） 将本地的仓库关联到github上
    </pre>
    <h4>8、git push -u origin master</h4>
    <pre>
      此命令把本地仓库push到github上面，需要你输入帐号和密码
    </pre>
    <h4>9、git status/git add ./git commit -m "本次更新的说明"/git push origin master</h4>
    <pre>
      此命令用于更新仓库
    </pre>

  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.two
  margin 20px 20% 0
  padding 0 
  pre
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 1.5em;
</style>