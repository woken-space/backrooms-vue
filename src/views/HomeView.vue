<script>
import Menu from "@/components/Menu.vue";

export default {
  components: {Menu},
  data() {
    return {
      name: 'zhangsan'
    }
  },
  methods: {
    change(){
      this.name = "lisi"
    }
  }
}
</script>

<template>
  <Menu/>
  <div style="">
    你好世界
  </div>
</template>
