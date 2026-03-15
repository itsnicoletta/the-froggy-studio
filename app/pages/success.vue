<template>
  <main class="site-shell flex min-h-screen items-center py-24">
    <section class="panel-card grid w-full gap-8 bg-card p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10 lg:p-12">
      <div class="space-y-5">
        <p class="eyebrow bg-primary">Message sent</p>
        <h1 class="text-[2.4rem] leading-[0.92] sm:text-5xl">
          We&apos;ve received your message.
        </h1>
        <p class="max-w-xl text-base leading-7 text-text/75">
          Thanks for reaching out to <strong>The Froggy Studio</strong>. We&apos;ll read everything
          carefully and come back to you with <strong>a clear next step</strong>.
        </p>
        <div class="pt-2">
          <BaseButton href="/">Back to homepage</BaseButton>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <img
          src="/ranocchie.svg"
          alt="The Froggy Studio frogs illustration"
          class="h-auto w-full max-w-[420px]"
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Message received | The Froggy Studio',
  description: 'Your message has been sent to The Froggy Studio.',
  robots: 'noindex, nofollow',
})
</script>
