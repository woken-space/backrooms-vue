<script>
import Menu from "@/components/Menu.vue";
import HomeScroller from "@/components/index/HomeScroller.vue";
import HomeTop from "@/components/index/HomeTop.vue";

export default {
  components: {HomeScroller, HomeTop, Menu}
}
</script>

<template>
  <Menu/>
  <div class="home-top">
    <HomeTop/>
  </div>
  <div class="home-scroller">
    <HomeScroller/>
  </div>
</template>
<style lang="scss" scoped>
</style>
