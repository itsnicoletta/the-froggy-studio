<template>
  <div
    v-show="visible"
    class="fixed bottom-3 left-3 right-3 z-[94] md:bottom-4 md:left-6 md:right-auto md:max-w-[31rem]"
  >
    <div class="panel-card bg-card p-4 md:p-4">
      <div class="space-y-3 md:space-y-4">
        <div class="space-y-2 md:space-y-3">
          <div class="flex items-center justify-between gap-3">
            <p class="eyebrow bg-primary">Cookies</p>
            <button
              type="button"
              class="cursor-pointer text-[0.82rem] font-bold text-text/70 underline underline-offset-4 transition hover:text-text md:text-sm"
              @click="$emit('openCookies')"
            >
              Read cookie policy
            </button>
          </div>
          <h2 class="text-[1.35rem] leading-[0.98] sm:text-3xl md:text-[1.65rem]">
            We use essential cookies and optional analytics.
          </h2>
          <p class="text-[0.82rem] leading-5 text-text/75 md:text-sm md:leading-7">
            Essential cookies keep the site working. Optional analytics help us understand visits
            and improve the experience.
          </p>
        </div>

        <div class="flex flex-wrap gap-2.5 md:gap-3">
          <BaseButton type="button" @click="$emit('accept')">Accept analytics</BaseButton>
          <BaseButton type="button" variant="outline" @click="$emit('reject')">
            Necessary only
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

defineEmits<{
  accept: []
  reject: []
  openCookies: []
}>()
</script>
