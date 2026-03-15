<template>
  <div id="top" class="pb-0">
    <AppNavbar />

    <div
      v-if="isSuccessPopupOpen"
      class="fixed inset-0 z-[90] flex items-center justify-center bg-black/45 px-4"
    >
      <div class="panel-card relative w-full max-w-md bg-card p-5 md:p-6">
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-surface text-white transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-border)]"
          aria-label="Close message"
          @click="closeSuccessPopup"
        >
          <span class="relative block h-4 w-4">
            <span class="absolute left-1/2 top-1/2 h-1 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-white" />
            <span class="absolute left-1/2 top-1/2 h-1 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
          </span>
        </button>

        <div class="space-y-4 pr-10">
          <p class="eyebrow bg-primary">Message sent</p>
          <h2 class="text-[2rem] leading-[0.96] sm:text-4xl">
            We&apos;ve received your message.
          </h2>
          <p class="text-sm leading-7 text-text/75 sm:text-base">
            Thanks for reaching out to <strong>The Froggy Studio</strong>. We&apos;ll get back to
            you with a clear next step.
          </p>
          <div class="pt-1">
            <BaseButton type="button" @click="closeSuccessPopup">Close</BaseButton>
          </div>
        </div>
      </div>
    </div>

    <main class="space-y-8 pb-12 md:space-y-10 md:pb-16 lg:space-y-12 lg:pb-20">
      <section class="hero-shell pt-28 md:pt-24 lg:pt-28">
        <div class="panel-card overflow-hidden border-2 border-border bg-surface text-text-inverse">
          <div
            class="hero-grid grid min-h-[78svh] items-center gap-8 px-5 py-6 pb-0 md:grid-cols-2 md:gap-10 md:px-12 md:py-6 md:pb-0 lg:px-16"
          >
            <div class="hero-copy relative z-10 space-y-5 md:space-y-6">
              <p class="eyebrow border-white/15 bg-white/10 text-text-inverse">
                Design brand new with
              </p>

              <div class="max-w-2xl">
                <h1 class="text-[2.6rem] leading-[0.9] sm:text-6xl lg:text-7xl">The Froggy Studio</h1>
              </div>

              <p class="max-w-xl text-[0.95rem] leading-7 text-text-muted sm:text-base">
                We are a <strong>creative and marketing agency in Sri Lanka</strong> helping
                <strong>standout brands</strong> launch <strong>bold Websites</strong> with clear
                positioning, strong design, and <strong>SEO foundations</strong> that are ready
                from day one.
              </p>

              <div class="flex flex-wrap gap-3">
                <BaseButton href="#contact">Let&apos;s talk</BaseButton>
                <BaseButton href="#services" variant="outlineInverse">Explore services</BaseButton>
              </div>
            </div>

            <div class="hero-animation-shell relative z-0 flex min-h-[320px] items-end justify-center self-end sm:min-h-[380px] md:min-h-[520px]">
              <div
                ref="heroAnimationContainer"
                class="hero-animation absolute bottom-0 left-1/2 h-[380px] w-[800px] max-w-none -translate-x-1/2 self-end sm:h-[460px] sm:w-[980px] md:h-[700px] md:w-[1240px] lg:h-[760px] lg:w-[1320px]"
                aria-label="The Froggy Studio hero animation"
              />
              <div
                v-if="!isHeroAnimationReady"
                class="hero-animation-fallback pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
              >
                <img
                  src="/ranocchie.svg"
                  alt="The Froggy Studio frogs illustration"
                  class="h-auto w-[800px] max-w-none sm:w-[980px] md:w-[1240px] lg:w-[1320px]"
                >
              </div>
            </div>
          </div>

          <div class="frog-divider">
            <div class="frog-divider-track">
              <div
                v-for="index in 3"
                :key="index"
                class="frog-divider-item"
              >
                <template v-for="item in dividerItems" :key="`${index}-${item.text}`">
                  <span>{{ item.text }}</span>
                  <span class="frog-divider-dot" aria-hidden="true" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="site-shell py-12 md:py-14">
        <div class="space-y-6 md:space-y-7">
          <article
            v-for="service in serviceCards"
            :key="service.title"
            class="panel-card overflow-hidden p-5 md:p-8 lg:p-10"
            :class="service.tone"
          >
            <div class="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
              <div class="space-y-4 lg:pr-6">
                <p class="eyebrow" :class="service.eyebrowTone">{{ service.eyebrow }}</p>
                <h2 class="section-title text-[2.35rem] leading-[0.92] sm:text-6xl">{{ service.title }}</h2>
                <p
                  class="max-w-md text-[0.98rem] leading-7 [&_strong]:font-extrabold sm:text-lg"
                  :class="service.bodyTone"
                  v-html="service.body"
                />
                <p
                  class="max-w-md text-sm leading-7 [&_strong]:font-extrabold"
                  :class="service.noteTone"
                  v-html="service.note"
                />
              </div>

              <div class="space-y-3 lg:pt-3">
                <AppAccordion
                  v-for="item in service.items"
                  :key="item.title"
                  :title="item.title"
                  :content="item.content"
                  :is-open="openServiceAccordions[service.title] === item.title"
                  :summary-class="service.accordionSummaryClass"
                  :icon-class="service.accordionIconClass"
                  @toggle="toggleServiceAccordion(service.title, item.title)"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="process" class="site-shell py-12 md:py-14">
        <div class="panel-card overflow-hidden bg-tertiary text-text-inverse">
          <div class="px-5 py-9 text-center md:px-10 md:py-12">
            <p class="eyebrow bg-card text-text">Our Process</p>
            <h2 class="mt-5 text-[2.35rem] leading-[0.92] sm:text-6xl">Our Process</h2>
            <p
              class="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/80 [&_strong]:font-extrabold [&_strong]:text-white"
              v-html="processIntro"
            />
          </div>

          <div class="grid gap-4 px-4 pb-6 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-4 lg:px-8">
            <article
              v-for="step in processSteps"
              :key="step.number"
              class="panel-card bg-card p-5 text-text sm:p-6"
            >
              <p class="text-4xl font-black tracking-tight sm:text-5xl" :class="step.numberTone">
                {{ step.number }}
              </p>
              <h3 class="mt-4 text-[1.7rem] leading-[0.95] sm:mt-5 sm:text-3xl">{{ step.title }}</h3>
              <p
                class="mt-4 text-[0.98rem] leading-7 text-text/80 [&_strong]:font-extrabold [&_strong]:text-text"
                v-html="step.body"
              />
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="site-shell py-8 md:py-10">
        <div class="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div class="faq-panel panel-card p-7 md:p-8">
            <p class="eyebrow bg-card">FAQ</p>
            <h2 class="mt-4 text-[2rem] leading-[0.96] sm:text-5xl">The things clients usually want to understand first.</h2>
          </div>

          <div class="space-y-4">
            <AppAccordion
              v-for="item in faqItems"
              :key="item.title"
              :title="item.title"
              :content="item.content"
              :is-open="openFaqItem === item.title"
              summary-class="bg-card text-text"
              icon-class="bg-primary text-text"
              @toggle="toggleFaqItem(item.title)"
            />
          </div>
        </div>
      </section>

      <section id="contact" class="site-shell py-12 md:py-14">
        <div class="panel-card grid gap-8 bg-card p-5 md:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:p-10">
          <div class="space-y-5">
            <h2 class="text-[2rem] leading-[0.96] sm:mt-4 sm:text-5xl">
              Let&apos;s build something good.
            </h2>
            <p class="max-w-md text-[0.95rem] leading-7 text-text/75">
              Tell us <strong>what you need help with</strong> and we will come back with <strong>a clear next step</strong>.
            </p>

            <ul class="space-y-2 pt-1 text-sm leading-7 text-text/75">
              <li>
                <strong class="font-extrabold text-text">Good for:</strong>
                Websites, Marketing, Brand work, and early ideas.
              </li>
              <li>
                <strong class="font-extrabold text-text">Working with:</strong>
                B2B, B2C, and retail teams in Sri Lanka and remotely.
              </li>
              <li>
                <strong class="font-extrabold text-text">No perfect brief needed:</strong>
                a rough idea is enough.
              </li>
            </ul>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/?submitted=true#contact"
            class="panel-card grid gap-4 bg-white/85 p-4 md:gap-5 md:p-5"
            @submit.prevent="submitContactForm"
          >
            <input type="hidden" name="form-name" value="contact">
            <p class="hidden">
              <label>
                Do not fill this out if you are human:
                <input name="bot-field" type="text">
              </label>
            </p>

            <div class="space-y-2 px-1">
              <p class="max-w-lg text-sm leading-6 text-text/70">
                Pick the service and tell us <strong>what you want to do</strong>.
              </p>
            </div>

            <label class="grid gap-2">
              <span class="text-sm font-bold">Name</span>
              <input
                class="rounded-2xl border-2 border-border px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_4px_0_0_var(--color-border)]"
                type="text"
                name="name"
                placeholder="What should we call you?"
                required
              >
            </label>

            <label class="grid gap-2">
              <span class="text-sm font-bold">Email</span>
              <input
                class="rounded-2xl border-2 border-border px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_4px_0_0_var(--color-border)]"
                type="email"
                name="email"
                placeholder="you@email.com"
                required
              >
            </label>

            <label class="grid gap-2">
              <span class="text-sm font-bold">Subject</span>
              <select
                class="rounded-2xl border-2 border-border bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_4px_0_0_var(--color-border)]"
                name="subject"
                required
              >
                <option value="" disabled selected>Select a service</option>
                <option value="Art Direction">Art Direction</option>
                <option value="Websites">Websites</option>
                <option value="Marketing">Marketing</option>
                <option value="AI Chatbot">AI Chatbot</option>
                <option value="Product Design">Product Design</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>

            <label class="grid gap-2">
              <span class="text-sm font-bold">Message</span>
              <textarea
                class="min-h-32 rounded-3xl border-2 border-border px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_4px_0_0_var(--color-border)] sm:min-h-36"
                name="message"
                placeholder="Tell us what you want to launch, improve, or figure out"
                required
              />
            </label>

            <p v-if="contactFormError" class="px-1 text-sm font-bold text-tertiary">
              {{ contactFormError }}
            </p>

            <div class="pt-1">
              <BaseButton type="submit">
                {{ isSubmittingContactForm ? 'Sending...' : 'Send request' }}
              </BaseButton>
            </div>
          </form>
        </div>
      </section>

      <section id="about" class="site-shell scroll-mt-0 py-6 md:scroll-mt-0 md:py-8">
        <div class="space-y-6 md:space-y-8">
          <div class="panel-card bg-card px-5 py-7 text-center md:px-8 md:py-8">
            <p class="eyebrow bg-primary">About</p>
            <h2 class="mt-4 text-[2.1rem] leading-[0.94] sm:text-5xl">
              The people behind The Froggy Studio.
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-[0.96rem] leading-7 text-text/75 sm:text-base">
              Three different strengths, one shared direction:
              <strong>building brands, websites, and digital systems that feel clear and alive</strong>.
            </p>
          </div>

          <div class="grid gap-5 lg:grid-cols-3">
            <article
              v-for="member in teamMembers"
              :key="member.name"
              class="panel-card flex min-h-[440px] flex-col overflow-hidden p-5 md:min-h-[500px] md:p-6"
              :class="member.tone"
            >
              <div class="space-y-4">
                <p class="eyebrow" :class="member.eyebrowTone">{{ member.eyebrow }}</p>
                <div class="space-y-2">
                  <h3 class="text-[2rem] leading-[0.94] sm:text-[2.35rem]">{{ member.name }}</h3>
                  <p class="text-sm font-bold uppercase tracking-[0.16em]" :class="member.roleTone">
                    {{ member.role }}
                  </p>
                </div>
                <p
                  class="max-w-md text-[0.96rem] leading-7 [&_strong]:font-extrabold"
                  :class="member.bodyTone"
                  v-html="member.body"
                />
              </div>

              <div class="relative mt-auto flex min-h-[170px] items-end justify-center pt-8">
                <img
                  :src="member.frog"
                  :alt="`${member.name} frog illustration`"
                  class="h-auto object-contain object-bottom"
                  :class="member.imageClass"
                >
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <AppFooter @open-privacy="openPrivacyModal" @open-cookies="openCookieModal" />

    <AppPolicyModal
      :open="isPrivacyModalOpen"
      title="Privacy Policy"
      eyebrow="Privacy"
      :content="privacyPolicyContent"
      @close="closePolicyModals"
    />

    <AppPolicyModal
      :open="isCookieModalOpen"
      title="Cookie Policy"
      eyebrow="Cookies"
      :content="cookiePolicyContent"
      @close="closePolicyModals"
    />

    <AppCookieBanner
      :visible="showCookieBanner"
      @accept="acceptAnalyticsCookies"
      @reject="acceptNecessaryCookies"
      @open-cookies="openCookiePolicyFromBanner"
    />
  </div>
