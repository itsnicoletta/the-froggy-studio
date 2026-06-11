<template>
    <main class="sindu-page min-h-screen overflow-hidden">
        <!-- HEADER -->
        <header
            class="fixed left-0 top-0 z-50 w-full border-b border-[rgba(201,165,92,0.16)] bg-[rgba(13,14,13,0.72)] px-4 py-4 backdrop-blur-2xl md:px-8 xl:px-12">
            <div class="mx-auto flex max-w-[1540px] items-center justify-between gap-6">
                <a href="#" class="flex items-center gap-3 text-decoration-none">
                    <SinduMark class="h-9 w-9 text-[var(--gold)]" />
                    <div class="leading-none">
                        <p class="brand-wordmark text-[1.45rem] leading-[0.85] text-[var(--gold)]">
                            Sindu’s
                        </p>
                        <p class="mt-1 text-[0.52rem] uppercase tracking-[0.34em] text-[rgba(244,237,225,0.62)]">
                            Collections
                        </p>
                    </div>
                </a>

                <nav class="hidden items-center gap-8 lg:flex">
                    <a href="#new" class="nav-link">New In</a>
                    <a href="#jewellery" class="nav-link">Jewellery</a>
                    <a href="#sarees" class="nav-link">Sarees</a>
                    <a href="#bridal" class="nav-link">Bridal</a>
                    <a href="#journal" class="nav-link">Journal</a>
                </nav>

                <div class="flex items-center gap-3">
                    <a href="https://instagram.com/sindus.collections.lk" target="_blank"
                        class="hidden rounded-md border border-[rgba(201,165,92,0.22)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] md:inline-flex">
                        Instagram
                    </a>

                    <button type="button" class="cart-pill" aria-label="Cart">
                        Bag
                        <span>{{ cartCount }}</span>
                    </button>
                </div>
            </div>
        </header>

        <!-- HERO -->
        <section class="hero-section relative px-4 pb-14 pt-24 md:px-8 lg:pt-28 xl:px-12">
            <div class="absolute inset-0 -z-10">
                <div class="pattern-fade"></div>
            </div>

            <div class="mx-auto w-full max-w-[1540px]">
                <div class="hero-content">
                    <p class="eyebrow">Jewellery · Sarees · Bridal</p>

                    <h1 class="hero-title">
                        Curated pieces for moments that become heritage.
                    </h1>

                    <p class="hero-copy mt-5 text-base leading-8 text-[rgba(244,237,225,0.68)] md:text-lg">
                        Discover refined jewellery, sarees and occasion pieces selected for weddings,
                        celebrations and everyday elegance across Sri Lanka.
                    </p>

                    <div class="mt-7 flex flex-wrap gap-3">
                        <a href="#new" class="btn-primary">Shop new arrivals</a>
                        <a href="#bridal" class="btn-secondary">Explore bridal edit</a>
                    </div>

                    <div class="hero-stats mt-8 grid grid-cols-3 border-y border-[rgba(201,165,92,0.16)] py-4">
                        <div>
                            <p class="stat-number">48K+</p>
                            <p class="stat-label">Instagram community</p>
                        </div>
                        <div>
                            <p class="stat-number">3</p>
                            <p class="stat-label">Curated categories</p>
                        </div>
                        <div>
                            <p class="stat-number">LK</p>
                            <p class="stat-label">Islandwide delivery</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- MARQUEE -->
        <section class="border-y border-[rgba(201,165,92,0.14)] bg-[rgba(244,237,225,0.035)] py-4">
            <div class="marquee">
                <div class="marquee-track">
                    <span v-for="item in marqueeItems" :key="item">{{ item }}</span>
                    <span v-for="item in marqueeItems" :key="`${item}-duplicate`">{{ item }}</span>
                </div>
            </div>
        </section>

        <!-- CATEGORIES -->
        <section id="collections" class="section-padding">
            <div class="mx-auto max-w-[1540px]">
                <div class="section-heading">
                    <p class="eyebrow">Collections</p>
                    <h2 class="section-title">Two curated edits, one refined wardrobe.</h2>
                    <p class="section-copy">
                        Move between jewellery and sarees with a cleaner browsing experience made for
                        occasion styling, gifting and bridal appointments.
                    </p>
                </div>

                <div class="collections-grid mt-12">
                    <article v-for="category in categories" :key="category.title" class="category-card">
                        <div class="category-media" :class="category.className">
                            <SinduMark class="absolute right-5 top-5 h-9 w-9 text-[rgba(244,237,225,0.38)]" />
                        </div>

                        <div class="category-content">
                            <p class="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                                {{ category.kicker }}
                            </p>
                            <h3 class="brand-display mt-4 text-[2.9rem] leading-[0.95] text-[var(--ivory)] md:text-[3.5rem]">
                                {{ category.title }}
                            </h3>
                            <p class="mt-4 text-sm leading-7 text-[rgba(244,237,225,0.62)]">
                                {{ category.description }}
                            </p>
                            <a :href="category.href"
                                class="mt-6 inline-flex text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                                View collection
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- PRODUCTS -->
        <section id="new" class="section-padding light-section">
            <div class="mx-auto max-w-[1540px]">
                <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div class="section-heading mb-0">
                        <p class="eyebrow">New arrivals</p>
                        <h2 class="section-title">Pieces selected for this season.</h2>
                        <p class="section-copy">
                            A curated product grid designed to turn Instagram interest into a real shopping experience.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <button v-for="filter in filters" :key="filter" type="button" class="filter-btn"
                            :class="{ 'is-active': activeFilter === filter }" @click="activeFilter = filter">
                            {{ filter }}
                        </button>
                    </div>
                </div>

                <div class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <article v-for="product in filteredProducts" :key="product.name" class="product-card group">
                        <div class="product-media" :class="product.className">
                            <div
                                class="absolute left-4 top-4 rounded-md bg-[rgba(12,13,12,0.52)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ivory)] backdrop-blur">
                                {{ product.badge }}
                            </div>

                            <button type="button" class="quick-add" @click="addToCart(product)">
                                +
                            </button>
                        </div>

                        <div class="p-5">
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <p class="text-[0.68rem] uppercase tracking-[0.22em] text-[rgba(244,237,225,0.45)]">
                                        {{ product.category }}
                                    </p>
                                    <h3 class="mt-2 text-lg font-normal leading-snug text-[var(--ivory)]">
                                        {{ product.name }}
                                    </h3>
                                </div>

                                <button type="button" class="wishlist"
                                    :class="{ 'is-saved': savedItems.includes(product.name) }"
                                    @click="toggleSaved(product.name)">
                                    ♥
                                </button>
                            </div>

                            <p class="product-price mt-4 text-sm text-[var(--gold)]">{{ product.price }}</p>

                            <div class="mt-5 flex gap-2">
                                <button type="button" class="product-btn" @click="addToCart(product)">
                                    Add to bag
                                </button>
                                <a class="dm-btn" href="https://instagram.com/sindus.collections.lk" target="_blank">
                                    DM
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- EDITORIAL SPLIT -->
        <section id="bridal" class="section-padding">
            <div class="mx-auto grid max-w-[1540px] gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div class="editorial-panel p-7 md:p-10">
                    <p class="eyebrow">Bridal & occasion styling</p>
                    <h2 class="brand-display mt-6 text-[3.2rem] leading-[0.92] text-[var(--ivory)] md:text-[5rem]">
                        A complete look, not just a product.
                    </h2>
                    <p class="mt-7 max-w-xl text-base leading-8 text-[rgba(244,237,225,0.65)]">
                        Build a refined occasion wardrobe with sarees, jewellery sets and bridal styling
                        pieces selected to work together — from engagement functions to festive celebrations.
                    </p>

                    <div class="mt-10 grid gap-3 sm:grid-cols-3">
                        <div v-for="benefit in benefits" :key="benefit.title" class="mini-card">
                            <p class="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--gold)]">
                                {{ benefit.number }}
                            </p>
                            <h3 class="mt-4 text-base font-medium text-[var(--ivory)]">
                                {{ benefit.title }}
                            </h3>
                            <p class="mt-2 text-sm leading-6 text-[rgba(244,237,225,0.56)]">
                                {{ benefit.copy }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="editorial-image">
                    <div class="absolute inset-6 border border-[rgba(201,165,92,0.18)]"></div>
                    <SinduMark
                        class="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-[rgba(201,165,92,0.28)] md:h-56 md:w-56" />
                    <div
                        class="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 border-t border-[rgba(244,237,225,0.16)] pt-5">
                        <p class="text-xs uppercase tracking-[0.24em] text-[var(--ivory)]">
                            Bridal preview
                        </p>
                        <a href="#new" class="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                            Shop the edit
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- OCCASIONS -->
        <section class="section-padding pt-0">
            <div class="mx-auto max-w-[1540px]">
                <div class="section-heading">
                    <p class="eyebrow">Shop by occasion</p>
                    <h2 class="section-title">Find the right piece faster.</h2>
                </div>

                <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <article v-for="occasion in occasions" :key="occasion.title" class="occasion-card"
                        :class="occasion.className">
                        <p class="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--gold)]">
                            {{ occasion.kicker }}
                        </p>
                        <h3 class="brand-display mt-auto text-[2.1rem] leading-[0.95] text-[var(--ivory)]">
                            {{ occasion.title }}
                        </h3>
                    </article>
                </div>
            </div>
        </section>

        <!-- SEO / CONTENT -->
        <section id="journal" class="px-4 py-20 md:px-8 xl:px-12">
            <div class="mx-auto grid max-w-[1540px] gap-4 lg:grid-cols-[1fr_1.2fr]">
                <article class="seo-card">
                    <p class="eyebrow">Sarees online in Sri Lanka</p>
                    <h2 class="section-title">
                        Boutique occasionwear, searchable and shoppable.
                    </h2>
                </article>

                <article class="seo-card">
                    <p class="text-base leading-8 text-[rgba(244,237,225,0.66)]">
                        Explore curated sarees, jewellery and bridal styling pieces available for delivery
                        across Sri Lanka. Sindu’s Collections brings refined occasion styling,
                        trusted social shopping and a smoother online ordering experience together
                        in one place.
                    </p>

                    <div class="mt-8 grid gap-3 sm:grid-cols-3">
                        <div class="seo-point">
                            <strong>Catalogue</strong>
                            <span>Browse pieces anytime</span>
                        </div>
                        <div class="seo-point">
                            <strong>Filters</strong>
                            <span>Search by occasion</span>
                        </div>
                        <div class="seo-point">
                            <strong>Ordering</strong>
                            <span>Checkout or DM</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <!-- INSTAGRAM -->
        <section class="section-padding pt-0">
            <div class="mx-auto max-w-[1540px]">
                <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div class="section-heading mb-0">
                        <p class="eyebrow">Community</p>
                        <h2 class="section-title">Loved by 48K+ followers.</h2>
                        <p class="section-copy">
                            Keep the Instagram relationship, but give customers a polished place to browse,
                            save and buy.
                        </p>
                    </div>

                    <a href="https://instagram.com/sindus.collections.lk" target="_blank" class="btn-secondary">
                        Follow on Instagram
                    </a>
                </div>

                <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                    <article v-for="post in instagramPosts" :key="post.label" class="instagram-tile"
                        :class="post.className">
                        <span>{{ post.label }}</span>
                    </article>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="border-t border-[rgba(201,165,92,0.14)] px-4 py-12 md:px-8 xl:px-12">
            <div class="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
                <div>
                    <div class="flex items-start gap-4">
                        <SinduMark class="h-14 w-14 text-[var(--gold)]" />
                        <div>
                            <p class="brand-wordmark text-[3rem] leading-[0.8] text-[var(--gold)]">
                                Sindu’s
                            </p>
                            <p class="brand-wordmark text-[2.4rem] leading-[0.8] text-[var(--gold)]">
                                Collections
                            </p>
                        </div>
                    </div>

                    <p class="mt-6 max-w-md text-sm leading-7 text-[rgba(244,237,225,0.58)]">
                        Jewellery, sarees and bridal styling curated for timeless, feminine
                        and refined Sri Lankan occasionwear.
                    </p>
                </div>

                <div class="grid gap-3">
                    <a href="#new" class="footer-link">New arrivals</a>
                    <a href="#jewellery" class="footer-link">Jewellery</a>
                    <a href="#sarees" class="footer-link">Sarees</a>
                    <a href="#bridal" class="footer-link">Bridal edit</a>
                    <a href="#journal" class="footer-link">Style journal</a>
                </div>

                <form class="newsletter" @submit.prevent="newsletterJoined = true">
                    <label for="email">
                        Get new arrivals before they sell out.
                    </label>

                    <div class="mt-4 flex gap-2">
                        <input id="email" v-model="email" type="email" placeholder="Email address" />
                        <button type="submit">Join</button>
                    </div>

                    <p v-if="newsletterJoined" class="mt-3 text-sm text-[var(--gold)]">
                        Thank you — you are on the list.
                    </p>
                </form>
            </div>
        </footer>

        <!-- MINI CART TOAST -->
        <Transition name="toast">
            <div v-if="lastAdded"
                class="fixed bottom-5 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-[rgba(201,165,92,0.22)] bg-[rgba(13,14,13,0.88)] p-4 text-[var(--ivory)] shadow-2xl backdrop-blur-xl">
                <div class="flex items-center justify-between gap-4">
                    <div>
                        <p class="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                            Added to bag
                        </p>
                        <p class="mt-1 text-sm">{{ lastAdded }}</p>
                    </div>
                    <button type="button" class="text-xs uppercase tracking-[0.2em] text-[rgba(244,237,225,0.6)]"
                        @click="lastAdded = ''">
                        Close
                    </button>
                </div>
            </div>
        </Transition>
    </main>
</template>

<script setup>
const cartCount = ref(0)
const activeFilter = ref('All')
const lastAdded = ref('')
const savedItems = ref([])
const email = ref('')
const newsletterJoined = ref(false)

useHead({
    title: "Sindu’s Collections | Jewellery, Sarees & Bridal Styling in Sri Lanka",
    meta: [
        {
            name: 'description',
            content:
                "Shop curated jewellery, sarees and bridal styling pieces from Sindu’s Collections. Refined occasionwear available across Sri Lanka."
        },
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ],
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
        }
    ]
})

