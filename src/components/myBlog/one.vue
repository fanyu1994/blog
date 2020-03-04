<template>
  <div class="one">
    <h1>深度优先遍历（BFS）与广度优先遍历（DFS）</h1>
    <h2>1、深度优先遍历（BFS）</h2>
    <pre>
      深度优先遍历(Depth First Search)的主要思想是：
　　　1、首先以一个未被访问过的顶点作为起始顶点，沿当前顶点的边走到未访问过的顶点；
　　　2、当没有未访问过的顶点时，则回到上一个顶点，继续试探别的顶点，直至所有的顶点都被访问过。
    </pre>
    <pre>
      <h3>无向深度优先遍历</h3>
      <el-image :src="one"></el-image>
      第1步：访问A。

      第2步：访问B(A的邻接点)。 在第1步访问A之后，接下来应该访问的是A的邻接点，即"B,D,F"中的一个。
      
             但在本文的实现中，顶点ABCDEFGH是按照顺序存储，B在"D和F"的前面，因此，先访问B。

      第3步：访问G(B的邻接点)。 和B相连只有"G"(A已经访问过了)  

      第4步：访问E(G的邻接点)。 在第3步访问了B的邻接点G之后，接下来应该访问G的邻接点，
            
             即"E和H"中一个(B已经被访问过，就不算在内)。而由于E在H之前，先访问E。

      第5步：访问C(E的邻接点)。 和E相连只有"C"(G已经访问过了)。

      第6步：访问D(C的邻接点)。 

      第7步：访问H。因为D没有未被访问的邻接点；因此，一直回溯到访问G的另一个邻接点H。

      第8步：访问(H的邻接点)F。

      因此访问顺序是：A -> B -> G -> E -> C -> D -> H -> F
    </pre>
    <pre>
      <h3>有向深度优先遍历</h3>
      <el-image :src="two"></el-image>
      第1步：访问A。

      第2步：访问(A的出度对应的字母)B。 在第1步访问A之后，接下来应该访问的是A的出度对应字母，
            
             即"B,C,F"中的一个但在本文的实现中，顶点ABCDEFGH是按照顺序存储，B在"C和F"的前面，因此，先访问B。

      第3步：访问(B的出度对应的字母)F。 B的出度对应字母只有F。 

      第4步：访问H(F的出度对应的字母)。 F的出度对应字母只有H。 

      第5步：访问(H的出度对应的字母)G。

      第6步：访问(G的出度对应字母)E。 在第5步访问G之后，接下来应该访问的是G的出度对应字母，
              
             即"B,C,E"中的一个。但在本文的实现中，顶点B已经访问了，由于C在E前面，所以先访问C。

      第7步：访问(C的出度对应的字母)D。

      第8步：访问(C的出度对应字母)D。 在第7步访问C之后，接下来应该访问的是C的出度对应字母，
            
             即"B,D"中的一个。但在本文的实现中，顶点B已经访问了，所以访问D。

      第9步：访问E。D无出度，所以一直回溯到G对应的另一个出度E。

      因此访问顺序是：A -> B -> F -> H -> G -> C -> D -> E
    </pre>
    <h2>2、广度优先遍历</h2>
    <pre>类似于树的层序遍历</pre>
    <pre>
      <h3>无向广度优先遍历</h3>
      <el-image :src="three"></el-image>
      从A开始，有4个邻接点，“B，C，D，F”，这是第二层；

      在分别从B，C，D，F开始找他们的邻接点，为第三层。以此类推。
      <el-image :src="four"></el-image>
      因此访问顺序是：A -> B -> C -> D -> F -> G -> E -> H
    </pre>
    <pre>
      <h3>有向广度优先遍历</h3>
      <el-image :src="five"></el-image>
      与无向图类似 
      <el-image :src="six"></el-image>
      因此访问顺序是：A -> B -> C -> F -> D -> H -> E -> G
    </pre>
    <div class="one_main">
      <pre>
        &lt;body&gt;
          &lt;div id="root"&gt;
            &lt;h1&gt; 我是h1 &lt;/h1&gt;
            &lt;div&gt;
              &lt;span&gt; 我是div - span &lt;/span&gt;
              &lt;b&gt; 我是div - b &lt;/b&gt;
            &lt;/div&gt;
            &lt;a&gt; 我是a &lt;/a&gt;
          &lt;/div&gt;
          &lt;script&gt;
            // 深度递归
            function deepDG(node, nodeList = []) {
              if (!node) return;
              nodeList.push(node)
              for (let i = 0; i 小于 node.children.length; i++) {
                const item = node.children[i];
                deepDG(item, nodeList)
              }
              return nodeList
            }
            // 深度优先
            function getDeepNodeList(node, nodeList=[]) {
              if (!node) return;
              let stack = [node];
              while (stack.length > 0) {
                const item = stack.pop();
                nodeList.push(item)
                const { children } = item;
                for (let i = children.length - 1; i >= 0; i--)
                  stack.push(children[i])
              }
              return nodeList
            }
            // 广度优先
            function getWildNodeList(node, nodeList = []) {
              if (!node) return;
              let queue = [node];
              while (queue.length > 0) {
                const item = queue.shift();
                nodeList.push(item);
                const { children } = item;
                for (let i = 0; i 小于 children.length; i++)
                  queue.push(children[i])
              }
              return nodeList;
            }
            const node = document.getElementsByTagName('html')[0];
            const nodeList1 = getDeepNodeList(node);
            const nodeList2 = deepDG(node);
            const nodeList3 = getWildNodeList(node);

            console.log(nodeList1, nodeList2, nodeList3)
          &lt;/script&gt;
        &lt;/body&gt;
      </pre>
    </div>
  </div>
</template>
<script>
import one from "../../../public/myBlog/one/1.jpg"
import two from "../../../public/myBlog/one/2.jpg"
import three from "../../../public/myBlog/one/3.jpg"
import four from "../../../public/myBlog/one/4.jpg"
import five from "../../../public/myBlog/one/5.jpg"
import six from "../../../public/myBlog/one/6.jpg"
export default {
  data() {
    return {
      one:one,
      two:two,
      three:three,
      four:four,
      five:five,
      six:six
    }
  }
}
</script>
<style lang="stylus" scoped>
.one
  margin 20px 20% 0
  padding 0 
  pre
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 1.5em;
    .el-image
      width 200px
  .one_main
    background-color white
    

</style>