</template>

<script setup lang="ts">
import ranaBlu from '~/assets/rana-blu.svg'
import ranaVerde from '~/assets/rana-verde.svg'
import ranaViola from '~/assets/rana-viola.svg'
import froggyAnimation from '~/assets/the froggy animation.json'

const route = useRoute()
const router = useRouter()
const consentCookieName = 'tfs_cookie_consent'
const consentMaxAge = 60 * 60 * 24 * 180
const heroAnimationContainer = ref<HTMLElement | null>(null)
const isHeroAnimationReady = ref(false)
let destroyHeroAnimation: (() => void) | null = null

const siteUrl = 'https://thefroggystudio.com'
const canonicalUrl = `${siteUrl}/`
const ogImage = `${siteUrl}/ranocchie.svg`
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: canonicalUrl,
    name: 'The Froggy Studio',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: 'The Froggy Studio',
    url: canonicalUrl,
    image: ogImage,
    email: 'mailto:thefroggystudiosl@gmail.com',
    description:
      'Creative and marketing agency in Sri Lanka for Art Direction, Websites, Marketing, AI Chatbot, Product Design, and SEO-ready digital experiences.',
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    availableLanguage: ['en'],
    knowsAbout: [
      'Marketing agency',
      'Creative agency',
      'Web design',
      'SEO',
      'Art direction',
      'Product design',
      'AI chatbot',
      'Frontend development',
      'Backend development',
    ],
    serviceType: [
      'Marketing strategy',
      'Web design',
      'Web development',
      'SEO foundations',
      'Art direction',
      'Product design',
      'AI chatbot design',
    ],
  },
]

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon_the_froggy_studio.svg' },
    { rel: 'canonical', href: canonicalUrl },
  ],
  meta: [
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    { name: 'theme-color', content: '#000000' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData),
    },
  ],
})

