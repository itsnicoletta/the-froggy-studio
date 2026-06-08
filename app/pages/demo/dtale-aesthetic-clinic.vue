<template>
  <main class="dtale-home">
    <div class="preview-line">Private preview · Dtale Aesthetic Clinic homepage concept</div>

    <header class="site-header" aria-label="Dtale demo navigation">
      <a href="#" class="brand" @click.prevent aria-label="Dtale Aesthetic Clinic homepage">
        <span>Dtale</span>
        <small>Aesthetic Clinic</small>
      </a>
      <nav aria-label="Page sections">
        <a href="#treatments">Treatments</a>
        <a href="#doctor">Doctor</a>
        <a href="#consultation">Consultation</a>
        <a href="#booking">Contact</a>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Dtale Aesthetic Clinic</p>
        <h1>Clinical aesthetic precision.</h1>
        <p class="hero-lede">
          Personalised aesthetic medicine for skin, hair and facial rejuvenation - guided by
          medical expertise and a consultation-led approach.
        </p>
        <p class="hero-note">
          Led by Dr. Dilini Herath, Dtale brings together medical training, aesthetic judgement and
          personalised care for patients seeking precise, measured non-surgical treatments.
        </p>
        <div class="hero-actions">
          <a class="button button-brass" href="#booking">Book a consultation</a>
          <a class="button button-ghost" href="#treatments">Explore treatments</a>
        </div>
      </div>

      <div class="hero-visual" aria-label="Consultation-led aesthetic care visual area">
        <div class="visual-window">
          <img
            src="https://images.pexels.com/photos/11024139/pexels-photo-11024139.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Elegant aesthetic clinic interior"
            fetchpriority="high"
          >
          <p>Consultation-led aesthetic care</p>
        </div>
        <div class="hero-card hero-card-one">
          <span>Doctor</span>
          <strong>Dr. Dilini Herath</strong>
        </div>
        <div class="hero-card hero-card-two">
          <span>Medical profile</span>
          <strong>Aesthetic Physician</strong>
        </div>
        <div class="hero-card hero-card-three">
          <span>Credential</span>
          <strong>Skin Care &amp; Repair, Harvard</strong>
        </div>
        <div class="hero-card hero-card-four">
          <span>Care</span>
          <strong>Non-surgical aesthetic treatments</strong>
        </div>
      </div>
    </section>

    <section class="philosophy section-grid">
      <div>
        <p class="eyebrow">Philosophy</p>
        <h2>A precise approach to aesthetic medicine.</h2>
      </div>
      <div class="copy-column">
        <p>
          At Dtale, every treatment begins with understanding the person behind the skin concern.
          The approach is measured, medical-led and tailored - focused on suitability, clarity
          and controlled treatment planning.
        </p>
        <div class="principles">
          <article>
            <span>01</span>
            <strong>Consultation before treatment</strong>
          </article>
          <article>
            <span>02</span>
            <strong>Personalised treatment planning</strong>
          </article>
          <article>
            <span>03</span>
            <strong>Controlled, natural outcomes</strong>
          </article>
        </div>
      </div>
    </section>

    <section id="doctor" class="doctor section-grid">
      <div class="portrait-placeholder" aria-label="Doctor portrait or clinic photography area">
        <img
          src="https://images.pexels.com/photos/10521230/pexels-photo-10521230.jpeg?auto=compress&cs=tinysrgb&w=1100"
          alt="Minimal aesthetic clinic treatment room"
          loading="lazy"
        >
        <span>Clinic photography area</span>
      </div>
      <div class="doctor-copy">
        <p class="eyebrow">Led by medical expertise</p>
        <h2>Dr. Dilini Herath</h2>
        <p class="role">Aesthetic Physician</p>
        <ul class="credentials" aria-label="Doctor credentials">
          <li>MBBS(SL)</li>
          <li>PGDip Aesthetic Medicine (USA)</li>
          <li>Skin Care &amp; Repair (Harvard)</li>
          <li>Masters in Facial Aesthetic Medicine (India)</li>
          <li>PGDip Hair Transplant Surgery (India)</li>
          <li>B.Sc BioMed (UK)</li>
        </ul>
        <p>
          Dr. Dilini Herath's approach combines medical training with aesthetic understanding,
          supporting patients through personalised treatment plans for skin, hair and facial
          rejuvenation.
        </p>
      </div>
    </section>

    <section id="treatments" class="treatments section-block">
      <div class="section-heading">
        <p class="eyebrow">Treatments</p>
        <h2>Treatments structured around clinical suitability.</h2>
        <p>
          From consultation to aftercare, each treatment is approached with clarity, suitability and
          individual planning.
        </p>
      </div>
      <div class="treatment-grid">
        <article
          v-for="treatment in treatments"
          :key="treatment.title"
          class="treatment-card"
        >
          <span>{{ treatment.index }}</span>
          <h3>{{ treatment.title }}</h3>
          <p>{{ treatment.copy }}</p>
          <a href="#booking">Request consultation</a>
        </article>
      </div>
    </section>

    <section id="consultation" class="experience section-block">
      <div class="section-heading centered">
        <p class="eyebrow">Clinical pathway</p>
        <h2>A structured pathway from enquiry to follow-up.</h2>
      </div>
      <div class="experience-grid">
        <article>
          <span>01</span>
          <h3>Consultation</h3>
          <p>Understanding your concerns, goals and suitability.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Treatment Planning</h3>
          <p>Creating a personalised approach based on your features, skin and expectations.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Aftercare</h3>
          <p>Supporting the treatment journey with clear guidance and follow-up.</p>
        </article>
      </div>
    </section>

    <section class="atmosphere section-block" aria-label="Clinic atmosphere visual areas">
      <div class="atmosphere-large visual-tile">
        <img
          src="https://images.pexels.com/photos/33242625/pexels-photo-33242625.jpeg?auto=compress&cs=tinysrgb&w=1300"
          alt="Warm facial treatment setting"
          loading="lazy"
        >
        <span>Consultation room</span>
      </div>
      <div class="atmosphere-copy">
        <p class="eyebrow">Atmosphere</p>
        <h2>Precise, composed and easy to trust.</h2>
        <p>
          A quiet clinical atmosphere, refined details and a clear patient flow create a setting
          that feels structured before the first appointment.
        </p>
      </div>
      <div class="visual-tile">
        <img
          src="https://images.pexels.com/photos/7797009/pexels-photo-7797009.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Neutral skincare product details"
          loading="lazy"
        >
        <span>Skin-focused treatment care</span>
      </div>
      <div class="visual-tile visual-tile-dark">
        <img
          src="https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Modern skincare treatment equipment"
          loading="lazy"
        >
        <span>Calm clinical atmosphere</span>
      </div>
    </section>

    <section class="faq section-grid" aria-label="Frequently asked questions">
      <div>
        <p class="eyebrow">Before your first appointment</p>
        <h2>Clear answers before the first visit.</h2>
      </div>
      <div class="faq-list">
        <details open>
          <summary>Do I need a consultation first?</summary>
          <p>Yes. Consultation helps understand your concerns and treatment suitability.</p>
        </details>
        <details>
          <summary>How are treatments selected?</summary>
          <p>Treatments are discussed according to your goals, skin needs and medical context.</p>
        </details>
        <details>
          <summary>Are treatments personalised?</summary>
          <p>Each plan is assessed individually rather than approached as a fixed menu.</p>
        </details>
        <details>
          <summary>What should I expect after enquiry?</summary>
          <p>The clinic can guide you towards the most appropriate consultation or next step.</p>
        </details>
        <details>
          <summary>Can I discuss multiple concerns in one appointment?</summary>
          <p>Yes. Skin, hair and facial aesthetic concerns can be discussed during consultation.</p>
        </details>
      </div>
    </section>

    <section id="booking" class="booking section-grid">
      <div class="booking-copy">
        <p class="eyebrow">Begin with a consultation</p>
        <h2>Request a consultation.</h2>
        <p>
          Share what you would like to discuss and the clinic can guide you towards the most
          suitable next step.
        </p>
      </div>

      <form class="booking-form" aria-label="Visual consultation enquiry form demo" @submit.prevent="handleDemoSubmit">
        <!-- Visual-only demo form. It does not collect, store or send patient data. -->
        <label>
          <span>Name</span>
          <input v-model="form.name" type="text" autocomplete="off">
        </label>
        <label>
          <span>Email</span>
          <input v-model="form.email" type="email" autocomplete="off">
        </label>
        <label>
          <span>Treatment of interest</span>
          <select v-model="form.treatment">
            <option value="">Select an option</option>
            <option v-for="treatment in treatments" :key="treatment.title" :value="treatment.title">
              {{ treatment.title }}
            </option>
          </select>
        </label>
        <label>
          <span>Preferred contact method</span>
          <select v-model="form.contactMethod">
            <option value="">Select preference</option>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </label>
        <label class="full-field">
          <span>Message</span>
          <textarea v-model="form.message" rows="4" />
        </label>
        <button type="submit">Request consultation</button>
      </form>
    </section>

    <footer class="closing">
      <div>
        <span>Dtale Aesthetic Clinic</span>
        <p>Clinical aesthetic precision.</p>
      </div>
      <nav aria-label="Footer section links">
        <a href="#treatments">Treatments</a>
        <a href="#doctor">Doctor</a>
        <a href="#consultation">Consultation</a>
        <a href="#booking">Contact</a>
      </nav>
    </footer>
  </main>
