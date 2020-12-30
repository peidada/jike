<template>
  <el-menu :default-active="activeIndex" class="el-menu-wrap" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" @click="menuChange('Dashboard')">首页</el-menu-item>
    <el-menu-item index="2" @click="menuChange('Plan')">解决方案</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: '1',
    }
  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    menuChange(name) {
      this.$router.push({
        path: './'+ name
      })
    }
  }
}
</script>

<style scoped>
.el-menu-wrap {
  width: 30%;
  background-color: transparent;
  border-bottom: none;
}

.el-menu-wrap .el-menu-item {
  line-height: 50px;
}
.el-menu-wrap .el-menu-item:hover {
  background-color: transparent;
}
</style>
