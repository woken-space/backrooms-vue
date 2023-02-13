<template>
<div>{{data}}</div>
</template>

<script setup>
import {onMounted} from "vue";
import {ref} from "vue";

const data = ref('')

onMounted(()=>{
  data.value = 'hello'
})

</script>