useSeoMeta({
  title: 'Marketing Agency in Sri Lanka for Web Design, Branding & SEO | The Froggy Studio',
  description:
    'The Froggy Studio is a marketing agency in Sri Lanka helping brands launch bold websites, stronger positioning, and clear digital experiences through Art Direction, Marketing, AI Chatbot, Product Design, and SEO-ready execution.',
  ogTitle: 'Marketing Agency in Sri Lanka for Web Design, Branding & SEO | The Froggy Studio',
  ogDescription:
    'Marketing agency in Sri Lanka for Art Direction, Web Design, Marketing, AI Chatbot, and Product Design. Built for brands that want clarity, personality, and growth.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage,
  ogImageAlt: 'The Froggy Studio frogs illustration',
  ogSiteName: 'The Froggy Studio',
  ogLocale: 'en_LK',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Froggy Studio | Marketing Agency in Sri Lanka',
  twitterDescription:
    'Marketing agency in Sri Lanka for bold websites, clearer positioning, SEO-ready structure, and creative digital systems.',
  twitterImage: ogImage,
})

const faqItems = [
  {
    title: 'Are you a marketing agency in Sri Lanka or do you work internationally?',
    content:
      'Both. We are based in <strong>Sri Lanka</strong> and work with brands locally and remotely. That means we can support companies looking for a <strong>marketing agency in Sri Lanka</strong> while also collaborating with international teams that need strategy, websites, and creative delivery.',
  },
  {
    title: 'What does Marketing really help with?',
    content:
      'Marketing helps people <strong>understand your offer, trust your business, and take the next step</strong>. It is not only about posting more. It is about clearer messaging, better campaigns, better pages, and making it easier for the right people to choose you.',
  },
  {
    title: 'Do you work with B2B, B2C, and retail businesses?',
    content:
      'Yes. We work across <strong>B2B, B2C, and retail</strong>. Depending on the project, we can support the brand from <strong>strategy and positioning to design, campaigns, customer experience, and delivery touchpoints</strong>, so the whole system feels more connected.',
  },
  {
    title: 'Why can a Website not be only beautiful?',
    content:
      'Because a Website also needs to be easy to understand. People should quickly see <strong>what you do, who it is for, and what they should do next</strong>. If it only looks nice but feels confusing, it will not help the business much.',
  },
  {
    title: 'Why do you care about SEO and AIO from the beginning?',
    content:
      'Because they both help people find and understand your business. <strong>SEO</strong> helps your Website appear more clearly in search engines like Google. <strong>AIO</strong> means preparing your content so it is also easier for AI tools and AI-generated answers to understand and use. When we think about both from the beginning, your Website becomes <strong>clearer, easier to find, and more useful</strong> across search, AI, and real human visits.',
  },
  {
    title: 'Do I need all of this if my business is small?',
    content:
      'Not everything has to be big. A small business still benefits from <strong>clarity, consistency, and a professional look</strong>. Even a simple system can help people <strong>trust you faster</strong> and understand why they should choose you.',
  },
  {
    title: 'Can you explain things in a simple way while we work?',
    content:
      'Yes. That is part of the work. We do not expect you to already know terms like Branding, Product Design, or SEO. We explain things in <strong>simple language</strong> so you can make decisions <strong>without feeling lost</strong>.',
  },
]

