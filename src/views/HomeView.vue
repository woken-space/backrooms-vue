<script>
import Menu from "@/components/Menu.vue";
import HomeScroller from "@/components/index/HomeScroller.vue";
import HomeTop from "@/components/index/HomeTop.vue";
import HomeLeft from "@/components/index/HomeLeft.vue";
import '../lib/fish/jquery.min'
import '../lib/fish/script'

export default {
  components: {HomeLeft, HomeScroller, HomeTop, Menu}
}
</script>

<template>
  <div id="jsi-flying-fish-container" class="container"></div>
  <div class="common-layout">
    <el-container>
      <el-header class="menu">
        <Menu/>
      </el-header>
      <el-container class="home-body">
        <el-aside class="home-left" width="200px" height="1400px">
          <HomeLeft/>
        </el-aside>
        <el-container class="home-middle">
          <div class="home-top">
            <HomeTop/>
          </div>
          <div class="home-scroller">
            <HomeScroller/>
          </div>
          <el-footer class="home-footer">
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 50px;
  width: 100%;
}

.home-body {
  margin-top: 50px;
  height: 1600px;

  .home-left{
    position: fixed;
    left: 0;
    z-index: 3;
  }

  .home-middle {
    margin-left: 200px;

    .home-top {
      height: 200px;
    }

    .home-scroller {
      width: 80%;
      height: 1200px;
    }
  }

  .home-footer {
    height: 200px;
  }
}
.container{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  position: absolute;
  z-index: -1;
}
</style>
