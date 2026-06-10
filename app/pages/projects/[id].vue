<template>
  <div id="top" class="pb-0">
    <AppNavbar />

    <main class="space-y-8 pb-16 pt-32 md:space-y-10 md:pb-20 md:pt-28 lg:space-y-12 lg:pb-24 lg:pt-32">
      <section class="site-shell">
        <article class="panel-card relative overflow-hidden bg-surface text-text-inverse">
          <div class="relative space-y-8 px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div class="flex items-start justify-between gap-6 max-lg:flex-col">
              <div class="flex flex-wrap items-center gap-3">
                <NuxtLink
                  to="/projects"
                  class="eyebrow border-white/15 bg-white/10 text-text-inverse transition hover:bg-white hover:text-text"
                >
                  Back to projects
                </NuxtLink>

                <span class="project-chip">
                  {{ project.searchIntentLabel }}
                </span>

                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="project-chip"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="hidden rounded-[1.2rem] border border-white/12 bg-white/8 px-4 py-3 lg:block">
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Project facts</p>
                <div class="mt-2 space-y-3 max-w-[300px] text-sm leading-6 text-white/72">
                  <p><strong class="text-white">Status:</strong> {{ project.status }}</p>
                  <p><strong class="text-white">Industry:</strong> {{ project.industry }}</p>
                  <p><strong class="text-white">Services:</strong> {{ project.servicesDelivered.join(', ') }}</p>
                  <p><strong class="text-white">Tools:</strong> {{ project.toolsUsed.join(', ') }}</p>
                </div>
              </div>
            </div>

            <div class="max-w-4xl space-y-4">
              <h1 class="text-[3rem] leading-[0.9] sm:text-[4.6rem] lg:text-[5.7rem]">
                {{ project.title }}
              </h1>

              <p
                v-if="project.collaboration"
                class="text-sm font-bold uppercase tracking-[0.18em] text-white/55"
              >
                {{ project.collaboration }}
              </p>

              <p class="max-w-3xl text-[1rem] leading-8 text-white/76 md:text-[1.08rem]">
                {{ project.summary }}
              </p>
            </div>

            <div class="flex flex-wrap gap-4 pt-2">
              <BaseButton
                v-if="project.websiteUrl"
                :href="project.websiteUrl"
                variant="outlineInverse"
              >
                {{ project.ctaLabel || 'Open project link' }}
              </BaseButton>
              <BaseButton href="/#contact">
                {{ project.conversationCTA || 'Need something similar?' }}
              </BaseButton>
              <BaseButton href="/#services" variant="outlineInverse">
                Explore our services
              </BaseButton>
            </div>
          </div>
        </article>
      </section>

      <section class="site-shell">
        <div class="panel-card mx-auto max-w-[92rem] overflow-hidden bg-card">
          <video
            v-if="projectVideo"
            :src="projectVideo"
            autoplay
            loop
            muted
            playsinline
            class="w-full object-cover"
            :style="{ aspectRatio: project.coverAspectRatio || '16 / 9' }"
          />
          <img
            v-else-if="project.coverImage"
            :src="project.coverImage"
            :alt="project.coverImageAlt || project.title"
            class="w-full object-cover"
            :style="{
              aspectRatio: project.coverAspectRatio || '16 / 9',
              objectPosition: project.coverObjectPosition || 'center center',
            }"
          >
          <div
            v-else
            class="flex items-end bg-[linear-gradient(135deg,var(--color-accent-warm),#f4efe2_48%,var(--color-accent-soft))] p-6 md:p-8"
            :style="{ aspectRatio: project.coverAspectRatio || '16 / 9' }"
          >
            <div class="max-w-xl rounded-[1.4rem] border-2 border-border bg-card p-5 shadow-[6px_6px_0_0_var(--color-border)]">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-text/50">
                {{ project.searchIntentLabel }}
              </p>
              <p class="mt-3 text-sm leading-7 text-text/76">
                {{ project.proofNote || 'Project visuals are not published yet, so the work is documented here through scope, tools, and notes.' }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="site-shell">
        <div class="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.5fr)]">
          <article class="panel-card bg-card px-5 py-6 md:px-8 md:py-8">
            <p class="eyebrow bg-accent-soft">Overview</p>
            <div class="mt-5 max-w-3xl space-y-4 text-[1rem] leading-8 text-text/78">
              <p><strong>{{ project.searchIntentLabel }}.</strong></p>
              <p>{{ projectDescription }}</p>
              <p v-if="project.proofNote" class="text-sm font-bold text-text/80">
                {{ project.proofNote }}
              </p>
            </div>
          </article>

          <aside class="panel-card bg-accent-warm px-5 py-6 md:px-7 md:py-8">
            <p class="eyebrow bg-primary">Key points</p>
            <div class="mt-5 space-y-4">
              <div class="rounded-[1.15rem] border-2 border-border bg-card p-4">
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-text/50">
                  In short
                </p>
                <p class="mt-2 text-sm leading-7 text-text/76">
                  {{ project.title }} is a {{ project.searchIntentLabel.toLowerCase() }} in {{ project.industry.toLowerCase() }} focused on {{ project.servicesDelivered.slice(0, 2).join(' and ').toLowerCase() }}.
                </p>
              </div>
              <div
                v-for="item in project.highlights"
                :key="item.title"
                class="rounded-[1.15rem] border-2 border-border bg-card p-4"
              >
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-text/50">
                  {{ item.title }}
                </p>
                <p class="mt-2 text-sm leading-7 text-text/76">
                  {{ item.content }}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="site-shell">
        <div class="grid gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,0.62fr)] lg:items-end">
          <div class="panel-card relative overflow-hidden bg-card">
            <div class="relative h-[420px] md:h-[500px]">
              <button
                v-for="(image, index) in project.gallery"
                :key="image.src"
                type="button"
                class="absolute inset-0 block cursor-zoom-in"
                :class="index === slideIndex ? 'pointer-events-auto' : 'pointer-events-none'"
                :aria-label="`Open gallery image ${index + 1}`"
                @click="openLightbox(index)"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="h-full w-full object-cover object-top transition-all duration-700 ease-in-out"
                  :class="index === slideIndex ? 'scale-100 opacity-100' : 'pointer-events-none scale-[1.02] opacity-0'"
                >
              </button>

              <div class="absolute bottom-4 right-4 z-10 flex items-center gap-3">
                <button
                  type="button"
                  class="grid h-12 w-12 place-items-center rounded-full border-2 border-border bg-white text-2xl font-bold text-text transition hover:-translate-y-0.5"
                  aria-label="Previous image"
                  @click="prevBtn"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  class="grid h-12 w-12 place-items-center rounded-full border-2 border-border bg-primary text-2xl font-bold text-text transition hover:-translate-y-0.5"
                  aria-label="Next image"
                  @click="nextBtn"
                >
                  &rarr;
                </button>
              </div>

              <div
                v-if="!project.gallery.length"
                class="flex h-full items-end bg-[linear-gradient(135deg,var(--color-accent-soft),#f8fbff_50%,var(--color-accent-warm))] p-5 md:p-6"
              >
                <div class="max-w-md rounded-[1.3rem] border-2 border-border bg-card p-5 shadow-[6px_6px_0_0_var(--color-border)]">
                  <p class="text-xs font-bold uppercase tracking-[0.16em] text-text/50">
                    Gallery
                  </p>
                  <p class="mt-3 text-sm leading-7 text-text/76">
                    Add project images or mockups to make this case study more visual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article class="panel-card bg-card px-5 py-6 md:px-8 md:py-8">
            <p class="eyebrow bg-accent-soft">Build notes</p>
            <p class="mt-5 text-[1rem] leading-8 text-text/78">
              {{ secondDescription }}
            </p>

          </article>
        </div>
      </section>

      <section class="site-shell">
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="item in project.accordion"
            :key="item.title"
            class="panel-card bg-card p-5 md:p-6"
          >
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-text/50">
              {{ item.title }}
            </p>
            <p class="mt-4 text-sm leading-7 text-text/74">
              {{ item.content }}
            </p>
          </article>
        </div>
      </section>
    </main>

    <teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/92 px-6 py-8 backdrop-blur-sm max-sm:px-4"
        @click="closeLightbox"
      >
        <button
          type="button"
          class="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20"
          aria-label="Close image preview"
          @click.stop="closeLightbox"
        >
          &times;
        </button>

        <button
          v-if="project.gallery.length > 1"
          type="button"
          class="absolute left-6 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-3xl text-white transition hover:bg-white/20 max-sm:left-3 max-sm:h-12 max-sm:w-12"
          aria-label="Previous image"
          @click.stop="prevLightbox"
        >
          &larr;
        </button>

        <div class="flex w-full max-w-6xl flex-col items-center gap-5" @click.stop>
          <img
            :src="project.gallery[lightboxIndex].src"
            :alt="project.gallery[lightboxIndex].alt"
            class="max-h-[78vh] max-w-full rounded-[2rem] object-contain shadow-2xl"
          >

          <div class="flex w-full max-w-3xl items-center justify-between gap-4 text-white/80 max-sm:flex-col">
            <p class="text-sm uppercase tracking-[0.2em]">
              {{ project.title }} / {{ lightboxIndex + 1 }}/{{ project.gallery.length }}
            </p>

            <p class="text-sm text-white/60">
              Click outside or press Esc to close
            </p>
          </div>
        </div>

        <button
          v-if="project.gallery.length > 1"
          type="button"
          class="absolute right-6 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-3xl text-white transition hover:bg-white/20 max-sm:right-3 max-sm:h-12 max-sm:w-12"
          aria-label="Next image"
          @click.stop="nextLightbox"
        >
          &rarr;
        </button>
      </div>
    </teleport>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { getProjectById } from '~~/data/projects'
import { buildCanonicalUrl, INDEXABLE_ROBOTS, SITE_URL } from '~~/utils/site'

const route = useRoute()
const projectId = route.params.id as string
const project = getProjectById(projectId)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}

