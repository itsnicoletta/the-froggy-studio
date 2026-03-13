<template>
  <div id="top" class="pb-0">
    <NuxtRouteAnnouncer />
    <AppNavbar />

    <main class="space-y-8 pb-12 md:space-y-10 md:pb-16 lg:space-y-12 lg:pb-20">
      <section class="hero-shell pt-28 md:pt-24 lg:pt-28">
        <div
          class="panel-card overflow-hidden border-2 border-border bg-surface text-text-inverse"
        >
          <div
            class="grid min-h-[78svh] items-center gap-8 px-5 py-6 md:grid-cols-[1.08fr_0.92fr] md:gap-10 md:px-12 md:py-6 lg:px-16"
          >
            <div class="space-y-5 md:space-y-6">
              <p class="eyebrow border-white/15 bg-white/10 text-text-inverse">
                Design brand new with
              </p>

              <div class="max-w-2xl">
                <h1 class="text-[2.6rem] leading-[0.9] sm:text-6xl lg:text-7xl">The Froggy Studio</h1>
              </div>

              <p class="max-w-xl text-[0.95rem] leading-7 text-text-muted sm:text-base">
                We help <strong>standout brands</strong> launch <strong>bold Websites</strong>
                with clear positioning, strong design, and <strong>SEO foundations</strong>
                that are ready from day one.
              </p>

              <div class="flex flex-wrap gap-3">
                <BaseButton href="#contact">Let&apos;s talk</BaseButton>
                <BaseButton href="#services" variant="outlineInverse">Explore services</BaseButton>
              </div>
            </div>

            <div class="relative flex min-h-[320px] items-center justify-center sm:min-h-[380px] md:min-h-[560px]">
              <div class="flex items-center justify-center">
                <img
                  src="/ranocchie.svg"
                  alt="The Froggy Studio frogs illustration"
                  class="h-auto w-full max-w-[620px] sm:max-w-[760px] lg:max-w-[980px]"
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
                <p
                  class="eyebrow"
                  :class="service.eyebrowTone"
                >
                  {{ service.eyebrow }}
                </p>
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
            <p class="eyebrow bg-card text-text">
              Our Process
            </p>
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
          <div class="space-y-6">
            <h2 class="text-[2rem] leading-[0.96] sm:mt-4 sm:text-5xl">
              Start with a simple message.
            </h2>
            <p class="max-w-md text-[0.95rem] leading-7 text-text/75">
              Tell us <strong>what you are building, what feels stuck, or what kind of help you need</strong>.
              We will reply with <strong>a clear next step</strong>, in simple language, and help you understand
              what makes sense before anything gets too complicated.
            </p>

            <ul class="space-y-3 pt-1 text-sm leading-7 text-text/75">
              <li>
                <strong class="font-extrabold text-text">A good fit for:</strong>
                Brand refreshes, Websites, campaigns, growth work, and early ideas that need direction.
              </li>
              <li>
                <strong class="font-extrabold text-text">Working with:</strong>
                B2B, B2C, and retail teams in Sri Lanka and remotely, from brand thinking to digital delivery.
              </li>
              <li>
                <strong class="font-extrabold text-text">You do not need a perfect brief:</strong>
                a rough idea is enough for us to start the conversation well.
              </li>
            </ul>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
            class="panel-card grid gap-4 bg-white/85 p-4 md:gap-5 md:p-5"
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
                Pick the area you need help with and share <strong>the goal, the problem, or the result you want</strong>.
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

            <p class="px-1 text-xs leading-5 text-text/60">
              The clearer the context, the faster we can suggest <strong>the right next step</strong>.
            </p>

            <div class="pt-1">
              <BaseButton type="submit">Send request</BaseButton>
            </div>
          </form>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const siteUrl = 'https://www.your-real-domain.com'
const canonicalUrl = `${siteUrl}/`
const ogImage = `${siteUrl}/ranocchie.svg`

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon_the_froggy_studio.svg',
    },
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
  meta: [
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
})

useSeoMeta({
  title: 'Creative Agency in Sri Lanka for Web Design, Branding & SEO | The Froggy Studio',
  description:
    'The Froggy Studio is a creative agency in Sri Lanka helping brands launch bold websites, stronger positioning, and clear digital experiences through Art Direction, Marketing, AI Chatbot, and Product Design.',
  ogTitle: 'Creative Agency in Sri Lanka for Web Design, Branding & SEO | The Froggy Studio',
  ogDescription:
    'Creative agency in Sri Lanka for Art Direction, Web Design, Marketing, AI Chatbot, and Product Design. Built for brands that want clarity, personality, and growth.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage,
  ogImageAlt: 'The Froggy Studio frogs illustration',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Froggy Studio | Creative Agency in Sri Lanka',
  twitterDescription:
    'Bold websites, clear positioning, and creative digital systems for growing brands in Sri Lanka and beyond.',
  twitterImage: ogImage,
})

const faqItems = [
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

const openFaqItem = ref<string | null>(null)

const openServiceAccordions = reactive<Record<string, string | null>>(
  Object.fromEntries(serviceCards.map((service) => [service.title, null])),
)

function toggleFaqItem(itemTitle: string) {
  openFaqItem.value = openFaqItem.value === itemTitle ? null : itemTitle
}

function toggleServiceAccordion(serviceTitle: string, itemTitle: string) {
  openServiceAccordions[serviceTitle] =
    openServiceAccordions[serviceTitle] === itemTitle ? null : itemTitle
}
</script>