const SinduMark = {
    props: {
        class: {
            type: String,
            default: ''
        }
    },
    template: `
    <svg :class="$props.class" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M63.8 9.5C68.5 18.9 73.4 26.9 73.4 34.4C73.4 44.6 66.4 51.3 58.4 51.3C50.6 51.3 44 44.8 44 35.2C44 27.7 49.3 19.1 54.9 9.5C57.1 5.7 59.8 1.5 59.8 1.5C59.8 1.5 61.7 5.4 63.8 9.5Z" fill="currentColor"/>
      <path d="M67.2 58.6C78.7 43 88.7 29.8 105.5 21.5C96.8 36.4 87.9 47.2 75.8 61.8C71.8 66.7 67.6 72.1 63.6 78.2C76.5 72.2 87.2 78.2 94.7 88.9C102.8 100.4 105.2 115.1 97.8 127C89.9 139.7 73.8 143.6 59.7 138.7C46.5 134.2 35.9 122.9 32.2 108.6C28.6 94.8 31.7 80.6 40.6 69.2C47.9 59.8 57.8 54.9 67.2 58.6ZM58.9 83.7C51.9 90.5 48.8 99.9 51.1 109.1C53.3 118 60.2 125.1 69 127.5C77 129.7 85.4 127.3 90 120C94.5 112.7 92.6 103.2 87 96.5C80.3 88.4 70.7 84.1 58.9 83.7Z" fill="currentColor"/>
      <path d="M42 59.5C54.3 68.1 66.7 77.1 78.1 87.8C89.1 98.1 98.7 109.8 105.5 124.4C93.7 111.9 82.7 101.2 70.8 91.4C59.1 81.8 46.5 73.1 31.8 64.7C35.4 62.7 38.7 60.9 42 59.5Z" fill="currentColor"/>
      <path d="M23.4 35.2C38.5 51.1 52.7 66.1 67.2 81.9C53.1 79.6 38 69.1 29.9 57.9C24.8 50.8 22.6 43.2 23.4 35.2Z" fill="currentColor"/>
      <path d="M38.1 143.4C46.3 136.2 54.2 129.1 61.5 120.6C66 129.7 61.5 143.2 52.7 150.8C46.2 156.4 38.5 158.4 31.1 154.6C33.3 151.2 35.6 147.4 38.1 143.4Z" fill="currentColor"/>
    </svg>
  `
}

