<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'solid' | 'outline' | 'dark' | 'outlineInverse'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    href: undefined,
    variant: 'solid',
    type: 'button',
  },
)

const isExternalHref = computed(() => {
  if (!props.href) {
    return false
  }

  return /^(https?:|mailto:|tel:)/.test(props.href)
})

const variantClass = {
  solid:
    'bg-primary text-text hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-tertiary)]',
  outline:
    'bg-transparent text-text border-2 border-border hover:bg-card hover:-translate-y-0.5',
  dark:
    'bg-surface text-text-inverse hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-primary)]',
  outlineInverse:
    'border-white/80 bg-transparent text-text-inverse hover:-translate-y-0.5 hover:bg-white hover:text-text hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.18)]',
}
</script>

<template>
  <component
    v-if="props.href"
    :is="isExternalHref ? 'a' : NuxtLink"
    v-bind="isExternalHref ? { href: props.href } : { to: props.href }"
    class="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-border px-4 py-2.5 text-sm font-extrabold tracking-tight whitespace-nowrap transition duration-200 sm:px-5 sm:py-3"
    :class="variantClass[props.variant]"
  >
    <slot />
  </component>

  <button
    v-else
    :type="props.type"
    class="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-border px-4 py-2.5 text-sm font-extrabold tracking-tight whitespace-nowrap transition duration-200 sm:px-5 sm:py-3"
    :class="variantClass[props.variant]"
  >
    <slot />
  </button>
</template>