</template>

<script setup lang="ts">
const treatments = [
  {
    index: '01',
    title: 'Doctor Consultation',
    copy: 'A personalised appointment to understand your skin, concerns and treatment suitability.',
  },
  {
    index: '02',
    title: 'Chemical Peels',
    copy: 'A skin-focused treatment pathway selected according to your individual needs and tolerance.',
  },
  {
    index: '03',
    title: 'PRP',
    copy: 'A consultation-led regenerative treatment option discussed according to suitability.',
  },
  {
    index: '04',
    title: 'Face Rejuvenation',
    copy: 'A measured approach to facial freshness, balance and skin quality.',
  },
  {
    index: '05',
    title: 'Botox, Fillers & Thread Lifting',
    copy: 'Non-surgical aesthetic options planned with attention to proportion, expression and suitability.',
  },
  {
    index: '06',
    title: 'Fillers',
    copy: 'A tailored approach to facial volume and contour, guided by consultation and clinical judgement.',
  },
]

const form = reactive({
  name: '',
  email: '',
  treatment: '',
  contactMethod: '',
  message: '',
})

const handleDemoSubmit = () => undefined

useSeoMeta({
  title: 'Dtale Aesthetic Clinic Homepage Demo | Froggy Studio',
  description:
    'Private homepage demo for Dtale Aesthetic Clinic, presenting a premium medical-aesthetic website direction.',
  robots: 'noindex, nofollow',
})
</script>

