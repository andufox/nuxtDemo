<template>
  <div>
    <div>hello</div>
    <div>{{ user }}</div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '首页',
});

const { cpUserFindFirst } = cpUser();
const { user } = await cpUserFindFirst();
</script>
