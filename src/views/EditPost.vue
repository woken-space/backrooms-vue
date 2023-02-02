<template>
  <div class="editor-post" :style="{width: 'width'}">
    <div class="title">
      <el-input
          placeholder="请输入标题"
          minlength="5"
          maxlength="50"
          v-model="postTitle"
      />
    </div>
    <mavon-editor class="mavon-editor"
                  toolbarsBackground="#DCDFE6"
                  codeStyle="idea"
                  :html="false"
                  :toolbars="toolbars"
                  v-model="postContent"
                  @navigationToggle='navigationToggle'
    />
  </div>
  <div>
    <el-button @click="navigationToggle">点击</el-button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const postContent = ref('### 你好');
const postTitle = ref('')
const drawer = ref(false)
const direction = ref('rtl')
const toolbars = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: false, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: false, // 单双栏模式
  preview: true, // 预览
}
const navigationToggle = (status, value) => {
  setTimeout(() => {
    console.log(value)
  }, 500)
}
</script>

<style lang="scss" scoped>
.editor-post {
  width: 80vw;
  margin-left: 12.5vw;

  .title {

  }

  .mavon-editor {
    min-height: 500px;
  }
}
</style>