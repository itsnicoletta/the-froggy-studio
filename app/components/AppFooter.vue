<template>
  <footer class="bg-surface text-text-inverse">
    <div class="site-shell px-2 py-6 md:py-8">
      <div class="panel-card grid gap-10 bg-surface px-6 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-8 lg:px-10">
        <div class="space-y-5">
          <p class="eyebrow border-white/20 bg-white/10 text-text-inverse">
            The Froggy Studio
          </p>
          <h2 class="max-w-xl text-4xl sm:text-5xl">
            Bold design, clear structure, and digital systems that feel alive.
          </h2>
          <p class="max-w-xl text-sm leading-7 text-text-muted">
            We build <strong class="font-extrabold text-white">Websites, brands, and growth-ready experiences</strong>
            with a playful point of view and a solid foundation underneath.
          </p>
          <BaseButton href="#top" variant="outlineInverse">Back to top</BaseButton>
        </div>

        <div class="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 class="font-display text-xl">Explore</h3>
            <div class="mt-3 space-y-2 text-sm text-text-muted">
              <a class="block transition hover:text-white" href="#services">Services</a>
              <a class="block transition hover:text-white" href="#process">Process</a>
              <a class="block transition hover:text-white" href="#faq">FAQ</a>
              <a class="block transition hover:text-white" href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 class="font-display text-xl">Say Hello</h3>
            <div class="mt-3 space-y-2 text-sm text-text-muted">
              <a
                class="block transition hover:text-white"
                href="mailto:hello@thefroggystudio.com"
              >
                hello@thefroggystudio.com
              </a>
              <p>Sri Lanka and remote-friendly</p>
              <p>B2B, B2C, and retail projects</p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pb-4 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 md:px-6">
        The Froggy Studio
      </div>
    </div>
  </footer>
</template>
