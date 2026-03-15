<template>
  <main class="site-shell flex min-h-screen items-center py-10 sm:py-14 md:py-20">
    <section class="panel-card mx-auto grid w-full max-w-5xl gap-8 overflow-hidden bg-surface px-5 py-8 text-text-inverse sm:px-8 sm:py-10 md:grid-cols-[0.96fr_1.04fr] md:px-10 md:py-12 lg:px-12">
      <div class="order-2 space-y-5 text-center md:order-1 md:text-left">
        <p class="eyebrow border-white/20 bg-white/10 text-text-inverse">
          Error {{ statusCode }}
        </p>
        <h1 class="text-[2.5rem] leading-[0.9] sm:text-6xl">
          {{ headline }}
        </h1>
        <p class="mx-auto max-w-xl text-[0.98rem] leading-7 text-text-muted md:mx-0 md:text-base">
          {{ message }}
        </p>
        <div class="flex flex-wrap justify-center gap-3 pt-1 md:justify-start">
          <BaseButton href="/">Back home</BaseButton>
          <BaseButton href="/#contact" variant="outlineInverse">Let&apos;s talk</BaseButton>
        </div>
      </div>

      <div class="order-1 flex items-center justify-center md:order-2">
        <img
          src="/ranocchie.svg"
          alt="The Froggy Studio frogs illustration"
          class="h-auto w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px]"
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const headline = computed(() =>
  statusCode.value === 404 ? 'This page hopped away.' : 'Something went wrong.',
)
const message = computed(() =>
  statusCode.value === 404
    ? 'The page you were looking for could not be found, but the rest of The Froggy Studio is still right here.'
    : 'An unexpected error interrupted the page. You can head back home and keep exploring from there.',
)

useSeoMeta({
  title: `${statusCode.value} | The Froggy Studio`,
  description: message.value,
  robots: 'noindex, nofollow',
})
</script>