const serviceCards = [
  {
    title: 'Art Direction',
    eyebrow: 'Clarity first',
    tone: 'bg-primary text-text',
    eyebrowTone: 'bg-card',
    bodyTone: 'text-text',
    noteTone: 'text-text/80',
    accordionSummaryClass: 'bg-card text-text',
    accordionIconClass: 'bg-primary text-text',
    body: 'Art Direction gives the whole brand <strong>a point of view</strong>. It helps every touchpoint feel related, intentional, and stronger than a collection of random nice-looking pieces.',
    note: 'A clear visual direction makes every page, campaign, and asset feel like it belongs to <strong>the same world</strong>.',
    items: [
      {
        title: 'What is Art Direction?',
        content:
          'Art Direction means deciding <strong>how your business should look and feel</strong>. It includes colors, layout, image style, fonts, and the overall mood people notice when they see your brand.',
      },
      {
        title: 'Why does it matter for a website?',
        content:
          'Without a clear direction, a website can feel random. With it, the site feels <strong>clearer, more trustworthy, and more professional</strong> for the people visiting it.',
      },
      {
        title: 'What do we help you decide?',
        content:
          'We help you decide <strong>the visual direction</strong> so your website, social media, campaigns, and future materials all feel connected and consistent.',
      },
    ],
  },
  {
    title: 'Websites',
    eyebrow: 'Built to perform',
    tone: 'bg-secondary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    bodyTone: 'text-text-inverse',
    noteTone: 'text-text-inverse/80',
    accordionSummaryClass: 'bg-card text-text',
    accordionIconClass: 'bg-secondary text-text-inverse',
    body: 'We build Websites that feel bold but stay practical: <strong>clean structure, reusable components, strong pacing</strong>, and a foundation that supports SEO from the start.',
    note: 'The goal is not just a pretty page. It is a site that feels <strong>easy to use, easy to grow, and easy to find</strong>.',
    items: [
      {
        title: 'What makes a Website good?',
        content:
          'A good Website should be <strong>easy to understand, easy to use, and fast to open</strong>. It should not only look nice, but also help people quickly understand what you do.',
      },
      {
        title: 'Why do we build in reusable sections?',
        content:
          'We build the site in <strong>reusable sections</strong> so it is easier to update later. This keeps everything cleaner and helps the Website grow without becoming confusing.',
      },
      {
        title: 'Where does SEO fit in?',
        content:
          'SEO starts with <strong>clear page structure and clear content</strong>. We think about that from the beginning, so search engines and real people can both understand the Website more easily.',
      },
    ],
  },
  {
    title: 'Marketing',
    eyebrow: 'Message with momentum',
    tone: 'bg-tertiary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    bodyTone: 'text-text-inverse',
    noteTone: 'text-text-inverse/80',
    accordionSummaryClass: 'bg-card text-text',
    accordionIconClass: 'bg-tertiary text-text-inverse',
    body: 'Marketing is not filler copy or louder captions. It is the system that helps the right people <strong>understand your offer, trust your value, and move closer to action</strong>.',
    note: 'We focus on <strong>messaging, structure, and conversion paths</strong> that support growth instead of adding noise.',
    items: [
      {
        title: 'What we mean by Marketing',
        content:
          'For us, Marketing means <strong>helping people understand your business clearly</strong>. It is about the message, the offer, and why someone should choose you instead of someone else.',
      },
      {
        title: 'Why is clarity more important than doing more?',
        content:
          'Posting more or running more ads does not always help. Very often, <strong>a clearer message and a better direction</strong> bring better results than simply doing more.',
      },
      {
        title: 'How can this help your business grow?',
        content:
          'Clear Marketing helps the right people <strong>understand your value faster</strong>. This can lead to more trust, more messages, and more chances to turn interest into a booking or sale.',
      },
    ],
  },
  {
    title: 'AI Chatbot',
    eyebrow: 'Helpful by design',
    tone: 'bg-quaternary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    bodyTone: 'text-text-inverse',
    noteTone: 'text-text-inverse/80',
    accordionSummaryClass: 'bg-card text-text',
    accordionIconClass: 'bg-success text-text',
    body: 'An AI Chatbot should feel useful, not intrusive. We design <strong>lightweight conversational flows</strong> that answer common questions, guide visitors, and open the door to faster contact.',
    note: 'The best AI touchpoints <strong>reduce friction</strong>. They do not compete with the rest of the experience.',
    items: [
      {
        title: 'What can an AI Chatbot do?',
        content:
          'An AI Chatbot can answer common questions, guide visitors, and make first contact easier. It is useful for <strong>saving time on repeated questions</strong> without replacing real human support.',
      },
      {
        title: 'Why do we keep it simple?',
        content:
          'If an AI Chatbot tries to do too much, it becomes confusing. We prefer <strong>a simple and focused tool</strong> that helps visitors quickly without getting in their way.',
      },
      {
        title: 'How does it fit your brand?',
        content:
          'We shape the tone and flow so the AI Chatbot feels <strong>natural for your business</strong>, not like a random extra tool added at the last minute.',
      },
    ],
  },
  {
    title: 'Product Design',
    eyebrow: 'Systems that scale',
    tone: 'bg-quinary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    bodyTone: 'text-text-inverse',
    noteTone: 'text-text-inverse/80',
    accordionSummaryClass: 'bg-card text-text',
    accordionIconClass: 'bg-quinary text-text-inverse',
    body: 'Product Design is where the experience becomes repeatable. We define <strong>the parts, states, and patterns</strong> that help interfaces stay coherent as they grow.',
    note: 'This is how we keep digital products from turning into <strong>a patchwork of one-off screens</strong>.',
    items: [
      {
        title: 'What is Product Design?',
        content:
          'Product Design is about <strong>how a digital product works and feels to use</strong>. It includes screens, buttons, user flows, and the rules that keep everything clear and consistent.',
      },
      {
        title: 'Why is it more than just visuals?',
        content:
          'A product can look beautiful and still feel confusing. Product Design connects <strong>visual design with usability</strong>, so people can actually use it more easily.',
      },
      {
        title: 'How do we keep it simple and usable?',
        content:
          'We build the smallest system that works well: <strong>clear building blocks, simple rules, and room to grow</strong>. This makes the product easier to manage over time.',
      },
    ],
  },
]