const filters = ['All', 'Jewellery', 'Sarees', 'Bridal']

const marqueeItems = [
    'Islandwide delivery',
    'Curated jewellery',
    'Occasion sarees',
    'Bridal styling',
    'WhatsApp ordering',
    'New arrivals weekly'
]

const categories = [
    {
        title: 'Jewellery',
        kicker: 'Ornamental details',
        description:
            'Necklaces, earrings, bangles and sets selected for refined occasion styling.',
        className: 'category-jewellery',
        href: '#jewellery'
    },
    {
        title: 'Sarees',
        kicker: 'Draped elegance',
        description:
            'Silk, embroidered and celebration sarees for weddings, temples and festive days.',
        className: 'category-sarees',
        href: '#sarees'
    }
]

const products = [
    {
        name: 'Antique Gold Necklace Set',
        category: 'Jewellery',
        filter: 'Jewellery',
        price: 'LKR 18,500',
        badge: 'Signature',
        className: 'product-1'
    },
    {
        name: 'Deep Maroon Silk Saree',
        category: 'Sarees',
        filter: 'Sarees',
        price: 'LKR 24,900',
        badge: 'New in',
        className: 'product-2'
    },
    {
        name: 'Temple Drop Earrings',
        category: 'Jewellery',
        filter: 'Jewellery',
        price: 'LKR 7,800',
        badge: 'Gold tone',
        className: 'product-3'
    },
    {
        name: 'Ivory Occasion Saree',
        category: 'Sarees',
        filter: 'Sarees',
        price: 'LKR 28,500',
        badge: 'Limited',
        className: 'product-4'
    },
    {
        name: 'Bridal Bangle Stack',
        category: 'Bridal',
        filter: 'Bridal',
        price: 'LKR 12,400',
        badge: 'Bridal',
        className: 'product-5'
    },
    {
        name: 'Pearl Layered Choker',
        category: 'Jewellery',
        filter: 'Jewellery',
        price: 'LKR 15,200',
        badge: 'Pearl',
        className: 'product-7'
    },
    {
        name: 'Forest Green Festive Saree',
        category: 'Sarees',
        filter: 'Sarees',
        price: 'LKR 22,800',
        badge: 'Festive',
        className: 'product-8'
    }
]

