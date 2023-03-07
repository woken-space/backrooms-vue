<template>
  <el-menu mode="horizontal"
           router>
    <RouterLink to="/" class="item-logo">
      <!--      <p style="font-family: YuYang-05,serif;display: inline-block;height: 100%">Back</p>-->
      <!--      <p style="font-family: YuYang-03,serif;display: inline-block;height: 100%">Rooms</p>-->
      <img src="../assets/logo_m.png" width="200" height="50" alt=""/>
    </RouterLink>
    <div class="flex-grow-search"/>
    <el-input placeholder="请输入" v-model="searchContent">
      <template #prepend>
        <el-icon>
          <Search/>
        </el-icon>
      </template>
      <template #append>
        <el-select v-model="searchSelect" placeholder="搜索类型" default-first-option>
          <el-option label="报" value="1"/>
          <el-option label="指导" value="2"/>
          <el-option label="资源" value="3"/>
        </el-select>
      </template>
    </el-input>
    <div class="flex-grow-item"/>
    <el-menu-item index="news">报</el-menu-item>
    <el-menu-item index="guides">指导</el-menu-item>
    <el-menu-item index="resources">资源</el-menu-item>
    <div class="flex-grow-avatar"/>
    <div class="user">
      <div class="user-avatar" v-show="false">
        <el-avatar src="https://pic.imgdb.cn/item/60c9aac4844ef46bb29c65c2.jpg"/>
      </div>
      <div class="user-option">
        <el-link href="/login">登录</el-link>
      </div>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      searchContent: '',
      searchSelect: ''
    }
  }
}
</script>

<style lang="scss">
.el-menu {
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: #FFFFFF;

  .flex-grow-search {
    flex-grow: 0.2;
  }

  .flex-grow-item {
    flex-grow: 0.2;
  }

  .flex-grow-avatar {
    flex-grow: 0.4;
  }

  .el-input-group {
    align-items: center;
    width: 40%;
    height: 100%;
  }

  .el-input-group__prepend {
    background-color: #FFFFFF;
    box-shadow: none;
  }

  .el-input-group__append {
    background-color: #FFFFFF;
    box-shadow: none;
    width: 100px;
  }
}

.item-logo {
  /*background-color: #909399;*/
  color: #303133;
  border-radius: 5px;
  font-size: x-large;
}

</style>