const processSteps = [
  {
    number: '01',
    numberTone: 'text-primary',
    title: 'Discovery Call',
    body: 'We hop on a call to understand <strong>your goals, audience, and the shape the project needs to take</strong>.',
  },
  {
    number: '02',
    numberTone: 'text-secondary',
    title: 'Strategy & Plan',
    body: 'We map out <strong>a clear direction</strong> with priorities, structure, timelines, and a creative point of view.',
  },
  {
    number: '03',
    numberTone: 'text-tertiary',
    title: 'Design & Build',
    body: 'We design bold pages and build them with <strong>a clean component system</strong> that stays easy to grow.',
  },
  {
    number: '04',
    numberTone: 'text-quaternary',
    title: 'Launch & Grow',
    body: 'We launch the project, polish the final details, and leave you with <strong>a solid base for what comes next</strong>.',
  },
]

const processIntro =
  'Four simple steps from first idea to launch. <strong>Clear, collaborative, and built to keep momentum high.</strong>'

const dividerItems = [
  { text: 'The Froggy Studio' },
  { text: 'Creative Agency' },
  { text: 'Bold Websites' },
  { text: 'Brand-first Design' },
  { text: 'Marketing That Builds Momentum' },
  { text: 'SEO-ready Launches' },
  { text: 'Creative Direction' },
  { text: 'Conversion-focused Pages' },
]