const benefits = [
    {
        number: '01',
        title: 'Styled by occasion',
        copy: 'Browse pieces according to weddings, temple visits and celebrations.'
    },
    {
        number: '02',
        title: 'Easy product discovery',
        copy: 'Filter by category instead of searching through Instagram posts.'
    },
    {
        number: '03',
        title: 'Flexible ordering',
        copy: 'Checkout directly or continue the personal DM ordering flow.'
    }
]

const occasions = [
    { title: 'Weddings', kicker: '01', className: 'occasion-weddings' },
    { title: 'Engagements', kicker: '02', className: 'occasion-engagements' },
    { title: 'Temple visits', kicker: '03', className: 'occasion-temple' },
    { title: 'Festive days', kicker: '04', className: 'occasion-festive' },
    { title: 'Everyday', kicker: '05', className: 'occasion-everyday' }
]

const instagramPosts = [
    { label: 'Saree drop', className: 'instagram-saree' },
    { label: 'Jewellery edit', className: 'instagram-jewellery' },
    { label: 'Bridal set', className: 'instagram-bridal' },
    { label: 'Gold detail', className: 'instagram-gold' },
    { label: 'Behind the scenes', className: 'instagram-behind' },
    { label: 'New arrivals', className: 'instagram-new' }
]

const filteredProducts = computed(() => {
    if (activeFilter.value === 'All') return products
    return products.filter((product) => product.filter === activeFilter.value)
})

