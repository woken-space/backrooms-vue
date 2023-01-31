<template>
  <el-menu mode="horizontal"
           router
           class="el-menu-demo">
    <el-menu-item style="font-size: larger" index="/">
      <p style="font-weight: bolder">Back</p>
      <p>Rooms</p>
    </el-menu-item>
    <div class="flex-grow-search"/>
    <el-input class="search-input" placeholder="请输入" v-model="searchContent">
      <template #prepend>
        <el-icon>
          <Search/>
        </el-icon>
      </template>
      <template #append>
        <el-select v-model="searchSelect" placeholder="" style="width: 100px" default-first-option>
          <el-option label="报" value="1"/>
          <el-option label="指导" value="2"/>
          <el-option label="资源" value="3"/>
        </el-select>
      </template>
    </el-input>
    <div class="flex-grow-item"/>
    <el-menu-item index="news">报</el-menu-item>
    <el-menu-item index="guides">指导</el-menu-item>
    <el-menu-item index="guides">资源</el-menu-item>
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
  align-items: center;
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
  width: 40%;
  height: 100%;
}
</style>