const teamMembers = [
  {
    name: 'Christus',
    eyebrow: 'Systems and delivery',
    tone: 'bg-tertiary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    roleTone: 'text-white/70',
    bodyTone: 'text-white/85',
    role: 'Web Dev, Frontend, Backend, Systems',
    body: 'Christus brings the technical backbone: <strong>frontend, backend, systems thinking, and practical delivery</strong> that keeps websites solid and ready to grow.',
    frog: ranaBlu,
    imageClass: 'w-full max-w-[210px] md:max-w-[232px]',
  },
  {
    name: 'Nicoletta',
    eyebrow: 'Art direction and build',
    tone: 'bg-primary text-text',
    eyebrowTone: 'bg-card text-text',
    roleTone: 'text-text/70',
    bodyTone: 'text-text/80',
    role: 'Art Direction, Product, Development',
    body: 'Nicoletta shapes the visual direction of the studio and helps turn ideas into <strong>stronger interfaces, sharper product thinking, and polished digital execution</strong>.',
    frog: ranaViola,
    imageClass: 'w-full max-w-[168px] md:max-w-[182px]',
  },
  {
    name: 'Steve',
    eyebrow: 'Strategy and growth',
    tone: 'bg-secondary text-text-inverse',
    eyebrowTone: 'bg-card text-text',
    roleTone: 'text-white/70',
    bodyTone: 'text-white/85',
    role: 'Chatbot, Marketing Strategy, SEO',
    body: 'Steve focuses on <strong>chatbot thinking, search visibility, and marketing direction</strong>, helping brands move with more clarity and better momentum.',
    frog: ranaVerde,
    imageClass: 'w-full max-w-[188px] md:max-w-[206px]',
  },
]