const addToCart = (product) => {
    cartCount.value += 1
    lastAdded.value = product.name

    window.setTimeout(() => {
        lastAdded.value = ''
    }, 2800)
}

const toggleSaved = (name) => {
    if (savedItems.value.includes(name)) {
        savedItems.value = savedItems.value.filter((item) => item !== name)
        return
    }

    savedItems.value.push(name)
}
</script>

<style scoped>
@font-face {
    font-family: "Calora";
    src: url("../../../assets/Calora.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

.sindu-page {
    --black: #0d0e0d;
    --black-soft: #171815;
    --green: #17291f;
    --green-soft: #203b2b;
    --gold: #c9a55c;
    --gold-soft: #e0c580;
    --ivory: #f4ede1;
    --ivory-deep: #e9ddcc;
    --blush: #d9b3ad;

    background:
        radial-gradient(circle at 16% 8%, rgba(201, 165, 92, 0.12), transparent 28rem),
        radial-gradient(circle at 82% 12%, rgba(31, 63, 43, 0.48), transparent 34rem),
        linear-gradient(180deg, #0d0e0d 0%, #151713 44%, #0a0b0a 100%);
    color: var(--ivory);
    font-family: "IBM Plex Sans", system-ui, sans-serif;
}

.brand-display,
.brand-wordmark {
    font-family: "Calora", Georgia, serif;
    font-weight: 400;
}

.nav-link,
.footer-link {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(244, 237, 225, 0.6);
    transition: color 0.24s ease;
}

.nav-link:hover,
.footer-link:hover {
    color: var(--gold);
}

.cart-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    border: 1px solid rgba(201, 165, 92, 0.26);
    border-radius: 0.45rem;
    background: rgba(244, 237, 225, 0.04);
    padding: 0.6rem 0.82rem;
    color: var(--ivory);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    transition:
        border-color 0.24s ease,
        background 0.24s ease;
}

.cart-pill:hover {
    border-color: var(--gold);
    background: rgba(201, 165, 92, 0.08);
}

.cart-pill span {
    display: grid;
    min-width: 1.45rem;
    height: 1.45rem;
    place-items: center;
    border-radius: 0.3rem;
    background: var(--gold);
    color: var(--black);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0;
}

.eyebrow {
    margin: 0;
    color: var(--gold);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
}

.hero-section {
    min-height: calc(100svh - 5rem);
    display: flex;
    align-items: center;
    background-image:
        linear-gradient(90deg, rgba(8, 9, 8, 0.9) 0%, rgba(8, 9, 8, 0.72) 38%, rgba(8, 9, 8, 0.32) 100%),
        linear-gradient(180deg, rgba(8, 9, 8, 0.2) 0%, rgba(8, 9, 8, 0.82) 100%),
        url("../../../assets/asset sindus (1).png");
    background-position: center;
    background-size: cover;
}

.hero-content {
    width: min(100%, 68ch);
}

.hero-title {
    max-width: 60ch;
    margin-top: 1rem;
    color: var(--ivory);
    font-family: "Calora", Georgia, serif;
    font-size: clamp(3rem, 5.3vw, 5.7rem);
    font-weight: 400;
    line-height: 0.96;
    letter-spacing: 0;
    overflow-wrap: break-word;
}

.hero-copy,
.hero-stats {
    max-width: 60ch;
}

.pattern-fade {
    position: absolute;
    inset: auto 0 0 0;
    height: 22rem;
    background-image:
        radial-gradient(circle at 1px 1px, rgba(201, 165, 92, 0.2) 1px, transparent 0);
    background-size: 38px 38px;
    opacity: 0.16;
    mask-image: linear-gradient(to top, black, transparent);
}

.btn-primary,
.btn-secondary,
.product-btn,
.dm-btn,
.newsletter button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.42rem;
    text-decoration: none;
    transition:
        transform 0.24s ease,
        border-color 0.24s ease,
        background 0.24s ease,
        color 0.24s ease;
}

.btn-primary {
    background: var(--gold);
    padding: 0.95rem 1.35rem;
    color: var(--black);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.btn-secondary {
    border: 1px solid rgba(201, 165, 92, 0.26);
    background: rgba(244, 237, 225, 0.04);
    padding: 0.95rem 1.35rem;
    color: var(--ivory);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.btn-primary:hover,
.btn-secondary:hover,
.product-btn:hover,
.dm-btn:hover,
.newsletter button:hover {
    transform: translateY(-2px);
}

.stat-number {
    margin: 0;
    color: var(--gold);
    font-family: "Calora", Georgia, serif;
    font-size: 2rem;
    line-height: 0.85;
}

.stat-label {
    margin: 0.55rem 0 0;
    max-width: 8rem;
    color: rgba(244, 237, 225, 0.52);
    font-size: 0.72rem;
    line-height: 1.4;
}

.marquee {
    overflow: hidden;
    white-space: nowrap;
}

.marquee-track {
    display: inline-flex;
    min-width: max-content;
    animation: marquee 30s linear infinite;
}

.marquee-track span {
    padding-inline: 2rem;
    color: rgba(244, 237, 225, 0.62);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
}

.section-padding {
    padding: clamp(5rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem);
}

.section-heading {
    max-width: 48rem;
    margin-bottom: 0;
}

.section-title {
    margin-top: 1rem;
    color: var(--ivory);
    font-family: "Calora", Georgia, serif;
    font-size: clamp(2.55rem, 5vw, 5.25rem);
    font-weight: 400;
    line-height: 0.95;
    letter-spacing: 0;
    overflow-wrap: break-word;
}

.section-copy {
    margin-top: 1.3rem;
    max-width: 42rem;
    color: rgba(244, 237, 225, 0.62);
    font-size: 1rem;
    line-height: 1.8;
}

.light-section {
    background: #f2eadc;
    color: var(--black);
}

.light-section .eyebrow,
.light-section .section-copy {
    color: rgba(13, 14, 13, 0.62);
}

.light-section .section-title,
.light-section .product-card h3 {
    color: var(--black);
}

.light-section .product-card {
    border-color: rgba(13, 14, 13, 0.12);
    background: rgba(255, 252, 246, 0.78);
    box-shadow: 0 20px 60px rgba(66, 49, 24, 0.12);
}

.light-section .product-card p {
    color: rgba(13, 14, 13, 0.58);
}

.light-section .product-card .product-price {
    color: #8f6d2f;
}

.light-section .filter-btn {
    border-color: rgba(13, 14, 13, 0.18);
    background: rgba(13, 14, 13, 0.035);
    color: rgba(13, 14, 13, 0.62);
}

.light-section .filter-btn:hover,
.light-section .filter-btn.is-active {
    border-color: #8f6d2f;
    background: #8f6d2f;
    color: #fffaf0;
}

.light-section .dm-btn {
    border-color: rgba(13, 14, 13, 0.18);
    color: rgba(13, 14, 13, 0.72);
}

.collections-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.6rem);
}

@media (min-width: 768px) {
    .collections-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: stretch;
    }
}

