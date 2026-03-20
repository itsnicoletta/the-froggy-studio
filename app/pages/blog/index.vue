<template>
  <div id="top" class="pb-0">
    <AppNavbar />

    <main class="space-y-10 pb-12 pt-28 md:space-y-12 md:pb-16 md:pt-24 lg:space-y-14 lg:pb-20 lg:pt-28">
      <section class="site-shell">
        <div class="panel-card overflow-hidden bg-surface text-text-inverse">
          <div class="px-5 py-8 md:px-10 md:py-10 lg:px-12">
            <div class="max-w-4xl space-y-5">
              <p class="eyebrow border-white/15 bg-white/10 text-text-inverse">
                Froggy Blog
              </p>
              <h1 class="max-w-3xl text-[2.6rem] leading-[0.9] sm:text-6xl">
                Articles built to answer the questions people actually search for.
              </h1>
              <p class="max-w-2xl text-[0.98rem] leading-7 text-text-muted sm:text-base">
                We use the blog to publish practical takes on websites, SEO, brand clarity, AI,
                and digital growth. The goal is simple:
                <strong class="text-white">be useful first, then be discoverable.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="site-shell">
        <div class="mb-8 flex flex-wrap gap-4 md:mb-10 md:gap-5">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            class="cursor-pointer rounded-full border-2 border-border px-4 py-2 text-sm font-extrabold tracking-tight transition"
            :class="filterButtonClass(filter)"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="grid gap-6 md:gap-7 lg:grid-cols-3 lg:gap-8">
          <article
            v-for="post in filteredPosts"
            :key="post.path"
            class="panel-card flex h-full flex-col bg-card p-6 md:p-7"
          >
            <div class="space-y-5">
              <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-text/60">
                <span
                  class="inline-flex rounded-full border-2 border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.16em]"
                  :class="categoryChipClass(post.category)"
                >
                  {{ post.category }}
                </span>
                <span>{{ formatDate(post.date) }}</span>
              </div>

              <div class="space-y-4">
                <h2 class="text-[1.9rem] leading-[0.94] sm:text-[2.15rem]">
                  <NuxtLink :to="post.path">
                    {{ post.title }}
                  </NuxtLink>
                </h2>
                <p class="text-[0.98rem] leading-7 text-text/75">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="mt-auto pt-8">
              <BaseButton :href="post.path">Read article</BaseButton>
            </div>
          </article>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const siteUrl = 'https://thefroggystudio.com'
const canonicalUrl = `${siteUrl}/blog`
const ogImage = `${siteUrl}/ranocchie.svg`

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .all(),
)

const activeFilter = ref('All')
const filters = computed(() => [
  'All',
  ...new Set((posts.value || []).map((post) => post.category)),
])

const filteredPosts = computed(() => {
  if (activeFilter.value === 'All') {
    return posts.value || []
  }

  return (posts.value || []).filter((post) => post.category === activeFilter.value)
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

useSeoMeta({
  title: 'Blog | Websites, SEO, AI & Brand Clarity | The Froggy Studio',
  description:
    'Practical articles from The Froggy Studio about websites, SEO, AI-ready content, brand clarity, and digital decisions that help businesses get found.',
  ogTitle: 'The Froggy Studio Blog',
  ogDescription:
    'Articles about websites, SEO, AI-ready content, and clearer digital strategy for growing brands.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage,
  ogImageAlt: 'The Froggy Studio frogs illustration',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Froggy Studio Blog',
  twitterDescription:
    'Practical articles on websites, SEO, AI-ready content, and digital growth.',
  twitterImage: ogImage,
})

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value))
}

function categoryChipClass(category?: string) {
  switch (category) {
    case 'Branding':
      return 'bg-primary text-text'
    case 'Automation':
      return 'bg-quaternary text-text-inverse'
    case 'Web Design':
    case 'Websites':
      return 'bg-secondary text-text-inverse'
    case 'Digital Marketing':
    case 'Conversion':
      return 'bg-tertiary text-text-inverse'
    case 'SEO':
    case 'Strategy':
      return 'bg-quinary text-text-inverse'
    default:
      return 'bg-card text-text'
  }
}

function filterButtonClass(filter: string) {
  if (activeFilter.value === filter) {
    const tone = filter === 'All' ? 'bg-primary text-text' : categoryChipClass(filter)
    return `${tone} shadow-[4px_4px_0_0_var(--color-border)]`
  }

  return 'bg-card text-text hover:-translate-y-0.5'
}
</script>
