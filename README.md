# css
### border 
```
 #box{
    width: 100px;
    height: 100px;
    background: yellowgreen;
    box-shadow: 0px 0px 0px 10px #655;
    margin-left: 50px;
    margin-top: 50px;
}
```
### 
```
#box{
    width: 100px;
    height: 100px;
    background: yellowgreen;
    box-shadow: 0px 0px 0px 10px #655,0px 0px 0px 15px deeppink inset;
    margin-left: 50px;
    margin-top: 50px;
}
```
![image.png](https://i.loli.net/2021/04/30/QKiZfN3qHe6aCGx.png)
### outline方案
```
 #box{
    width: 100px;
    height: 100px;
    background: yellowgreen;
    border: 10px solid #655;
    outline: 5px solid deeppink;
}
```
### background-position的扩展语法方案
```
 #box{
    width: 100px;
    height: 100px;
    background: url('../image/bg.png') no-repeat;
    border: 1px solid #ccc;
    background-position: right 20px bottom 10px;
}
```
![image.png](https://i.loli.net/2021/04/30/QKiZfN3qHe6aCGx.png)
### 边框内圆角
```
.something{
    width: 300px;
    background: #655;
    padding: .8em;
}
.something > div{
    background: tan;
    border-radius: .8em;
    padding: 1em;
}
<div class="something">
    <div>这是一个边框内圆角</div>
</div>
```
![image.png](https://i.loli.net/2021/04/30/HunPUz9JLXVkqFG.png)
### 条纹背景
```
#box{
    width: 100px;
    height: 100px;
    background: linear-gradient(#fb3,#58a);
}
```
![image.png](https://i.loli.net/2021/05/01/gRk2rStmAecs6HM.png)
### 三条条纹
```
#box{
    width: 100px;
    height: 100px;
    background: linear-gradient(#fb3 33.3%,#58a 0,#58a 66.6%,yellowgreen 0);
    background-size: 100% 45px;
}
```

![image.png](https://i.loli.net/2021/05/01/UzX29LrYuyMgjeA.png)
### 垂直条纹
```
#box{
    width: 100px;
    height: 100px;
    background: linear-gradient(to right, #fb3 50%, #58a 0);
    background-size: 30px 100%;
}
```
[垂直条纹](https://dabblet.com/gist/1b4983062fd2b4d7e60e)
![image.png](https://i.loli.net/2021/05/01/UzX29LrYuyMgjeA.png)