.category-card,
.product-card,
.editorial-panel,
.editorial-image,
.occasion-card,
.seo-card,
.mini-card {
    border: 1px solid rgba(201, 165, 92, 0.15);
    background: rgba(244, 237, 225, 0.04);
    box-shadow: 0 18px 56px rgba(0, 0, 0, 0.2);
}

.category-card,
.product-card {
    overflow: hidden;
    border-radius: 0.55rem;
    background-clip: padding-box;
}

.category-card {
    display: grid;
    min-height: 38rem;
}

.category-media {
    position: relative;
    min-height: 24rem;
    overflow: hidden;
}

.category-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 16rem;
    padding: clamp(1.35rem, 3vw, 2rem);
}

.category-media::before,
.product-media::before,
.editorial-image::before,
.instagram-tile::before {
    content: "";
    position: absolute;
    inset: -1px;
    background-image: linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.36));
    opacity: 0.76;
}

.category-jewellery {
    background-image: url("../../../assets/asset sindus (5).png");
    background-position: center;
    background-size: cover;
}

.category-sarees {
    background-image: url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=82");
    background-position: center;
    background-size: cover;
}

.product-card {
    transition:
        transform 0.24s ease,
        box-shadow 0.24s ease,
        border-color 0.24s ease;
}

.product-card:hover {
    border-color: rgba(201, 165, 92, 0.36);
    transform: translateY(-6px);
    box-shadow: 0 34px 100px rgba(0, 0, 0, 0.34);
}

