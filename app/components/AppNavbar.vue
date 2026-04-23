<template>
  <header class="fixed inset-x-0 top-0 z-30">
    <div class="site-shell relative pt-4 pb-1 md:pt-4 md:pb-1">
      <div
        class="pointer-events-none absolute -inset-x-[100vw] top-0 -z-10 h-[calc(100%-0.5rem)] bg-[linear-gradient(180deg,#fffefb_0%,#f7fbff_44%,rgba(247,251,255,0)_100%)] md:hidden"
        aria-hidden="true"
      />
      <div class="panel-card bg-card/95 px-4 py-3 backdrop-blur">
        <div class="flex items-center justify-between gap-4 md:hidden">
          <a :href="topHref" class="font-display text-lg font-black leading-none sm:text-xl">
            The Froggy Studio
          </a>

          <div class="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              class="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-2 border-border bg-white transition duration-300 ease-in-out hover:-translate-y-0.5 md:hidden"
              :aria-expanded="isOpen"
              aria-label="Toggle navigation menu"
              @click="isOpen = !isOpen"
            >
              <span class="relative block h-4 w-5">
                <span
                  class="absolute left-0 top-0 block h-0.5 w-5 origin-center rounded-full bg-text transition duration-300 ease-in-out"
                  :class="isOpen ? 'translate-y-[7px] rotate-45' : ''"
                />
                <span
                  class="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-text transition duration-300 ease-in-out"
                  :class="isOpen ? 'opacity-0' : ''"
                />
                <span
                  class="absolute left-0 top-[14px] block h-0.5 w-5 origin-center rounded-full bg-text transition duration-300 ease-in-out"
                  :class="isOpen ? 'translate-y-[-7px] -rotate-45' : ''"
                />
              </span>
            </button>

            <BaseButton :href="contactHref" variant="dark">Let's talk</BaseButton>
          </div>
        </div>

        <div class="hidden items-center justify-between gap-6 md:grid md:grid-cols-[auto_1fr_auto]">
          <a :href="topHref" class="font-display text-xl font-black leading-none">
            The Froggy Studio
          </a>

          <nav class="flex items-center justify-center gap-6 text-sm font-bold">
            <a :href="servicesHref">Services</a>
            <a :href="processHref">Process</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a :href="faqHref">FAQ</a>
            <a :href="aboutHref">About</a>
          </nav>

          <BaseButton :href="contactHref" variant="dark">Let's talk</BaseButton>
        </div>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-[-8px] opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-[-8px] opacity-0"
        >
          <nav
            v-if="isOpen"
            class="mt-4 grid gap-2 rounded-[1.25rem] border-2 border-border bg-white p-2 md:hidden"
          >
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" :href="servicesHref" @click="closeMenu">
              Services
            </a>
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" :href="processHref" @click="closeMenu">
              Process
            </a>
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" href="/projects" @click="closeMenu">
              Projects
            </a>
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" href="/blog" @click="closeMenu">
              Blog
            </a>
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" :href="faqHref" @click="closeMenu">
              FAQ
            </a>
            <a class="rounded-full px-4 py-3 text-sm font-bold transition hover:bg-accent-soft" :href="aboutHref" @click="closeMenu">
              About
            </a>
          </nav>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const homePrefix = computed(() => (route.path === '/' ? '' : '/'))
const topHref = computed(() => `${homePrefix.value}/#top`.replace('//', '/'))
const servicesHref = computed(() => `${homePrefix.value}/#services`.replace('//', '/'))
const processHref = computed(() => `${homePrefix.value}/#process`.replace('//', '/'))
const faqHref = computed(() => `${homePrefix.value}/#faq`.replace('//', '/'))
const aboutHref = computed(() => `${homePrefix.value}/#about`.replace('//', '/'))
const contactHref = computed(() => `${homePrefix.value}/#contact`.replace('//', '/'))

function closeMenu() {
  isOpen.value = false
}
</script>