<style scoped>
.dtale-home {
  --font-body: "Inter", system-ui, sans-serif;
  --dtale-black: #1d1918;
  --dtale-ink: #2d2524;
  --dtale-panel: rgba(255, 252, 247, 0.82);
  --dtale-panel-strong: rgba(247, 238, 242, 0.9);
  --dtale-forest: #4d3d39;
  --dtale-deep-forest: #2a2221;
  --dtale-cream: #fffaf2;
  --dtale-clinic: #f0e3ea;
  --dtale-muted: rgba(45, 37, 36, 0.64);
  --dtale-faint: rgba(45, 37, 36, 0.42);
  --dtale-line: rgba(45, 37, 36, 0.13);
  --dtale-line-strong: rgba(45, 37, 36, 0.22);
  --dtale-mauve: #b991a6;
  --dtale-bronze: #94765d;
  --dtale-gold: #b88935;
  --dtale-gold-deep: #8a6427;
  --dtale-radius-card: 1.2rem;

  min-height: 100vh;
  background:
    radial-gradient(circle at 78% 7%, rgba(217, 184, 115, 0.34), transparent 22rem),
    radial-gradient(circle at 12% 8%, rgba(185, 145, 166, 0.42), transparent 24rem),
    radial-gradient(circle at 84% 18%, rgba(148, 118, 93, 0.28), transparent 30rem),
    linear-gradient(135deg, rgba(217, 184, 115, 0.2) 0%, transparent 26%, rgba(185, 145, 166, 0.12) 56%, transparent 100%),
    radial-gradient(circle at 50% 78%, rgba(240, 227, 234, 0.72), transparent 34rem),
    linear-gradient(180deg, #fffaf2 0%, #f7eef2 48%, #eaded5 100%);
  color: var(--dtale-ink);
  font-family: var(--font-body);
}

.preview-line {
  border-bottom: 1px solid var(--dtale-line);
  color: var(--dtale-faint);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 0.55rem 1rem;
  text-align: center;
  text-transform: uppercase;
}

.site-header,
.hero,
.section-block,
.section-grid,
.closing {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  display: flex;
  min-height: 5.75rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom: 1px solid var(--dtale-line);
}

.brand,
.site-header a,
.closing a,
.treatment-card a {
  color: inherit;
  text-decoration: none;
}

.brand {
  display: grid;
  gap: 0.35rem;
  line-height: 1;
}

.brand span {
  font-size: 1.45rem;
  font-weight: 760;
  letter-spacing: 0.02em;
}

.brand small {
  color: var(--dtale-muted);
  font-size: 0.64rem;
  font-weight: 850;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.site-header nav,
.closing nav {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.85rem, 2vw, 1.7rem);
}

.site-header nav a,
.closing nav a {
  color: var(--dtale-muted);
  font-size: 0.7rem;
  font-weight: 820;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(380px, 1.1fr);
  gap: clamp(3rem, 7vw, 6.5rem);
  align-items: center;
  min-height: calc(100svh - 6.3rem);
  padding: clamp(2rem, 4vh, 4rem) 0;
}

.eyebrow {
  margin: 0 0 1.1rem;
  color: var(--dtale-mauve);
  font-size: 0.64rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  letter-spacing: 0;
}

h1,
h2 {
  margin: 0;
  font-weight: 520;
}

h1 {
  max-width: 10ch;
  font-size: clamp(3.1rem, 6.7vw, 6.6rem);
  line-height: 0.92;
  letter-spacing: 0;
}

h2 {
  max-width: 13ch;
  font-size: clamp(2rem, 3.9vw, 4.1rem);
  line-height: 1;
  letter-spacing: 0;
}

h3 {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 780;
  line-height: 1.35;
}

.hero-lede,
.hero-note,
.copy-column p,
.doctor-copy p,
.section-heading p,
.treatment-card p,
.experience-grid p,
.atmosphere-copy p,
.faq p,
.booking-copy p {
  color: var(--dtale-muted);
  line-height: 1.75;
}

.hero-lede {
  max-width: 36rem;
  margin: 1.75rem 0 0;
  color: var(--dtale-ink);
  font-size: clamp(0.98rem, 1.25vw, 1.14rem);
}

.hero-note {
  max-width: 34rem;
  margin: 1.15rem 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2.4rem;
}

.button,
.booking-form button {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dtale-line-strong);
  border-radius: 999px;
  padding: 0.9rem 1.35rem;
  font-size: 0.72rem;
  font-weight: 880;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.button:hover,
.booking-form button:hover {
  transform: translateY(-1px);
}

.button-brass,
.booking-form button {
  background: linear-gradient(135deg, var(--dtale-ink), #6b4c5d 58%, var(--dtale-gold));
  color: var(--dtale-cream);
}

.button-ghost {
  background: rgba(255, 250, 242, 0.54);
  color: var(--dtale-ink);
}

.hero-visual {
  position: relative;
  min-height: min(48rem, 78vh);
}

.visual-window,
.portrait-placeholder,
.visual-tile {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 250, 242, 0.72);
  border-radius: var(--dtale-radius-card);
  box-shadow: 0 2rem 5rem rgba(93, 66, 74, 0.16);
  background:
    radial-gradient(circle at 78% 12%, rgba(217, 184, 115, 0.22), transparent 16rem),
    radial-gradient(circle at 20% 0%, rgba(185, 145, 166, 0.24), transparent 22rem),
    linear-gradient(145deg, #f0e3ea, #eaded5);
}

.visual-window img,
.portrait-placeholder img,
.visual-tile img {
  position: absolute;
  z-index: 0;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.72) contrast(1.02) brightness(0.9);
}

.visual-window {
  height: 100%;
  min-height: 38rem;
}

.visual-window::before,
.visual-tile::before,
.portrait-placeholder::before {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(29, 25, 24, 0.02), rgba(29, 25, 24, 0.32));
}

