<template>
  <div class="not-fnd">
    <el-card :body-style="{ padding: '10px', 'background-color': 'rgb(255,255,255)'}">
      <lottie
          :json-data="jsonData"
          width="100%"
          height="100%"
      />
      <div style="padding: 14px">
        <div class="bottom">
          <time class="content">{{ content }}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import Lottie from "../components/base/Lottie.vue";
import NotFndJson from '../assets/lottie/NotFnd.json';
const content = '大知闲闲，小知閒閒。大言炎炎，小言詹詹。其寐也魂交，其觉也形开。与接为构，日以心斗。缦者、窖者、密者。小恐惴惴，大恐缦缦。其发若机栝，其司是非之谓也；其留如诅盟，其守胜之谓也；其杀如秋冬，以言其日消也；其溺之所为之，不可使复之也；其厌也如缄，以言其老洫也；近死之心，莫使复阳也。喜怒哀乐，虑叹变慹，姚佚启态。乐出虚，蒸成菌。日夜相代乎前而莫知其所萌。已乎，已乎！旦暮得此，其所由以生乎！'
const jsonData = NotFndJson
</script>

<style scoped>

.bottom {
  margin-top: 13px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  font-size: medium;
  font-family: YuYang-02, serif
}

.not-fnd {
  background-color: #8d8d8d;
  display: flex;
  text-align: center;
  justify-content: center;
}

el-card {
  background-color: #8d8d8d;
}

.image {
  width: 60%;
  height: 60%;
  display: block;
  margin: 0 auto 2rem;
}

</style>