const slideIndex = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const projectSubtitle = computed(() => {
  return project.collaboration || project.summary
})

const projectDescription = computed(() => {
  return project.content.slice(0, 3).join(' ')
})

const secondDescription = computed(() => {
  return [project.scope, ...project.content.slice(3)].join(' ')
})

const projectVideo = computed(() => project.videoUrl || '')

function nextBtn() {
  if (!project.gallery.length) return
  slideIndex.value = (slideIndex.value + 1) % project.gallery.length
}

function prevBtn() {
  if (!project.gallery.length) return
  slideIndex.value = (slideIndex.value - 1 + project.gallery.length) % project.gallery.length
}

function startAutoplay() {
  stopAutoplay()
  if (project.gallery.length < 2) return

  intervalId = setInterval(() => {
    nextBtn()
  }, 5000)
}

function stopAutoplay() {
  if (!intervalId) return
  clearInterval(intervalId)
  intervalId = null
}

function syncBodyScrollLock() {
  if (typeof document === 'undefined') return
  document.body.style.overflow = lightboxOpen.value ? 'hidden' : ''
}

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  syncBodyScrollLock()
}

function closeLightbox() {
  lightboxOpen.value = false
  syncBodyScrollLock()
}

function nextLightbox() {
  if (!project.gallery.length) return
  lightboxIndex.value = (lightboxIndex.value + 1) % project.gallery.length
}