.visual-window::after,
.visual-tile::after,
.portrait-placeholder::after {
  content: "";
  position: absolute;
  z-index: 2;
  inset: 0;
  background:
    radial-gradient(circle at 16% 88%, rgba(217, 184, 115, 0.2), transparent 14rem),
    radial-gradient(circle at 75% 20%, rgba(185, 145, 166, 0.24), transparent 18rem),
    linear-gradient(135deg, rgba(255, 250, 242, 0.16), transparent 60%);
  opacity: 0.55;
}

.visual-grain {
  display: none;
}

.visual-window p,
.visual-tile span,
.portrait-placeholder span {
  position: absolute;
  z-index: 3;
  right: 1.25rem;
  bottom: 1.25rem;
  margin: 0;
  color: var(--dtale-cream);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-card {
  position: absolute;
  z-index: 5;
  width: min(16rem, 58%);
  border: 1px solid rgba(255, 250, 242, 0.72);
  border-radius: var(--dtale-radius-card);
  background: rgba(255, 250, 242, 0.88);
  padding: 1rem;
  box-shadow: 0 1.2rem 3rem rgba(93, 66, 74, 0.14);
  backdrop-filter: blur(14px);
}

.hero-card span,
.principles span,
.treatment-card span,
.experience-grid span {
  display: block;
  margin-bottom: 0.55rem;
  color: var(--dtale-gold-deep);
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-card strong {
  display: block;
  color: var(--dtale-ink);
  line-height: 1.35;
}

.hero-card-one {
  left: -1.4rem;
  top: 2rem;
}

.hero-card-two {
  right: -1rem;
  top: 9rem;
}

.hero-card-three {
  left: 1.4rem;
  bottom: 8.5rem;
}

.hero-card-four {
  right: 2rem;
  bottom: 2rem;
}

.section-block,
.section-grid {
  padding: clamp(5.5rem, 10vw, 10rem) 0;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.philosophy,
.faq {
  border-top: 1px solid var(--dtale-line);
}

.experience {
  border: 0 !important;
  border-inline: 0 !important;
  box-shadow: none !important;
  outline: 0 !important;
}

.experience::before,
.experience::after {
  display: none !important;
  border: 0 !important;
  box-shadow: none !important;
  content: none !important;
}

.experience .eyebrow {
  border: 0 !important;
  box-shadow: none !important;
  outline: 0 !important;
  background: transparent !important;
}

.copy-column {
  display: grid;
  gap: 2rem;
}

.principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.5vw, 1rem);
  background: transparent;
  border-radius: var(--dtale-radius-card);
  overflow: hidden;
}

.principles article {
  min-height: 11rem;
  background: rgba(255, 250, 242, 0.82);
  padding: 1.35rem;
}

.doctor {
  align-items: center;
  background:
    radial-gradient(circle at 72% 18%, rgba(185, 145, 166, 0.32), transparent 24rem),
    radial-gradient(circle at 8% 80%, rgba(148, 118, 93, 0.16), transparent 20rem),
    linear-gradient(145deg, rgba(255, 250, 242, 0.84), rgba(234, 222, 213, 0.84));
  color: var(--dtale-ink);
  margin-top: 0;
  padding-right: max(1rem, calc((100vw - 1200px) / 2));
  padding-left: max(1rem, calc((100vw - 1200px) / 2));
  width: 100%;
}

.doctor .eyebrow,
.doctor .role {
  color: var(--dtale-mauve);
}

.doctor h2,
.booking h2,
.doctor-copy p {
  color: var(--dtale-ink);
}

.portrait-placeholder {
  aspect-ratio: 1 / 1;
  background:
    radial-gradient(circle at 18% 14%, rgba(185, 145, 166, 0.22), transparent 18rem),
    var(--dtale-clinic);
}

.portrait-placeholder span {
  color: var(--dtale-cream);
}

.role {
  margin: 1rem 0;
  font-weight: 850;
}

.credentials {
  display: grid;
  gap: 0.5rem;
  margin: 1.7rem 0;
  padding: 1.35rem 0;
  border-top: 1px solid var(--dtale-line);
  border-bottom: 1px solid var(--dtale-line);
  color: var(--dtale-muted);
  list-style: none;
}

.section-heading {
  max-width: 760px;
  margin-bottom: clamp(2.6rem, 5vw, 4rem);
}

.treatments {
  border: 0 !important;
  border-inline: 0 !important;
  box-shadow: none !important;
  outline: 0 !important;
}

.treatments::before,
.treatments::after {
  display: none !important;
  border: 0 !important;
  box-shadow: none !important;
  content: none !important;
}

.centered {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.centered h2 {
  margin: 0 auto;
}

.treatment-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.5vw, 1rem);
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  outline: 0;
  overflow: visible;
}

