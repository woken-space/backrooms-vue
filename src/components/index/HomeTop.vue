<template>
  <!--    <Lottie-->
  <!--        :json-data="jsonData"-->
  <!--        width="100%"-->
  <!--        height="100%"-->
  <!--    />-->
  <div></div>
</template>

<script setup>
import Lottie from "@/components/base/Lottie.vue";
import JsonData from '../../assets/lottie/人在路上走.json'

const jsonData = JsonData
</script>

<style lang="scss" scoped>
div{
  display: flex;
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
}
</style>