function prevLightbox() {
  if (!project.gallery.length) return
  lightboxIndex.value = (lightboxIndex.value - 1 + project.gallery.length) % project.gallery.length
}

function handleKeydown(event: KeyboardEvent) {
  if (!lightboxOpen.value) return

  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowRight') {
    nextLightbox()
  } else if (event.key === 'ArrowLeft') {
    prevLightbox()
  }
}

onMounted(() => {
  startAutoplay()
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  stopAutoplay()
  closeLightbox()
  window.removeEventListener('keydown', handleKeydown)
})

const canonicalUrl = buildCanonicalUrl(`/projects/${project.id}`)
const ogImage = project.coverImage
  ? buildCanonicalUrl(project.coverImage)
  : `${SITE_URL}/favicon-32x32.png?v=20260603`
const projectMetadata: Record<string, { title: string, description: string }> = {
  theringexperience: {
    title: 'The Ring Experience | Published Client Website | The Froggy Studio',
    description:
      'Published client website for The Ring Experience, with Vue development, Sanity CMS setup, and content structure.',
  },
  'brand-identity-design-for-fire-starter-company': {
    title: 'Focum | Brand Identity Concept | The Froggy Studio',
    description:
      'Brand identity concept for Focum focused on naming direction, identity systems, and packaging direction.',
  },
  'secret-garden': {
    title: 'The Secret Garden | Internal Product | The Froggy Studio',
    description:
      'Internal desktop mood diary app with product concept, UX/UI design, local-first data structure, Electron packaging, and emotional ritual-driven interaction design.',
  },
  'atlas-pro': {
    title: 'Atlas Pro Social Media Management Project | The Froggy Studio',
    description:
      'Atlas Pro is an ongoing social media management project for a parkour and youth activity program, supported by The Froggy Studio through content planning, captions, campaign direction and paid ads support.',
  },
}
const metadata = projectMetadata[project.id] || {
  title: `${project.title} | Project | The Froggy Studio`,
  description: project.summary,
}
const breadcrumbItems = [
  { name: 'Home', item: SITE_URL },
  { name: 'Projects', item: buildCanonicalUrl('/projects') },
  { name: project.title, item: canonicalUrl },
]

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
        itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: metadata.description,
        url: canonicalUrl,
        author: {
          '@type': 'Organization',
          name: 'The Froggy Studio',
          url: SITE_URL,
        },
        about: project.searchIntentLabel,
        keywords: [project.industry, ...project.tags],
      }),
    },
  ],
})

useSeoMeta({
  title: metadata.title,
  description: metadata.description,
  ogTitle: metadata.title,
  ogDescription: metadata.description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogImage,
  ogImageAlt: project.coverImageAlt || project.title,
  twitterCard: 'summary_large_image',
  twitterTitle: metadata.title,
  twitterDescription: metadata.description,
  twitterImage: ogImage,
  robots: INDEXABLE_ROBOTS,
})
</script>