const hasSubmittedSuccessfully = ref(false)
const isSubmittingContactForm = ref(false)
const contactFormError = ref('')
const isSuccessPopupOpen = computed(
  () => route.query.submitted === 'true' || hasSubmittedSuccessfully.value,
)
const isPrivacyModalOpen = ref(false)
const isCookieModalOpen = ref(false)
const showCookieBanner = ref(false)
const cookieConsent = ref<'analytics' | 'necessary' | null>(null)
const openFaqItem = ref<string | null>(null)
const privacyPolicyContent = `
  <p>This privacy notice explains how <strong>The Froggy Studio</strong> collects, uses, and protects personal information when you visit this website or contact us.</p>
  <h3>Who we are</h3>
  <p>The Froggy Studio is a creative studio working with clients in Sri Lanka and internationally. For privacy questions, you can contact us at <a href="mailto:thefroggystudiosl@gmail.com">thefroggystudiosl@gmail.com</a>.</p>
  <h3>What we collect</h3>
  <ul>
    <li>Information you submit through the contact form, such as your name, email address, subject, and message.</li>
    <li>Basic technical information such as browser type, device information, and site usage data when analytics are enabled.</li>
  </ul>
  <h3>How we use it</h3>
  <ul>
    <li>To reply to your enquiry and discuss potential work.</li>
    <li>To improve the website, content, and user experience.</li>
    <li>To keep the website secure and functioning correctly.</li>
  </ul>
  <h3>Consent and analytics</h3>
  <p>We use the information you submit because it is necessary to respond to your request. Optional analytics cookies should only be used when you choose to accept them.</p>
  <h3>Third-party services</h3>
  <p>This website may use service providers such as Netlify for hosting and form handling, and analytics tools when consent has been given. These providers may process limited technical or contact data on our behalf.</p>
  <h3>Data retention</h3>
  <p>We keep contact enquiries only for as long as needed to respond, manage potential projects, and maintain reasonable business records.</p>
  <h3>Your choices</h3>
  <p>You can ask to access, update, or delete personal information you have shared with us by emailing <a href="mailto:thefroggystudiosl@gmail.com">thefroggystudiosl@gmail.com</a>.</p>
  <h3>Policy updates</h3>
  <p>We may update this notice from time to time to reflect changes to the site, tools, or legal requirements.</p>
`
const cookiePolicyContent = `
  <p>This cookie policy explains how <strong>The Froggy Studio</strong> uses cookies and similar technologies on this website.</p>
  <h3>Essential cookies</h3>
  <p>These cookies are needed for core website functions, including remembering a cookie consent choice and helping forms work correctly.</p>
  <h3>Analytics cookies</h3>
  <p>If enabled, analytics cookies help us understand how people use the site, which pages are visited, and how we can improve the experience. These are optional and should only run after consent.</p>
  <h3>How consent works</h3>
  <p>When you choose a cookie option, we save that preference in a browser cookie so the site can remember your choice and respect it on future visits.</p>
  <h3>Managing cookies</h3>
  <p>You can clear cookies from your browser at any time. You can also reopen this cookie policy from the footer to review how cookies are used.</p>
  <h3>Third-party cookies</h3>
  <p>If analytics tools are activated, those providers may set their own cookies according to their service settings and retention periods.</p>
  <h3>Contact</h3>
  <p>If you have questions about cookies or privacy, contact us at <a href="mailto:thefroggystudiosl@gmail.com">thefroggystudiosl@gmail.com</a>.</p>
`

