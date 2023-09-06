<template>
  <div class="flex ali-center h-full jus-space-between">
    <h1 class="el-icon-s-tools" />
    <div class="title">
      个人网站
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo flex-1 mr-20 ml-20"
      mode="horizontal"
      @select="handleClick"
    >
      <el-menu-item
        index="/"
        class="menu-item"
      >
        首页
      </el-menu-item>
      <el-menu-item
        index="/article"
        class="menu-item"
      >
        看文章
      </el-menu-item>
      <el-menu-item
        index="/music"
        class="menu-item"
      >
        听歌
      </el-menu-item>
      <el-menu-item
        index="/express"
        class="menu-item"
      >
        查快递
      </el-menu-item>
    </el-menu>
    <!-- 头像 -->
    <div
      v-if="!isLogined"
      class="login"
      @click="$router.push('/login')"
    >
      加入我们
    </div>
    <div
      v-else
      class="avatar flex"
    >
      <i
        class="el-icon-close logout"
        @click="logout"
      />
      <el-avatar
        slot="reference"
        :src="circleUrl"
      />
    </div>
  </div>
</template>
<script>
import avatarUrl from '@/assets/img/1.jpg'
import Cookie from 'js-cookie'
export default {
  name: 'HeaderArea',
  data () {
    return {
      activeIndex: '/',
      circleUrl: avatarUrl
    }
  },
  computed: {
    isLogined () {
      return this.$store.state.auth.isAuthenticated
    }
  },
  methods: {
    handleClick (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.commit('auth/setAuth', { isAuthenticated: false, isAdmin: false })
      Cookie.remove('token')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-icon-s-tools{
    padding: 20px;
    font-size: 30px;
  }

  .login{
    cursor: pointer;

    &:hover{
      color:#409EFF
    }
  }

  .logout{
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    font-size: 30px;
    transform: translate(-50%, -50%);
  }

  .avatar{
    position: relative;
    cursor: pointer;

    &:hover{
      .logout{
        display: block;
      }
    }
  }

</style>
