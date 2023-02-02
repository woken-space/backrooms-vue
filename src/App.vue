<script>
import './assets/jquery.min'
import './assets/script'
export default {

}
</script>

<template>
  <div id="jsi-flying-fish-container" class="container"></div>
  <RouterView/>
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  position: absolute;
  z-index: 0;
}
</style>
