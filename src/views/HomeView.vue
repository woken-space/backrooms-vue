<script>
import Menu from "@/components/Menu.vue";
import HomeScroller from "@/components/index/HomeScroller.vue";
import HomeTop from "@/components/index/HomeTop.vue";
import HomeLeft from "@/components/index/HomeLeft.vue";

export default {
  components: {HomeLeft, HomeScroller, HomeTop, Menu}
}
</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="menu">
          <Menu/>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <HomeLeft/>
        </el-aside>
        <el-container>
          <div class="home-top">
            <HomeTop/>
          </div>
          <div class="home-scroller">
            <HomeScroller/>
          </div>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.home {
}

.home-top {
}

.home-scroller {
}
</style>