.treatment-card {
  display: flex;
  min-height: 18rem;
  flex-direction: column;
  border: 0;
  border-radius: var(--dtale-radius-card);
  box-shadow: 0 1rem 2.8rem rgba(77, 61, 57, 0.08);
  outline: 0;
  background: rgba(255, 253, 248, 0.96);
  padding: clamp(1.35rem, 2.3vw, 2rem);
}

.treatment-card:nth-child(2n) {
  background: rgba(255, 250, 252, 0.96);
}

.treatment-card h3 {
  margin-top: 1.4rem;
  color: var(--dtale-ink);
}

.treatment-card p {
  color: rgba(45, 37, 36, 0.78);
  margin: 0.95rem 0 1.4rem;
}

.treatment-card a {
  margin-top: auto;
  color: #654c58;
  font-size: 0.72rem;
  font-weight: 880;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.5vw, 1rem);
  background: transparent;
  border-radius: var(--dtale-radius-card);
  overflow: hidden;
}

.experience-grid article {
  min-height: 18rem;
  background: var(--dtale-panel);
  padding: clamp(1.35rem, 2.5vw, 2rem);
}

.experience-grid h3 {
  margin-top: 3.5rem;
}

.atmosphere {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(0.75rem, 1.5vw, 1rem);
  background: transparent;
  border: 0 !important;
  border-inline: 0 !important;
  border-radius: 0;
  box-shadow: none !important;
  outline: 0 !important;
  overflow: visible;
  width: min(1200px, calc(100% - 2rem));
}

