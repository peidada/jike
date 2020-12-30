<template>
  <div id="app">
    <router-view/>
<!--    <el-backtop></el-backtop>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  box-sizing: border-box;
  overflow-x: hidden!important;
}
body {
  padding: 0!important;
  width: 100%;
  min-width: 1100px;
  -ms-overflow-style: scrollbar; /*滚动条透明不占位 待验证*/
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
   margin: 0 auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN, SourceHanSansCN-Regular, SourceHanSansCN , Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif!important;
}

/*或设置滚动条宽度为0*/
body::-webkit-scrollbar{
  width: 0;
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333333;
}
</style>
