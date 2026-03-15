<template>
  <div
    v-show="open"
    class="fixed inset-0 z-[95] flex items-center justify-center bg-black/45 px-4 py-6"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="titleId"
  >
    <div class="panel-card relative max-h-[85vh] w-full max-w-3xl overflow-hidden bg-card">
      <button
        type="button"
        class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-surface text-white transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-border)]"
        aria-label="Close policy"
        @click="$emit('close')"
      >
        <span class="relative block h-4 w-4">
          <span class="absolute left-1/2 top-1/2 h-1 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-white" />
          <span class="absolute left-1/2 top-1/2 h-1 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
        </span>
      </button>

      <div class="border-b-2 border-border px-5 py-5 md:px-7">
        <p class="eyebrow bg-primary">{{ eyebrow }}</p>
        <h2 :id="titleId" class="mt-4 pr-14 text-[2rem] leading-[0.96] sm:text-4xl">
          {{ title }}
        </h2>
      </div>

      <div class="max-h-[calc(85vh-9rem)] overflow-y-auto px-5 py-5 md:px-7 md:py-6">
        <div
          class="policy-copy space-y-4 text-sm leading-7 text-text/80 md:text-base"
          v-html="content"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean
  title: string
  eyebrow: string
  content: string
}>()

defineEmits<{
  close: []
}>()

const titleId = computed(() =>
  `policy-title-${props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
)
</script>