.atmosphere::before,
.atmosphere::after {
  display: none !important;
  border: 0 !important;
  box-shadow: none !important;
  content: none !important;
}

.atmosphere .eyebrow {
  border: 0 !important;
  box-shadow: none !important;
  outline: 0 !important;
  background: transparent !important;
}

.atmosphere > * {
  background-color: rgba(255, 250, 242, 0.82);
}

.atmosphere-large {
  grid-row: span 2;
  min-height: 39rem;
}

.visual-tile {
  min-height: 19rem;
}

.visual-tile-dark {
  background:
    radial-gradient(circle at 18% 16%, rgba(185, 145, 166, 0.22), transparent 18rem),
    var(--dtale-clinic);
}

.atmosphere-copy {
  position: relative;
  z-index: 4;
  padding: clamp(1.8rem, 4vw, 3rem);
}

.faq-list {
  display: grid;
  gap: 0.75rem;
  background: transparent;
  border-radius: var(--dtale-radius-card);
  overflow: hidden;
}

.faq details {
  background: rgba(255, 250, 242, 0.84);
  padding: 1.25rem 1.4rem;
}

.faq summary {
  cursor: pointer;
  color: var(--dtale-ink);
  font-weight: 820;
}

.faq p {
  margin: 0.8rem 0 0;
}

