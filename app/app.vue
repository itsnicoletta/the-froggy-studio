<template>
  <div id="top" class="pb-0">
    <NuxtRouteAnnouncer />
    <AppAnalytics />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=20260603' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=20260603' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=20260603' },
    { rel: 'shortcut icon', href: '/favicon.ico?v=20260603' },
  ],
})
</script>
