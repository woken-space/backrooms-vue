<template>
  <div class="login-view">
    <div class="login">
      <div class="logo">
        <img src="../assets/logo_m.png" width="500" alt=""/>
      </div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
          <div class="login-input">
            <el-input type="string"
                      autocomplete="off"
                      v-model="mail"
                      placeholder="请输入邮箱"/>
            <el-input type="string"
                      autocomplete="off"
                      v-model="username"
                      placeholder="请输入用户名"/>
            <el-input type="password"
                      autocomplete="off"
                      v-model="password"
                      :show-password="true"
                      placeholder="请输入密码"/>
            <el-input type="password"
                      autocomplete="off"
                      v-model="checkPass"
                      :show-password="true"
                      placeholder="确认密码"/>
            <div class="option">
              <el-button>提交</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <div class="login-input">
            <el-input type="string"
                      autocomplete="off"
                      v-model="mail"
                      placeholder="请输入邮箱"/>
            <el-input type="string"
                      autocomplete="off"
                      v-model="username"
                      placeholder="请输入用户名"/>
            <el-input type="password"
                      autocomplete="off"
                      v-model="password"
                      :show-password="true"
                      placeholder="请输入密码"/>
            <el-input type="password"
                      autocomplete="off"
                      v-model="checkPass"
                      :show-password="true"
                      placeholder="确认密码"/>
            <div class="option">
              <el-button>提交</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const activeName = ref('login')
const mail = ref('')
const username = ref('')
const password = ref('')
const checkPass = ref('')
</script>

<style lang="scss">
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .login {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 500px;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
    background-color: #FFFFFF;

    .logo {
      flex: 1;
    }

    .login-input {
      flex: 5;
      width: 500px;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .el-input {
        height: 50px;
        margin-bottom: 5px;

        .el-input__wrapper {
          box-shadow: none;
          border-bottom: 1px solid #ccc;
        }
      }

      .option {
        width: 500px;

        .el-button {
          width: 400px;
          height: 50px;
        }

        .el-link {
          width: 100px;
        }
      }
    }

    .go-to-register {
      position: absolute;
      right: 0;
      width: 80px;
      height: 80px;

      .el-link {
        position: relative;
        top: 25px;
        left: 30px;
        font-family: YuYang-03, serif;
        font-size: 20px;
      }
    }
  }
}
</style>