.booking {
  align-items: center;
  background:
    radial-gradient(circle at 10% 20%, rgba(185, 145, 166, 0.34), transparent 22rem),
    radial-gradient(circle at 90% 75%, rgba(148, 118, 93, 0.18), transparent 24rem),
    linear-gradient(135deg, #f7eef2, #eaded5);
  color: var(--dtale-ink);
  padding-right: max(1rem, calc((100vw - 1200px) / 2));
  padding-left: max(1rem, calc((100vw - 1200px) / 2));
  width: 100%;
}

.booking .eyebrow,
.booking-copy p {
  color: var(--dtale-muted);
}

.booking-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  background: transparent;
  border: 0;
  border-radius: var(--dtale-radius-card);
  overflow: hidden;
}

.booking-form label {
  display: grid;
  gap: 0.55rem;
  background: rgba(255, 250, 242, 0.84);
  padding: 1rem;
}

.booking-form label span {
  color: var(--dtale-muted);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
  width: 100%;
  min-height: 3rem;
  border: 0;
  border-bottom: 1px solid var(--dtale-line-strong);
  border-radius: 0;
  background: transparent;
  color: var(--dtale-ink);
  font: inherit;
  padding: 0.65rem 0;
}

.booking-form textarea {
  resize: vertical;
}

.full-field,
.booking-form button {
  grid-column: 1 / -1;
}

.booking-form button {
  cursor: pointer;
  width: fit-content;
  margin: 1rem;
}

.closing {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(3rem, 6vw, 5rem) 0;
  border-top: 1px solid var(--dtale-line);
}

.closing span {
  display: block;
  font-size: clamp(1.5rem, 2.4vw, 2.4rem);
  font-weight: 760;
}

.closing p {
  margin: 0.4rem 0 0;
  color: var(--dtale-muted);
}

@media (max-width: 980px) {
  .hero,
  .section-grid,
  .doctor,
  .booking {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: calc(100svh - 6.3rem);
  }

  .hero-card-one,
  .hero-card-two,
  .hero-card-three,
  .hero-card-four {
    left: auto;
    right: auto;
  }

  .treatment-grid,
  .experience-grid,
  .principles,
  .atmosphere {
    grid-template-columns: 1fr;
  }

  .atmosphere-large {
    grid-row: auto;
    min-height: 30rem;
  }
}

@media (max-width: 680px) {
  .site-header,
  .hero,
  .section-block,
  .section-grid,
  .closing,
  .atmosphere {
    width: min(100% - 1rem, 1200px);
  }

  .site-header {
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem 0;
  }

  .site-header nav {
    width: 100%;
    justify-content: space-between;
  }

  .site-header nav a {
    font-size: 0.72rem;
  }

  h1 {
    font-size: clamp(2.65rem, 12vw, 4.2rem);
  }

  h2 {
    font-size: clamp(1.75rem, 8vw, 2.8rem);
  }

  .button,
  .hero-actions,
  .booking-form button {
    width: 100%;
  }

  .hero-visual,
  .visual-window {
    min-height: 38rem;
  }

  .hero-card {
    width: min(15rem, 72%);
  }

  .hero-card-one {
    top: 1rem;
    left: 1rem;
  }

  .hero-card-two {
    top: 7.5rem;
    right: 1rem;
  }

  .hero-card-three {
    left: 1rem;
    bottom: 7rem;
  }

  .hero-card-four {
    right: 1rem;
    bottom: 1rem;
  }

  .booking-form {
    grid-template-columns: 1fr;
  }

  .closing {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