.product-media {
    position: relative;
    height: 22rem;
    overflow: hidden;
    background-color: #0d0e0d;
    background-repeat: no-repeat;
}

.product-1 {
    background-image: url("../../../assets/asset sindus (3).png");
    background-position: center;
    background-size: cover;
}

.product-2 {
    background-image: url("https://images.unsplash.com/photo-1742038106824-ae078f37b633?auto=format&fit=crop&w=900&q=82");
    background-position: center 38%;
    background-size: cover;
}

.product-3 {
    background-image: url("../../../assets/asset sindus (4).png");
    background-position: center;
    background-size: cover;
}

.product-4 {
    background-image: url("https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&w=900&q=82");
    background-position: center;
    background-size: cover;
}

.product-5 {
    background-image: url("../../../assets/asset sindus (2).png");
    background-position: center;
    background-size: cover;
}

.product-7 {
    background-image: url("../../../assets/asset sindus (6).png");
    background-position: center;
    background-size: cover;
}

.product-8 {
    background-image: url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=82");
    background-position: center;
    background-size: cover;
}

.quick-add {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: grid;
    width: 3rem;
    height: 3rem;
    place-items: center;
    border: 1px solid rgba(201, 165, 92, 0.24);
    border-radius: 0.35rem;
    background: rgba(13, 14, 13, 0.58);
    color: var(--ivory);
    font-size: 1.4rem;
    backdrop-filter: blur(14px);
    transition:
        background 0.24s ease,
        color 0.24s ease,
        transform 0.24s ease;
}

.quick-add:hover {
    background: var(--gold);
    color: var(--black);
    transform: rotate(90deg);
}

.wishlist {
    color: rgba(244, 237, 225, 0.36);
    transition: color 0.2s ease;
}

.wishlist:hover,
.wishlist.is-saved {
    color: var(--blush);
}

.product-btn {
    flex: 1;
    background: var(--gold);
    padding: 0.78rem 1rem;
    color: var(--black);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.dm-btn {
    border: 1px solid rgba(201, 165, 92, 0.24);
    padding: 0.78rem 1rem;
    color: var(--ivory);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.filter-btn {
    border: 1px solid rgba(201, 165, 92, 0.2);
    border-radius: 0.35rem;
    background: rgba(244, 237, 225, 0.035);
    padding: 0.72rem 1rem;
    color: rgba(244, 237, 225, 0.62);
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    transition:
        background 0.24s ease,
        color 0.24s ease,
        border-color 0.24s ease;
}

.filter-btn:hover,
.filter-btn.is-active {
    border-color: var(--gold);
    background: var(--gold);
    color: var(--black);
}

.editorial-panel,
.editorial-image,
.seo-card {
    border-radius: 0.6rem;
}

.editorial-panel {
    background:
        radial-gradient(circle at 18% 12%, rgba(201, 165, 92, 0.12), transparent 22rem),
        rgba(244, 237, 225, 0.04);
}

.editorial-image {
    position: relative;
    min-height: 42rem;
    overflow: hidden;
    background-color: #0d0e0d;
    background-repeat: no-repeat;
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.68)),
        url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1300&q=82");
    background-position: center;
    background-size: cover;
}

