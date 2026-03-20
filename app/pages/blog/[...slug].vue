<template>
  <div id="top" class="pb-0">
    <AppNavbar />

    <main class="space-y-10 pb-12 pt-28 md:space-y-12 md:pb-16 md:pt-24 lg:space-y-14 lg:pb-20 lg:pt-28">
      <section class="site-shell">
        <div class="space-y-10 px-5 py-6 md:px-2 md:py-7 lg:space-y-12">
          <div class="flex flex-wrap items-center justify-between gap-4 md:gap-6">
            <BaseButton href="/blog">Back to blog</BaseButton>

            <div class="flex flex-wrap items-center gap-3 md:gap-4">
              <p
                class="rounded-full border-2 border-border px-4 py-2 text-sm font-bold"
                :class="metadataChipClasses.published"
              >
                <span class="uppercase tracking-[0.16em] opacity-65">Published</span>
                <span class="ml-2">{{ formatDate(post.date) }}</span>
              </p>
              <p
                class="rounded-full border-2 border-border px-4 py-2 text-sm font-bold"
                :class="metadataChipClasses.updated"
              >
                <span class="uppercase tracking-[0.16em] opacity-70">Updated</span>
                <span class="ml-2">{{ formatDate(post.updated || post.date) }}</span>
              </p>
              <p
                class="rounded-full border-2 border-border px-4 py-2 text-sm font-bold"
                :class="metadataChipClasses.author"
              >
                <span class="uppercase tracking-[0.16em] opacity-70">Written by</span>
                <span class="ml-2">{{ post.author }}</span>
              </p>
            </div>
          </div>

          <div class="panel-card overflow-hidden bg-card">
            <div class="max-w-4xl space-y-6 px-5 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
              <div class="space-y-4">
                <p
                  class="inline-flex rounded-full border-2 border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.16em]"
                  :class="categoryChipClass(post.category)"
                >
                  {{ post.category }}
                </p>
                <h1 class="text-[2.5rem] leading-[0.9] sm:text-6xl">
                  {{ post.title }}
                </h1>
                <p class="max-w-2xl text-[1rem] leading-8 text-text/75">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="site-shell">
        <div class="grid gap-8 md:gap-10 lg:grid-cols-[0.64fr_1.36fr] lg:items-start">
          <aside class="space-y-5 lg:sticky lg:top-28">
            <div class="panel-card bg-surface p-5 text-text-inverse md:p-6">
              <p class="eyebrow border-white/15 bg-white/10 text-text-inverse">Search intent</p>
              <p class="mt-4 text-[1.02rem] leading-8 text-white">
                {{ post.question || 'Useful answers for founders and teams deciding what their website should do next.' }}
              </p>
            </div>

            <div class="panel-card bg-card p-5 md:p-6">
              <p class="text-sm font-bold uppercase tracking-[0.16em] text-text/55">Next step</p>
              <p class="mt-3 text-sm leading-7 text-text/75">
                If this article sounds like your current situation, we can help turn it into a clearer site,
                stronger message, and a structure that is easier to grow.
              </p>
              <div class="pt-4">
                <BaseButton href="/#contact">Talk to Froggy</BaseButton>
              </div>
            </div>
          </aside>

          <article class="panel-card bg-card p-5 md:p-8 lg:p-10 xl:p-12">
            <ContentRenderer :value="post" class="blog-prose max-w-3xl" />
          </article>
        </div>
      </section>

      <section v-if="relatedPosts.length" class="site-shell">
        <div class="space-y-5">
          <div class="panel-card bg-secondary p-6 text-text-inverse">
            <p class="eyebrow bg-card text-text">More from the blog</p>
            <h2 class="mt-4 text-[2rem] leading-[0.94] sm:text-5xl">
              Keep exploring related questions.
            </h2>
          </div>

          <div class="grid gap-6 md:gap-7 lg:grid-cols-2">
            <article
              v-for="entry in relatedPosts"
              :key="entry.path"
              class="panel-card bg-card p-5 md:p-6"
            >
                <div class="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-text/55">
                  <span
                    class="inline-flex rounded-full border-2 border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.16em]"
                    :class="categoryChipClass(entry.category)"
                  >
                    {{ entry.category }}
                  </span>
                  <span>{{ formatDate(entry.date) }}</span>
                </div>
              <h3 class="mt-4 text-[1.7rem] leading-[0.95] sm:text-[2rem]">
                <NuxtLink :to="entry.path">
                  {{ entry.title }}
                </NuxtLink>
              </h3>
              <p class="mt-3 text-sm leading-7 text-text/75">
                {{ entry.excerpt }}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://thefroggystudio.com'

const { data: post } = await useAsyncData(`blog:${route.path}`, async () => {
  const article = await queryCollection('blog')
    .path(route.path)
    .where('published', '=', true)
    .first()

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    })
  }

  return article
})

const { data: relatedPosts } = await useAsyncData(`blog-related:${route.path}`, async () => {
  const entries = await queryCollection('blog')
    .where('published', '=', true)
    .where('path', '<>', route.path)
    .order('date', 'DESC')
    .limit(2)
    .all()

  return entries
})

const canonicalUrl = computed(() => `${siteUrl}${route.path}`)
const ogImage = computed(() => post.value?.image || `${siteUrl}/ranocchie.svg`)
const metadataChipClasses = {
  published: 'bg-primary text-text',
  updated: 'bg-tertiary text-text-inverse',
  author: 'bg-secondary text-text-inverse',
} as const

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value?.title,
        description: post.value?.description,
        datePublished: post.value?.date,
        dateModified: post.value?.updated || post.value?.date,
        author: {
          '@type': 'Organization',
          name: post.value?.author || 'The Froggy Studio',
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Froggy Studio',
          url: siteUrl,
        },
        mainEntityOfPage: canonicalUrl.value,
        image: ogImage.value,
      }),
    },
  ],
})

useSeoMeta({
  title: () => `${post.value?.title} | The Froggy Studio`,
  description: () => post.value?.description || post.value?.excerpt || '',
  ogTitle: () => post.value?.title || 'The Froggy Studio Blog',
  ogDescription: () => post.value?.description || post.value?.excerpt || '',
  ogType: 'article',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => ogImage.value,
  ogImageAlt: () => post.value?.imageAlt || post.value?.title || 'The Froggy Studio article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title || 'The Froggy Studio Blog',
  twitterDescription: () => post.value?.description || post.value?.excerpt || '',
  twitterImage: () => ogImage.value,
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
</script>
