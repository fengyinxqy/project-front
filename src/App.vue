<template>
  <div class="home">
    <el-container class="container">
      <el-header class="nav">
        <header-area />
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'AppView',
  components: {
    headerArea: () => import('@/components/header-area.vue')
  }
}
</script>
<style lang="scss" scoped>

  .block{
    width: 500px;
    height: 200px;
    border: 1px solid black;
  }

  .container{
    height: 100vh;
  }

  .el-header, .el-footer {
    color: #333;
    line-height: 60px;
    text-align: center;
    background-color: #fff;
  }

  .el-main {
    color: #333;
    line-height: 160px;
    text-align: center;
    background-color: #E9EEF3;
  }
</style>
