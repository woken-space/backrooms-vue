<template>
  <el-menu mode="horizontal"
           router
           class="el-menu-demo">
    <RouterLink to="/" class="item-logo">
      <p style="font-family: YuYang-05,serif;display: inline-block;height: 100%">Back</p>
      <p style="font-family: YuYang-03,serif;display: inline-block;height: 100%">Rooms</p>
    </RouterLink>
    <div class="flex-grow-search"/>
    <el-input class="search-input" placeholder="请输入" v-model="searchContent">
      <template #prepend>
        <el-icon>
          <Search/>
        </el-icon>
      </template>
      <template #append>
        <el-select v-model="searchSelect" placeholder="搜索类型" style="width: 100px" default-first-option>
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
    <el-avatar src="https://pic.imgdb.cn/item/60c9aac4844ef46bb29c65c2.jpg"/>
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

<style scoped>
.el-menu-demo {
  height: 100%;
  width: 100%;
  align-items: center;
}

.item-logo{
  /*background-color: #909399;*/
  color: #303133;
  border-radius: 5px;
  font-size: x-large;
}

.flex-grow-search {
  flex-grow: 0.2;
}

.flex-grow-item {
  flex-grow: 0.2;
}

.flex-grow-avatar {
  flex-grow: 0.4;
}

.search-input {
  align-items: center;
  width: 40%;
  height: 100%;
}
</style>