.mini-card {
    border-radius: 0.5rem;
    padding: 1.1rem;
    background: rgba(13, 14, 13, 0.34);
}

.occasion-card {
    display: flex;
    min-height: 18rem;
    flex-direction: column;
    border-radius: 0.55rem;
    background-clip: padding-box;
    padding: 1.25rem;
    overflow: hidden;
    background-color: #0d0e0d;
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=82");
    background-position: center;
    background-size: cover;
    transition:
        transform 0.24s ease,
        border-color 0.24s ease;
}

.occasion-weddings {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=82");
}

.occasion-engagements {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=82");
}

.occasion-temple {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=82");
}

.occasion-festive {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?auto=format&fit=crop&w=900&q=82");
}

.occasion-everyday {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.08), rgba(13, 14, 13, 0.82)),
        url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82");
    background-position: center 38%;
}

.occasion-card:hover {
    border-color: rgba(201, 165, 92, 0.36);
    transform: translateY(-4px);
}

.seo-card {
    padding: clamp(1.6rem, 4vw, 3rem);
}

.seo-point {
    display: grid;
    gap: 0.35rem;
    border-top: 1px solid rgba(201, 165, 92, 0.16);
    padding-top: 1rem;
}

.seo-point strong {
    color: var(--ivory);
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
}

.seo-point span {
    color: rgba(244, 237, 225, 0.54);
    font-size: 0.9rem;
}

.instagram-tile {
    position: relative;
    display: grid;
    aspect-ratio: 1;
    place-items: end start;
    overflow: hidden;
    border: 1px solid rgba(201, 165, 92, 0.14);
    border-radius: 0.5rem;
    background-clip: padding-box;
    background-color: #0d0e0d;
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=82");
    background-position: center;
    background-size: cover;
    padding: 1rem;
}

.instagram-saree {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=82");
}

.instagram-jewellery {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=82");
}

.instagram-bridal {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=82");
}

.instagram-gold {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=82");
}

.instagram-behind {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=82");
}

.instagram-new {
    background-image:
        linear-gradient(180deg, rgba(13, 14, 13, 0.02), rgba(13, 14, 13, 0.58)),
        url("https://images.unsplash.com/photo-1742038106824-ae078f37b633?auto=format&fit=crop&w=700&q=82");
    background-position: center 38%;
}

.instagram-tile span {
    position: relative;
    z-index: 1;
    border-radius: 0.32rem;
    background: rgba(13, 14, 13, 0.54);
    padding: 0.45rem 0.7rem;
    color: var(--ivory);
    font-size: 0.66rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    backdrop-filter: blur(12px);
}

.newsletter label {
    display: block;
    color: var(--ivory);
    font-family: "Calora", Georgia, serif;
    font-size: 2.5rem;
    line-height: 0.9;
}

.newsletter input {
    min-height: 3rem;
    flex: 1;
    min-width: min(100%, 14rem);
    border: 1px solid rgba(201, 165, 92, 0.2);
    border-radius: 0.42rem;
    background: rgba(244, 237, 225, 0.04);
    padding: 0 1rem;
    color: var(--ivory);
    outline: none;
}

.newsletter input::placeholder {
    color: rgba(244, 237, 225, 0.42);
}

.newsletter input:focus {
    border-color: var(--gold);
}

.newsletter button {
    background: var(--gold);
    min-height: 3rem;
    padding: 0 1.2rem;
    color: var(--black);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.toast-enter-active,
.toast-leave-active {
    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, 1rem);
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: auto;
        background-position: 58% center;
    }

    .hero-title {
        max-width: 60ch;
        font-size: clamp(2.85rem, 15vw, 4.6rem);
    }

    .hero-stats {
        gap: 0.75rem;
    }

    .stat-label {
        max-width: none;
        font-size: 0.66rem;
        letter-spacing: 0.16em;
    }

    .category-media,
    .product-media {
        min-height: 20rem;
    }

    .occasion-card {
        min-height: 15rem;
    }

    .instagram-tile {
        min-height: 15rem;
    }

    .editorial-image {
        min-height: 30rem;
    }

    .newsletter > div {
        flex-direction: column;
    }

    .newsletter input,
    .newsletter button {
        width: 100%;
    }
}
</style>
