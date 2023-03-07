<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
        v-infinite-scroll="load"
        class="list"
        :infinite-scroll-disabled="disabled"
    >
      <li v-for="(data,i) in dataList" :key="i" class="list-item">
        <el-card :body-style="{flex:1,display:'flex'}">
          <Lottie
              width="200px"
              height="150px"
              :json-data="jsonData"
              class="card-lottie"
          />
          <div class="card-content">
            <div class="content-title">
              <el-link>
                {{ data.title }}
              </el-link>
            </div>
            <div class="content-description">
              <p>{{ data.description }}</p>
            </div>
            <div class="content-meta">
              <span>{{ data.postDate }}</span>
              <div class="item-meta-right">
                <el-icon>
                  <Star/>
                </el-icon>
                <span>{{ data.starCount }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import JsonData from '../../assets/lottie/飞行无人机.json'
import Lottie from "../base/Lottie.vue";

const count = computed(() => dataList.value.length)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const jsonData = JsonData
const dataList = computed(() => {
  let dataList = []
  for (let i = 0; i < 6; i++) {
    dataList.push({
      title: '万彩特效大师(限时送会员)——0基础轻松剪辑合成特效动画视频，不用AE也能制作特效大片',
      description: '朋友们，我们日常制作特效视频，都是使用AE， 但说实话，如果不是专业的AE设计师，用这软件还是有难度的。虽然现在很多网站也提供了很多非常棒的AE',
      postDate: '2023-02-01',
      starCount: 322
    })
  }
  return dataList
})
const load = () => {
  loading.value = true
  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      dataList.value.push({
        title: '万彩特效大师(限时送会员)——0基础轻松剪辑合成特效动画视频，不用AE也能制作特效大片',
        description: '朋友们，我们日常制作特效视频，都是使用AE， 但说实话，如果不是专业的AE设计师，用这软件还是有难度的。虽然现在很多网站也提供了很多非常棒的AE用AE， 但说实话，如果不是专业的AE设计师，用这软件还是有难度的。虽然用AE， 但说实话，如果不是专业的AE设计师，用这软件还是有难度的。虽然用AE， 但说实话，如果不是专业的AE设计师，用这软件还是有难度的。虽然',
        postDate: '2023-02-01',
        starCount: 322
      })
    }
    loading.value = false
  }, 500)
}
</script>

<style lang="scss" scoped>
// 滚动条
.infinite-list-wrapper::-webkit-scrollbar {
  width: 8px;
}

.infinite-list-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.2;
  background: #193048;
}

.infinite-list-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  //background: fade(@primary-color, 30%);
}

// 列表
.infinite-list-wrapper {
  text-align: center;
  height: 100%;
  width: 100%;


  .list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    height: 192px;

    .el-card.is-always-shadow {
      flex: 1;
    }

    .card-lottie {
      display: inline-block;
    }

    .card-content {
      flex: 1;
      position: relative;
      width: 100%;
      padding-left: 20px;
      text-align: left;

      .content-title {
        margin: 0 0 10px;

        a {
          font-size: 20px;
          line-height: 1.5;
          font-weight: 500;
          font-family: YuYang-05, serif;
        }

        a:hover {
          color: #198754;
        }
      }

      .content-description {
        height: 50px;
        margin-bottom: 34px;
        line-height: 1.625;
        color: var(--theme-gray-color);
        font-size: 16px;
        font-family: YuYang-03, serif;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .content-meta {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding-right: 20px;
        color: var(--theme-light-color);
        font-size: 12px;

        span {
          display: inline-block;
          margin-right: 15px;
          vertical-align: top;
          line-height: 24px;
        }

        .item-meta-right {
          display: flex;
          float: right;
          box-sizing: border-box;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }

      }
    }
  }

  .list-item + .list-item {
    margin-top: 2px;
  }

}

</style>