<template>
  <div id="top" class="pb-0">
    <AppNavbar />

    <main class="space-y-8 pb-12 pt-28 md:space-y-10 md:pb-16 md:pt-24 lg:space-y-12 lg:pb-20 lg:pt-28">
      <section class="site-shell">
        <div class="panel-card overflow-hidden bg-surface text-text-inverse">
          <div class="px-5 py-8 md:px-10 md:py-10 lg:px-12">
            <div class="max-w-3xl space-y-4">
              <p class="eyebrow border-white/15 bg-white/10 text-text-inverse">Portfolio</p>
              <h1 class="text-[2.5rem] leading-[0.92] sm:text-6xl">Projects.</h1>
              <p class="max-w-2xl text-[0.98rem] leading-7 text-text-muted sm:text-base">
                A selection of real projects built to solve practical business needs,
                with a focus on clarity, usability, and solid technical structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="site-shell">
        <div class="space-y-5">
          <article
            v-for="project in publishedProjects"
            :key="project.id"
            class="panel-card bg-card p-4 md:p-5 lg:p-6"
          >
            <div class="grid gap-4 md:grid-cols-[220px_1fr] md:items-center lg:grid-cols-[240px_1fr]">
              <div>
                <div
                  v-if="project.coverImage"
                  class="aspect-[4/5] overflow-hidden rounded-[1.1rem] border-2 border-border bg-white"
                >
                  <img
                    :src="project.coverImage"
                    :alt="project.coverImageAlt || project.title"
                    class="h-full w-full object-cover object-center"
                    loading="lazy"
                  >
                </div>

                <div v-else class="aspect-[4/5] rounded-[1.1rem] border-2 border-border bg-accent-soft p-6 text-sm font-bold text-text/65">
                  <div class="flex h-full items-end">
                    <div class="space-y-3">
                      <p class="eyebrow bg-card text-text">{{ project.searchIntentLabel }}</p>
                      <p class="text-base leading-7 text-text/70">{{ project.title }}</p>
                      <p class="text-sm font-normal leading-6 text-text/60">{{ project.summary }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="space-y-3">
                  <div class="flex flex-wrap gap-2">
                    <span class="project-chip">{{ project.searchIntentLabel }}</span>
                    <span class="project-chip">{{ project.status }}</span>
                  </div>

                  <div class="space-y-2 pt-4 sm:pt-5 md:pt-6">
                    <h2 class="text-[1.9rem] leading-[0.94] sm:text-[2.35rem]">
                      {{ project.title }}
                    </h2>
                    <p
                      v-if="project.collaboration"
                      class="text-sm font-bold uppercase tracking-[0.14em] text-text/50"
                    >
                      {{ project.collaboration }}
                    </p>
                  </div>

                  <p class="max-w-2xl text-[0.96rem] leading-7 text-text/72">
                    {{ project.summary }}
                  </p>

                  <p v-if="project.proofNote" class="text-sm font-bold text-text/78">
                    {{ project.proofNote }}
                  </p>

                  <p class="text-sm leading-7 text-text/70">
                    Services: {{ project.servicesDelivered.slice(0, 2).join(', ') }}
                  </p>
                </div>

                <div class="pt-1">
                  <BaseButton :href="`/projects/${project.id}`">Read project details</BaseButton>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { publishedProjects } from '~~/data/projects'
import { buildCanonicalUrl, INDEXABLE_ROBOTS, SITE_URL } from '~~/utils/site'

const canonicalUrl = buildCanonicalUrl('/projects')
const ogImage = `${SITE_URL}/favicon-32x32.png?v=20260603`

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: buildCanonicalUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: canonicalUrl,
          },
        ],
      }),
    },
  ],
})

useSeoMeta({
  title: 'Projects | The Froggy Studio',
  description:
    'Selected website and brand identity projects from The Froggy Studio.',
  ogTitle: 'Projects | The Froggy Studio',
  ogDescription:
    'Selected website and brand identity projects from The Froggy Studio.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage,
  ogImageAlt: 'The Froggy Studio icon',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Projects | The Froggy Studio',
  twitterDescription:
    'Selected website and brand identity projects from The Froggy Studio.',
  twitterImage: ogImage,
  robots: INDEXABLE_ROBOTS,
})
</script>
