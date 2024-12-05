<template>
  <div class="flex flex-col items-center justify-center py-28 min-h-0 w-full">
    <p class="text-base font-semibold text-primary">404</p>
    <h1
      class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
    >
      Page <span class="shantext text-lime-500">not</span> found
    </h1>
    <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
      您要查找的页面不存在。
    </p>

    <UButton label="回到首页" to="/" class="mt-6 text-lg" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '404',
});
</script>

