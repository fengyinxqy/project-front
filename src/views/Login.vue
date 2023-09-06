<template>
  <div class="login">
    <el-tabs
      v-model="activeName"
      type="border-card"
      class="change-tabs"
      stretch
    >
      <el-tab-pane
        label="登陆"
        name="login"
      >
        <el-form
          ref="loginForm"
          :model="loginForm"
          label-width="80px"
          class="login-form"
        >
          <el-form-item
            required
            label="账号"
            prop="username"
          >
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item
            required
            label="密码"
            prop="password"
          >
            <el-input
              v-model="loginForm.password"
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleLogin"
            >
              登录
            </el-button>
            <el-button @click="handleReset('loginForm')">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        label="注册"
        name="regist"
      >
        <el-form
          ref="registerForm"
          :model="registerForm"
          label-width="80px"
          class="register-form"
        >
          <el-form-item
            required
            label="账号"
            prop="username"
          >
            <el-input v-model="registerForm.username" />
          </el-form-item>
          <el-form-item
            required
            label="密码"
            prop="password"
          >
            <el-input
              v-model="registerForm.password"
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleRegister"
            >
              注册
            </el-button>
            <el-button @click="handleReset('registerForm')">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  data () {
    return {
      activeName: 'regist',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$axios.post('/api/v1/user/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then((res) => {
            this.$message.success('登录成功')
            this.$store.commit('user/setUser', { username: this.loginForm.username })
            this.$store.commit('auth/setAuth', { isAuthenticated: true, isAdmin: true })
            this.$router.push('/')
          }).catch(err => {
            this.$message.error(err.message)
          })
        } else {
          this.$message.error('用户名或密码输入不正确')
        }
      })
    },
    handleRegister () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.$axios.post('/api/v1/user/register', {
            username: this.registerForm.username,
            password: this.registerForm.password
          }).then((res) => {
            this.$message.success('注册成功')
            this.activeName = 'login'
          }).catch(err => {
            this.$message.error(err.message)
          })
        } else {
          this.$message.error('用户名或密码规则不正确')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .change-tabs {
    width: 400px;
  }
}
</style>
