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




