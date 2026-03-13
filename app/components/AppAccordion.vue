<template>
  <div class="panel-card overflow-hidden bg-card">
    <button
      type="button"
      class="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left font-display text-lg font-bold transition duration-300 ease-in-out sm:gap-4 sm:px-5 sm:text-xl"
      :class="summaryClass"
      :aria-expanded="isOpen"
      @click="$emit('toggle')"
    >
      <span class="pr-2">{{ title }}</span>
      <span
        class="grid h-9 w-9 flex-none place-items-center rounded-full border-2 border-border text-base transition duration-300 ease-in-out sm:h-10 sm:w-10 sm:text-lg"
        :class="iconClass"
        :style="{
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }"
      >
        +
      </span>
    </button>

    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        v-if="isOpen"
        class="overflow-hidden border-t-2 border-border"
      >
        <div
          class="px-4 py-4 text-sm leading-7 text-text/80 [&_strong]:font-extrabold [&_strong]:text-text sm:px-5"
          v-html="content"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  isOpen?: boolean
  summaryClass?: string
  iconClass?: string
}>()

defineEmits<{
  toggle: []
}>()

function beforeEnter(el: Element) {
  const node = el as HTMLElement
  node.style.height = '0'
  node.style.opacity = '0'
}

function enter(el: Element) {
  const node = el as HTMLElement
  node.style.transition = 'height 260ms ease-in-out, opacity 220ms ease-in-out'

  requestAnimationFrame(() => {
    node.style.height = `${node.scrollHeight}px`
    node.style.opacity = '1'
  })
}

function afterEnter(el: Element) {
  const node = el as HTMLElement
  node.style.height = 'auto'
  node.style.transition = ''
}

function beforeLeave(el: Element) {
  const node = el as HTMLElement
  node.style.height = `${node.scrollHeight}px`
  node.style.opacity = '1'
}

function leave(el: Element) {
  const node = el as HTMLElement
  node.style.transition = 'height 220ms ease-in-out, opacity 180ms ease-in-out'

  requestAnimationFrame(() => {
    node.style.height = '0'
    node.style.opacity = '0'
  })
}

function afterLeave(el: Element) {
  const node = el as HTMLElement
  node.style.transition = ''
}
</script>
