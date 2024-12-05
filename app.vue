<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
const {
  public: { appName },
} = useRuntimeConfig();

useHead({
  titleTemplate(title) {
    return title ? `${title} - ${appName}` : appName;
  },
  link: [
    {
      rel: 'icon',
      type: 'iamge/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'iamge/png',
      href: '/images/icon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'iamge/png',
      href: '/images/icon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'iamge/png',
      sizes: '180x180',
      href: '/images/icon/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/images/icon/site.webmanifest',
    },
  ],
});
</script>