const openServiceAccordions = reactive<Record<string, string | null>>(
  Object.fromEntries(serviceCards.map((service) => [service.title, null])),
)

onMounted(() => {
  cookieConsent.value = readConsentCookie()
  showCookieBanner.value = !cookieConsent.value
})

onMounted(async () => {
  if (!heroAnimationContainer.value) {
    return
  }

  const lottie = (await import('lottie-web')).default
  const animation = lottie.loadAnimation({
    container: heroAnimationContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: froggyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMax meet',
    },
  })

  isHeroAnimationReady.value = true
  destroyHeroAnimation = () => animation.destroy()
})

onBeforeUnmount(() => {
  destroyHeroAnimation?.()
})

function readConsentCookie() {
  const cookieRow = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${consentCookieName}=`))

  const value = cookieRow?.split('=')[1]
  return value === 'analytics' || value === 'necessary' ? value : null
}

function writeConsentCookie(value: 'analytics' | 'necessary') {
  document.cookie =
    `${consentCookieName}=${value}; Max-Age=${consentMaxAge}; Path=/; SameSite=Lax; Secure`
  cookieConsent.value = value
  showCookieBanner.value = false
}

function closeSuccessPopup() {
  hasSubmittedSuccessfully.value = false
  const { submitted, ...restQuery } = route.query

  void router.replace({
    path: route.path,
    hash: '#contact',
    query: restQuery,
  })
}

function closePolicyModals() {
  isPrivacyModalOpen.value = false
  isCookieModalOpen.value = false
}

function openPrivacyModal() {
  closePolicyModals()
  isPrivacyModalOpen.value = true
}

function openCookieModal() {
  closePolicyModals()
  isCookieModalOpen.value = true
}

function openCookiePolicyFromBanner() {
  openCookieModal()
}

function acceptAnalyticsCookies() {
  writeConsentCookie('analytics')
}

function acceptNecessaryCookies() {
  writeConsentCookie('necessary')
}

async function submitContactForm(event: Event) {
  const form = event.target as HTMLFormElement | null

  if (!form || isSubmittingContactForm.value) {
    return
  }

  isSubmittingContactForm.value = true
  contactFormError.value = ''

  try {
    const formData = new FormData(form)
    const encodedData = new URLSearchParams()

    for (const [key, value] of formData.entries()) {
      encodedData.append(key, String(value))
    }

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodedData.toString(),
    })

    if (!response.ok) {
      throw new Error(`Netlify form submission failed with status ${response.status}`)
    }

    form.reset()
    hasSubmittedSuccessfully.value = true
    void router.replace({
      path: route.path,
      hash: '#contact',
      query: route.query,
    })
  }
  catch (error) {
    console.error(error)
    contactFormError.value = 'Something went wrong. Please try again in a moment.'
  }
  finally {
    isSubmittingContactForm.value = false
  }
}

function toggleFaqItem(itemTitle: string) {
  openFaqItem.value = openFaqItem.value === itemTitle ? null : itemTitle
}

function toggleServiceAccordion(serviceTitle: string, itemTitle: string) {
  openServiceAccordions[serviceTitle] =
    openServiceAccordions[serviceTitle] === itemTitle ? null : itemTitle
}
</script>
