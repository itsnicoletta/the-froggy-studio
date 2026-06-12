<template>
  <main class="lanka-gems-demo min-h-screen bg-[#f6f1e7] text-[#081a33]">
    <!-- Top Bar -->
    <section class="border-b border-[#d8cdb8] bg-[#0b2f6b] text-white">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 text-xs md:flex-row md:items-center md:justify-between lg:px-8">
        <p class="font-semibold uppercase tracking-[0.18em] text-white/70">
          Lanka Gems & Jewellery · Wholesale Gemstone Catalogue
        </p>
        <div class="flex flex-wrap gap-4 text-white/65">
          <span>Galle, Sri Lanka</span>
          <span>•</span>
          <span>Buyer inquiry catalogue</span>
          <span>•</span>
          <span>No online checkout</span>
        </div>
      </div>
    </section>

    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-[#d8cdb8] bg-[#f6f1e7]/95 backdrop-blur">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center bg-[#0b2f6b] text-white">
            <span class="text-sm font-bold tracking-widest">LGJ</span>
          </div>

          <div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#0b2f6b]">
              Lanka Gems & Jewellery
            </p>
            <p class="text-xs text-[#64748b]">
              Sri Lankan gems for wholesale inquiries
            </p>
          </div>
        </NuxtLink>

        <div class="hidden items-center gap-7 text-sm font-medium text-[#536173] lg:flex">
          <a href="#shop" class="hover:text-[#0b2f6b]">Catalogue</a>
          <a href="#collections" class="hover:text-[#0b2f6b]">Collections</a>
          <a href="#trade" class="hover:text-[#0b2f6b]">How It Works</a>
          <a href="#process" class="hover:text-[#0b2f6b]">Buyer Process</a>
          <a href="#inquiry" class="hover:text-[#0b2f6b]">Inquiry</a>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="relative border border-[#0b2f6b] px-4 py-2 text-sm font-semibold text-[#0b2f6b] transition hover:bg-[#eadfc8]"
            @click="isInquiryOpen = true">
            Inquiry List
            <span v-if="inquiryList.length"
              class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#9f7931] text-[10px] text-white">
              {{ inquiryList.length }}
            </span>
          </button>

          <a href="#inquiry"
            class="hidden bg-[#0b2f6b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#174ea6] md:inline-flex">
            Send Inquiry
          </a>
        </div>
      </nav>
    </header>

    <!-- Hero -->
    <section class="hero-z-pattern flex min-h-screen border-b border-[#d8cdb8]">
      <iframe
        src="https://my.spline.design/diamondmaterial-NqMurLZLv5eKqQpapDQv3Elq/"
        title="Diamond material interactive scene"
        class="hero-spline-frame absolute inset-0 h-full w-full"
        frameborder="0"
        loading="lazy" />
      <div
        class="mx-auto grid w-full max-w-7xl items-center gap-x-10 gap-y-8 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div class="relative z-10 self-end lg:pb-8">
          <p class="mb-5 w-fit border border-[#d8cdb8] bg-[#fffaf0]/85 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#806222]">
            Wholesale gemstone catalogue
          </p>

          <h1 class="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-[#0b2f6b] md:text-7xl lg:text-[4.8rem]">
            Sri Lankan gemstones, curated for trade inquiries.
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-7 text-[#536173] md:text-lg md:leading-8">
            Browse selected stones, build a shortlist and send one clear inquiry.
            Availability, pricing and export details are confirmed directly with the supplier.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#shop"
              class="inline-flex h-12 min-w-[190px] items-center justify-center border border-[#0b2f6b] bg-[#0b2f6b] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#174ea6]">
              Browse Catalogue
            </a>

            <button
              class="inline-flex h-12 min-w-[190px] items-center justify-center border border-[#0b2f6b] bg-[#fffaf0]/70 px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#0b2f6b] transition hover:bg-[#eadfc8]"
              @click="isInquiryOpen = true">
              Inquiry List
            </button>
          </div>
        </div>

        <div class="relative z-10 grid gap-3 self-start sm:grid-cols-2 lg:col-span-2">
          <div v-for="item in heroBadges" :key="item.title" class="border border-[#d8cdb8] bg-[#fffaf0]/80 p-4">
            <p class="text-xs uppercase tracking-[0.16em] text-[#806222]">
              {{ item.label }}
            </p>
            <p class="mt-2 text-sm font-bold text-[#0b2f6b]">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collections -->
    <section id="collections" class="border-b border-[#d8cdb8] bg-[#fffaf0]">
      <div class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#806222]">
              Browse by collection
            </p>
            <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0b2f6b] md:text-5xl">
              Wholesale gemstone categories.
            </h2>
          </div>

          <p class="max-w-md text-sm leading-6 text-[#536173]">
            A realistic catalogue structure where each product leads to a buyer inquiry, not an online purchase.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-4">
          <button v-for="category in categories" :key="category.name"
            class="group border border-[#d8cdb8] bg-[#f6f1e7] p-5 text-left transition hover:-translate-y-1 hover:border-[#0b2f6b]"
            @click="activeCategory = category.name">
            <div :class="category.swatch" class="mb-8 h-28 w-full" />
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-[#806222]">
              {{ category.count }} listings
            </p>
            <h3 class="mt-2 text-xl font-bold text-[#0b2f6b]">
              {{ category.name }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-[#64748b]">
              {{ category.copy }}
            </p>
          </button>
        </div>
      </div>
    </section>

    <!-- Shop -->
    <section id="shop" class="border-b border-[#d8cdb8]">
      <div class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#806222]">
              Product catalogue
            </p>
            <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0b2f6b] md:text-5xl">
              Available for buyer inquiry.
            </h2>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <input v-model="searchQuery" type="text" placeholder="Search gemstones..."
              class="border border-[#d8cdb8] bg-[#fffaf0] px-4 py-3 text-sm outline-none focus:border-[#0b2f6b]" />

            <select v-model="activeCategory"
              class="border border-[#d8cdb8] bg-[#fffaf0] px-4 py-3 text-sm outline-none focus:border-[#0b2f6b]">
              <option>All</option>
              <option v-for="category in categories" :key="category.name">
                {{ category.name }}
              </option>
            </select>

            <select v-model="activeBuyerUse"
              class="border border-[#d8cdb8] bg-[#fffaf0] px-4 py-3 text-sm outline-none focus:border-[#0b2f6b]">
              <option>All buyer uses</option>
              <option>Jewellery manufacturing</option>
              <option>Wholesale lots</option>
              <option>Custom sourcing</option>
              <option>Designer stones</option>
            </select>
          </div>
        </div>

        <div class="mb-8 flex flex-wrap items-center gap-2">
          <button v-for="filter in quickFilters" :key="filter" class="border px-4 py-2 text-sm font-medium transition"
            :class="activeQuickFilter === filter ? 'border-[#0b2f6b] bg-[#0b2f6b] text-white' : 'border-[#d8cdb8] bg-[#fffaf0] text-[#536173] hover:border-[#0b2f6b]'"
            @click="activeQuickFilter = activeQuickFilter === filter ? '' : filter">
            {{ filter }}
          </button>

          <button class="ml-auto text-sm font-semibold text-[#806222] hover:text-[#0b2f6b]" @click="resetFilters">
            Reset filters
          </button>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="product in filteredProducts" :key="product.id"
            class="group border border-[#d8cdb8] bg-[#fffaf0] transition hover:-translate-y-1 hover:border-[#0b2f6b]">
            <div class="block w-full text-left">
              <div class="relative overflow-hidden">
                <img :src="product.image" :alt="product.name" loading="lazy"
                  class="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span class="bg-[#0b2f6b] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {{ product.category }}
                  </span>
                  <span v-if="product.featured"
                    class="bg-[#d8b45f] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0b2f6b]">
                    Featured
                  </span>
                </div>

                <button
                  class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/40 bg-white/80 text-lg text-[#0b2f6b] backdrop-blur transition hover:bg-white"
                  @click.stop="toggleWishlist(product.id)">
                  {{ wishlist.includes(product.id) ? '♥' : '♡' }}
                </button>
              </div>

              <div class="p-5">
                <div class="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#0b2f6b]">
                      {{ product.name }}
                    </h3>
                    <p class="mt-1 text-sm text-[#64748b]">
                      {{ product.origin }} · {{ product.cut }}
                    </p>
                  </div>

                  <p class="text-right text-sm font-bold text-[#806222]">
                    Inquiry
                  </p>
                </div>

                <p class="text-sm leading-6 text-[#536173]">
                  {{ product.shortDescription }}
                </p>

                <div class="mt-5 grid grid-cols-3 gap-2 text-xs">
                  <div class="border border-[#d8cdb8] bg-[#f6f1e7] p-3">
                    <p class="text-[#7a8699]">Size</p>
                    <p class="mt-1 font-bold text-[#0b2f6b]">{{ product.size }}</p>
                  </div>
                  <div class="border border-[#d8cdb8] bg-[#f6f1e7] p-3">
                    <p class="text-[#7a8699]">Grade</p>
                    <p class="mt-1 font-bold text-[#0b2f6b]">{{ product.grade }}</p>
                  </div>
                  <div class="border border-[#d8cdb8] bg-[#f6f1e7] p-3">
                    <p class="text-[#7a8699]">Status</p>
                    <p class="mt-1 font-bold text-[#0b2f6b]">{{ product.stock }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 border-t border-[#d8cdb8]">
              <button
                class="border-r border-[#d8cdb8] px-4 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#0b2f6b] hover:bg-[#eadfc8]"
                @click="openProduct(product)">
                Details
              </button>
              <button
                class="bg-[#0b2f6b] px-4 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-[#174ea6]"
                @click="addToInquiry(product)">
                Add Inquiry
              </button>
            </div>
          </article>
        </div>

        <div v-if="!filteredProducts.length" class="border border-[#d8cdb8] bg-[#fffaf0] p-10 text-center">
          <p class="text-lg font-bold text-[#0b2f6b]">No matching products found.</p>
          <p class="mt-2 text-sm text-[#64748b]">Try removing one filter or searching a broader gemstone category.</p>
        </div>
      </div>
    </section>

    <!-- Trade Info -->
    <section id="trade" class="border-b border-[#d8cdb8] bg-[#fffaf0]">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#806222]">
            Trade buyer experience
          </p>
          <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0b2f6b] md:text-5xl">
            Product catalogue, not direct checkout.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-7 text-[#536173]">
            Buyers browse gemstone listings, add products to an inquiry list and submit their requirements.
            The sale is then handled directly between Lanka Gems & Jewellery and the buyer.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="item in tradeFeatures" :key="item.title" class="border border-[#d8cdb8] bg-[#f6f1e7] p-6">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#806222]">
              {{ item.label }}
            </p>
            <h3 class="mt-4 text-xl font-bold text-[#0b2f6b]">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-[#64748b]">
              {{ item.copy }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="border-b border-[#d8cdb8]">
      <div class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#806222]">
            How it works
          </p>
          <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#0b2f6b] md:text-5xl">
            From browsing to supplier follow-up.
          </h2>
        </div>

        <div class="grid gap-4 md:grid-cols-4">
          <div v-for="step in processSteps" :key="step.title" class="border border-[#d8cdb8] bg-[#fffaf0] p-6">
            <p class="text-4xl font-bold tracking-[-0.05em] text-[#806222]">
              {{ step.number }}
            </p>
            <h3 class="mt-8 text-xl font-bold text-[#0b2f6b]">
              {{ step.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-[#64748b]">
              {{ step.copy }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section id="inquiry" class="bg-[#0b2f6b] text-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-[#d8b45f]">
            Buyer inquiry
          </p>
          <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Send your gemstone request.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-7 text-white/60">
            Use this form to send a buyer inquiry for the stones added to your inquiry list.
            No payment is taken online. Lanka Gems & Jewellery will follow up directly with
            availability, pricing, documentation and export next steps.
          </p>

          <div class="mt-8 border border-white/15 bg-white/5 p-5">
            <p class="text-sm font-bold uppercase tracking-[0.16em] text-white/55">
              Inquiry list summary
            </p>

            <div v-if="inquiryList.length" class="mt-5 space-y-3">
              <div v-for="item in inquiryList" :key="item.id"
                class="flex items-center justify-between gap-4 border border-white/10 bg-black/10 p-4">
                <div>
                  <p class="font-bold">{{ item.name }}</p>
                  <p class="mt-1 text-xs text-white/45">{{ item.category }} · {{ item.size }}</p>
                </div>
                <button class="text-xs text-[#d8b45f]" @click="removeFromInquiry(item.id)">
                  Remove
                </button>
              </div>
            </div>

            <p v-else class="mt-4 text-sm text-white/45">
              No products added yet. Browse the catalogue and add stones to your inquiry list.
            </p>
          </div>
        </div>

        <form class="border border-white/15 bg-white/[0.04] p-6 md:p-8" @submit.prevent="submitInquiry">
          <div class="grid gap-5 md:grid-cols-2">
            <label class="field dark">
              <span>Full name</span>
              <input v-model="form.fullName" type="text" placeholder="Buyer name" />
            </label>

            <label class="field dark">
              <span>Company name</span>
              <input v-model="form.company" type="text" placeholder="Company / trading name" />
            </label>

            <label class="field dark">
              <span>Business email</span>
              <input v-model="form.email" type="email" placeholder="name@company.com" />
            </label>

            <label class="field dark">
              <span>Country / market</span>
              <input v-model="form.country" type="text" placeholder="Import destination" />
            </label>

            <label class="field dark">
              <span>Buyer type</span>
              <select v-model="form.buyerType">
                <option value="">Select buyer type</option>
                <option>Importer</option>
                <option>Wholesaler</option>
                <option>Jewellery Manufacturer</option>
                <option>Jewellery Brand</option>
                <option>Designer / Atelier</option>
                <option>Trading Company</option>
              </select>
            </label>

            <label class="field dark">
              <span>Target timeline</span>
              <select v-model="form.timeline">
                <option value="">Select timeline</option>
                <option>Immediate inquiry</option>
                <option>Within 2 weeks</option>
                <option>Within 1 month</option>
                <option>Ongoing supply requirement</option>
              </select>
            </label>

            <label class="field dark">
              <span>Estimated quantity</span>
              <input v-model="form.quantity" type="text" placeholder="Example: 10 stones / monthly lot" />
            </label>

            <label class="field dark">
              <span>Budget range</span>
              <input v-model="form.budget" type="text" placeholder="Optional" />
            </label>

            <label class="field dark md:col-span-2">
              <span>Requirements</span>
              <textarea v-model="form.message" rows="5"
                placeholder="Size, cut, colour, quality, certification, export destination, recurring supply needs..." />
            </label>
          </div>

          <button type="submit"
            class="mt-6 w-full bg-[#d8b45f] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0b2f6b] transition hover:bg-[#efd482]">
            Submit Buyer Inquiry
          </button>

          <p v-if="submitted" class="mt-5 border border-[#87b787] bg-[#dff2df] p-4 text-sm text-[#1b4d25]">
            Demo inquiry submitted. In the final website, this would send the selected products and buyer details to
            Lanka Gems & Jewellery for direct follow-up.
          </p>
        </form>
      </div>
    </section>

    <!-- Product Drawer -->
    <div v-if="selectedProduct" class="fixed inset-0 z-[70]">
      <button class="absolute inset-0 bg-black/50" @click="selectedProduct = null" />

      <aside class="absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-[#f6f1e7] shadow-2xl">
        <div class="sticky top-0 z-10 flex items-center justify-between border-b border-[#d8cdb8] bg-[#f6f1e7] p-5">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-[#806222]">
            Product details
          </p>
          <button class="text-2xl text-[#0b2f6b]" @click="selectedProduct = null">
            ×
          </button>
        </div>

        <img :src="selectedProduct.image" :alt="selectedProduct.name" class="h-80 w-full object-cover" />

        <div class="p-6">
          <div class="mb-5 flex flex-wrap gap-2">
            <span class="bg-[#0b2f6b] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
              {{ selectedProduct.category }}
            </span>
            <span class="bg-[#eadfc8] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#806222]">
              Inquiry only
            </span>
          </div>

          <h2 class="text-4xl font-bold tracking-[-0.04em] text-[#0b2f6b]">
            {{ selectedProduct.name }}
          </h2>

          <p class="mt-4 text-base leading-7 text-[#536173]">
            {{ selectedProduct.description }}
          </p>

          <div class="mt-7 grid gap-3 sm:grid-cols-2">
            <div v-for="spec in selectedProduct.specs" :key="spec.label"
              class="border border-[#d8cdb8] bg-[#fffaf0] p-4">
              <p class="text-xs uppercase tracking-[0.16em] text-[#806222]">
                {{ spec.label }}
              </p>
              <p class="mt-2 font-bold text-[#0b2f6b]">
                {{ spec.value }}
              </p>
            </div>
          </div>

          <div class="mt-7 border border-[#d8cdb8] bg-[#fffaf0] p-5">
            <p class="font-bold text-[#0b2f6b]">Trade notes</p>
            <ul class="mt-4 space-y-2 text-sm leading-6 text-[#536173]">
              <li v-for="note in selectedProduct.tradeNotes" :key="note">
                • {{ note }}
              </li>
            </ul>
          </div>

          <div class="mt-7 border border-[#c9b98e] bg-[#eadfc8] p-5">
            <p class="text-sm font-bold text-[#0b2f6b]">How this product is ordered</p>
            <p class="mt-2 text-sm leading-6 text-[#4d4328]">
              This product cannot be purchased directly online. Add it to your inquiry list,
              submit your requirements and the supplier will reply with availability, pricing and next steps.
            </p>
          </div>

          <div class="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              class="bg-[#0b2f6b] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-[#174ea6]"
              @click="addToInquiry(selectedProduct)">
              Add to Inquiry List
            </button>

            <button
              class="border border-[#0b2f6b] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0b2f6b] hover:bg-[#eadfc8]"
              @click="toggleWishlist(selectedProduct.id)">
              {{ wishlist.includes(selectedProduct.id) ? 'Saved' : 'Save Product' }}
            </button>
          </div>
        </div>
      </aside>
    </div>

    <!-- Inquiry Drawer -->
    <div v-if="isInquiryOpen" class="fixed inset-0 z-[80]">
      <button class="absolute inset-0 bg-black/50" @click="isInquiryOpen = false" />

      <aside class="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-[#fffaf0] shadow-2xl">
        <div class="sticky top-0 z-10 flex items-center justify-between border-b border-[#d8cdb8] bg-[#fffaf0] p-5">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.18em] text-[#806222]">
              Inquiry List
            </p>
            <p class="mt-1 text-xs text-[#64748b]">
              {{ inquiryList.length }} selected product{{ inquiryList.length === 1 ? '' : 's' }}
            </p>
          </div>

          <button class="text-2xl text-[#0b2f6b]" @click="isInquiryOpen = false">
            ×
          </button>
        </div>

        <div class="p-5">
          <div v-if="inquiryList.length" class="space-y-4">
            <div v-for="item in inquiryList" :key="item.id" class="border border-[#d8cdb8] bg-[#f6f1e7] p-4">
              <div class="flex gap-4">
                <img :src="item.image" :alt="item.name" class="h-20 w-20 shrink-0 object-cover" />
                <div class="flex-1">
                  <h3 class="font-bold text-[#0b2f6b]">
                    {{ item.name }}
                  </h3>
                  <p class="mt-1 text-xs text-[#64748b]">
                    {{ item.category }} · {{ item.size }} · {{ item.grade }}
                  </p>
                  <button class="mt-3 text-xs font-bold text-[#806222]" @click="removeFromInquiry(item.id)">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <a href="#inquiry"
              class="mt-5 flex justify-center bg-[#0b2f6b] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-[#174ea6]"
              @click="isInquiryOpen = false">
              Continue to Inquiry Form
            </a>

            <button
              class="w-full border border-[#0b2f6b] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0b2f6b] hover:bg-[#eadfc8]"
              @click="inquiryList = []">
              Clear Inquiry List
            </button>
          </div>

          <div v-else class="border border-[#d8cdb8] bg-[#f6f1e7] p-8 text-center">
            <p class="text-lg font-bold text-[#0b2f6b]">Your inquiry list is empty.</p>
            <p class="mt-2 text-sm leading-6 text-[#64748b]">
              Add gemstones from the catalogue and send a buyer inquiry to the supplier.
            </p>

            <a href="#shop"
              class="mt-6 inline-flex bg-[#0b2f6b] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white"
              @click="isInquiryOpen = false">
              Browse Catalogue
            </a>
          </div>
        </div>
      </aside>
    </div>

    <!-- Footer -->
    <footer class="border-t border-[#d8cdb8] bg-[#f6f1e7]">
      <div class="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 lg:px-8">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#0b2f6b]">
            Lanka Gems & Jewellery
          </p>
          <p class="mt-4 text-sm leading-6 text-[#64748b]">
            Demo B2B gemstone catalogue for Sri Lankan wholesale and export inquiries.
          </p>
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#806222]">
            Supplier base
          </p>
          <p class="mt-4 text-sm text-[#64748b]">
            Galle, Southern Province, Sri Lanka
          </p>
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#806222]">
            Contact channel
          </p>
          <a href="https://instagram.com/lankagemsandjewellery" target="_blank" rel="noopener noreferrer"
            class="mt-4 inline-flex text-sm font-bold text-[#0b2f6b] hover:text-[#806222]">
            instagram.com/lankagemsandjewellery
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import gemsBlueLot from '../../../assets/gems-blue-lot.png'
import gemsBlueRounds from '../../../assets/gems-blue-rounds.png'
import gemsCustom from '../../../assets/gems-custom.png'
import gemsPink from '../../../assets/gems-pink.png'
import gemsRuby from '../../../assets/gems-ruby.png'
import gemsSpinel from '../../../assets/gems-spinel.png'
import gemsTourmaline from '../../../assets/gems-tourmaline.png'
import gemsYellow from '../../../assets/gems-yellow.png'

const isInquiryOpen = ref(false)
const selectedProduct = ref(null)
const submitted = ref(false)

const searchQuery = ref('')
const activeCategory = ref('All')
const activeBuyerUse = ref('All buyer uses')
const activeQuickFilter = ref('')

const inquiryList = ref([])
const wishlist = ref([])

const form = reactive({
  fullName: '',
  company: '',
  email: '',
  country: '',
  buyerType: '',
  timeline: '',
  quantity: '',
  budget: '',
  message: ''
})

const heroBadges = [
  {
    label: 'Model',
    title: 'Inquiry-based catalogue'
  },
  {
    label: 'Focus',
    title: 'Wholesale & export buyers'
  }
]

const categories = [
  {
    name: 'Blue Sapphire',
    count: 4,
    copy: 'Ceylon sapphire lots and calibrated stones.',
    swatch: 'gem-blue'
  },
  {
    name: 'Colour Sapphire',
    count: 4,
    copy: 'Pink, yellow and mixed sapphire sourcing.',
    swatch: 'gem-pink'
  },
  {
    name: 'Ruby & Spinel',
    count: 3,
    copy: 'Trade inquiries for red and purple stones.',
    swatch: 'gem-ruby'
  },
  {
    name: 'Custom Sourcing',
    count: 2,
    copy: 'Buyer-led sourcing requests and special requirements.',
    swatch: 'gem-custom'
  }
]

const quickFilters = [
  'Certified available',
  'Calibrated stones',
  'Wholesale lot',
  'Export priority'
]

const products = [
  {
    id: 1,
    name: 'Ceylon Blue Sapphire Lot',
    category: 'Blue Sapphire',
    origin: 'Sri Lanka',
    cut: 'Mixed cut',
    size: '3-6 mm',
    grade: 'A / AA',
    stock: 'Inquiry',
    buyerUse: 'Wholesale lots',
    tags: ['Certified available', 'Wholesale lot', 'Export priority'],
    featured: true,
    image: gemsBlueLot,
    visual: 'gem-blue',
    shortDescription: 'Wholesale lot for manufacturers and gemstone traders requiring Ceylon blue sapphire supply.',
    description: 'A wholesale-focused Ceylon blue sapphire lot suitable for jewellery manufacturers, gemstone wholesalers and importers looking for Sri Lankan sourcing options. Final availability, grading and documentation are confirmed after buyer inquiry.',
    specs: [
      { label: 'Origin', value: 'Sri Lanka' },
      { label: 'Category', value: 'Blue Sapphire' },
      { label: 'Size range', value: '3-6 mm' },
      { label: 'Documentation', value: 'Available on request' }
    ],
    tradeNotes: [
      'Suitable for wholesale gemstone buyers and jewellery manufacturing.',
      'Pricing is provided after quantity, quality and documentation requirements are confirmed.',
      'Export destination and timeline should be included in the inquiry.'
    ]
  },
  {
    id: 2,
    name: 'Calibrated Blue Sapphire Rounds',
    category: 'Blue Sapphire',
    origin: 'Sri Lanka',
    cut: 'Round',
    size: '2.5-4 mm',
    grade: 'AA',
    stock: 'Inquiry',
    buyerUse: 'Jewellery manufacturing',
    tags: ['Calibrated stones', 'Certified available'],
    featured: false,
    image: gemsBlueRounds,
    visual: 'gem-blue-light',
    shortDescription: 'Calibrated round stones for jewellery production and repeatable manufacturing requirements.',
    description: 'Calibrated blue sapphire rounds prepared for jewellery manufacturers who need consistent sizing for production. Buyer should submit target size, quantity and certification needs through inquiry.',
    specs: [
      { label: 'Cut', value: 'Round' },
      { label: 'Use case', value: 'Manufacturing' },
      { label: 'Size range', value: '2.5-4 mm' },
      { label: 'Supply', value: 'Batch inquiry' }
    ],
    tradeNotes: [
      'Recommended for jewellery manufacturers.',
      'Best for repeatable designs and calibrated production.',
      'Certification and exact colour range confirmed during supplier follow-up.'
    ]
  },
  {
    id: 3,
    name: 'Pink Sapphire Selection',
    category: 'Colour Sapphire',
    origin: 'Sri Lanka',
    cut: 'Oval / Cushion',
    size: '4-8 mm',
    grade: 'A+',
    stock: 'Inquiry',
    buyerUse: 'Designer stones',
    tags: ['Certified available', 'Export priority'],
    featured: true,
    image: gemsPink,
    visual: 'gem-pink',
    shortDescription: 'Pink sapphire options for designers, ateliers and jewellery brands sourcing colour stones.',
    description: 'A pink sapphire selection for jewellery brands, designers and ateliers looking for Sri Lankan colour gemstones. Inquiry should include preferred shade, cut, size and budget range.',
    specs: [
      { label: 'Colour', value: 'Pink range' },
      { label: 'Cut', value: 'Oval / Cushion' },
      { label: 'Buyer fit', value: 'Designer / atelier' },
      { label: 'Inquiry type', value: 'Availability request' }
    ],
    tradeNotes: [
      'Good fit for capsule collections and custom jewellery.',
      'Exact shade and matching needs should be included in the inquiry.',
      'Product images and videos can be requested during supplier response.'
    ]
  },
  {
    id: 4,
    name: 'Yellow Sapphire Trade Lot',
    category: 'Colour Sapphire',
    origin: 'Sri Lanka',
    cut: 'Mixed',
    size: '3-7 mm',
    grade: 'A',
    stock: 'Inquiry',
    buyerUse: 'Wholesale lots',
    tags: ['Wholesale lot'],
    featured: false,
    image: gemsYellow,
    visual: 'gem-yellow',
    shortDescription: 'Yellow sapphire sourcing for wholesale buyers and trade customers.',
    description: 'A wholesale yellow sapphire lot suitable for trade buyers requesting commercial quantities. Final lot details, pricing and documentation depend on buyer requirements.',
    specs: [
      { label: 'Colour', value: 'Yellow' },
      { label: 'Category', value: 'Colour Sapphire' },
      { label: 'Stock type', value: 'Trade lot' },
      { label: 'Pricing', value: 'After inquiry' }
    ],
    tradeNotes: [
      'Best for buyers requesting commercial lot availability.',
      'Quantity and quality expectations should be specified.',
      'Supplier can respond with current availability and sourcing options.'
    ]
  },
  {
    id: 5,
    name: 'Ruby Sourcing Request',
    category: 'Ruby & Spinel',
    origin: 'Sri Lanka / sourcing network',
    cut: 'Buyer-defined',
    size: 'Custom',
    grade: 'By request',
    stock: 'Inquiry',
    buyerUse: 'Custom sourcing',
    tags: ['Export priority'],
    featured: false,
    image: gemsRuby,
    visual: 'gem-ruby',
    shortDescription: 'Ruby sourcing request flow for buyers with specific commercial requirements.',
    description: 'A buyer-led ruby sourcing request designed for importers, brands and trading companies that need specific sizes, colour range, documentation or budget parameters.',
    specs: [
      { label: 'Model', value: 'Custom sourcing' },
      { label: 'Stone', value: 'Ruby' },
      { label: 'Requirement', value: 'Buyer-defined' },
      { label: 'Timeline', value: 'Inquiry dependent' }
    ],
    tradeNotes: [
      'Submit detailed sourcing notes for faster supplier response.',
      'Include budget range, certification needs and destination market.',
      'Availability is confirmed after supplier review.'
    ]
  },
  {
    id: 6,
    name: 'Natural Spinel Selection',
    category: 'Ruby & Spinel',
    origin: 'Sri Lanka',
    cut: 'Mixed',
    size: '3-9 mm',
    grade: 'A / AA',
    stock: 'Inquiry',
    buyerUse: 'Designer stones',
    tags: ['Certified available'],
    featured: false,
    image: gemsSpinel,
    visual: 'gem-spinel',
    shortDescription: 'Natural spinel selection for jewellery brands seeking distinctive colour stones.',
    description: 'Natural spinel selection for brands and designers who need distinctive coloured gemstones for high-value jewellery pieces or limited collections.',
    specs: [
      { label: 'Stone', value: 'Spinel' },
      { label: 'Origin', value: 'Sri Lanka' },
      { label: 'Buyer fit', value: 'Designer stones' },
      { label: 'Docs', value: 'On request' }
    ],
    tradeNotes: [
      'Suitable for designers and custom jewellery brands.',
      'Colour matching and stone videos can be requested.',
      'Exact selection depends on live availability.'
    ]
  },
  {
    id: 7,
    name: 'Tourmaline Colour Parcel',
    category: 'Custom Sourcing',
    origin: 'Sri Lanka / trade sourcing',
    cut: 'Mixed',
    size: '4-10 mm',
    grade: 'Commercial / Fine',
    stock: 'Inquiry',
    buyerUse: 'Wholesale lots',
    tags: ['Wholesale lot'],
    featured: false,
    image: gemsTourmaline,
    visual: 'gem-tourmaline',
    shortDescription: 'Colour gemstone parcel for wholesalers, designers and trade buyers.',
    description: 'Tourmaline parcel for trade buyers looking for colour variety and flexible sourcing. Inquiry should include preferred colours, size range and intended buyer use.',
    specs: [
      { label: 'Stone', value: 'Tourmaline' },
      { label: 'Stock type', value: 'Parcel' },
      { label: 'Use', value: 'Wholesale / design' },
      { label: 'Pricing', value: 'After inquiry' }
    ],
    tradeNotes: [
      'Good for colour-focused buyers and designers.',
      'Availability varies by colour and size.',
      'Submit specific requirements for accurate response.'
    ]
  },
  {
    id: 8,
    name: 'Custom Gemstone Sourcing Brief',
    category: 'Custom Sourcing',
    origin: 'Sri Lanka',
    cut: 'Custom',
    size: 'Custom',
    grade: 'Buyer-defined',
    stock: 'Inquiry',
    buyerUse: 'Custom sourcing',
    tags: ['Export priority', 'Certified available'],
    featured: true,
    image: gemsCustom,
    visual: 'gem-custom',
    shortDescription: 'Submit a sourcing brief for specific gemstones, quantities, certification and export needs.',
    description: 'A custom sourcing brief for procurement teams, importers and brands with specific requirements. Buyers can submit size, cut, colour, quantity, certification and timeline needs.',
    specs: [
      { label: 'Request type', value: 'Custom inquiry' },
      { label: 'Buyer type', value: 'Trade / procurement' },
      { label: 'Timeline', value: 'Buyer-defined' },
      { label: 'Docs', value: 'As required' }
    ],
    tradeNotes: [
      'Best option for buyers who do not see the exact stone listed.',
      'Include as much detail as possible in the inquiry.',
      'Supplier can respond with sourcing options and next steps.'
    ]
  }
]

const tradeFeatures = [
  {
    label: 'Inquiry list',
    title: 'Catalogue experience without online checkout',
    copy: 'Buyers can browse products, save items and build an inquiry list, but no purchase is completed on the website.'
  },
  {
    label: 'Private follow-up',
    title: 'Buyer and supplier handle the sale directly',
    copy: 'After the inquiry is sent, Lanka Gems & Jewellery can reply with availability, price, documentation, photos and export details.'
  },
  {
    label: 'Better requests',
    title: 'Structured commercial inquiries',
    copy: 'The form collects buyer type, destination market, quantity, timeline and gemstone requirements.'
  },
  {
    label: 'Supplier credibility',
    title: 'A real catalogue for buyer vetting',
    copy: 'International buyers can review products and company information before starting a private trade conversation.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Browse',
    copy: 'Buyer reviews gemstone categories and product-style listings.'
  },
  {
    number: '02',
    title: 'Shortlist',
    copy: 'Buyer adds relevant stones to their inquiry list.'
  },
  {
    number: '03',
    title: 'Send inquiry',
    copy: 'Buyer submits company details, quantity, specifications and sourcing requirements.'
  },
  {
    number: '04',
    title: 'Supplier follows up',
    copy: 'Lanka Gems & Jewellery replies directly with availability, pricing, documentation and export next steps.'
  }
]

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearch =
      !searchQuery.value ||
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      activeCategory.value === 'All' || product.category === activeCategory.value

    const matchesBuyerUse =
      activeBuyerUse.value === 'All buyer uses' || product.buyerUse === activeBuyerUse.value

    const matchesQuickFilter =
      !activeQuickFilter.value || product.tags.includes(activeQuickFilter.value)

    return matchesSearch && matchesCategory && matchesBuyerUse && matchesQuickFilter
  })
})

const addToInquiry = (product) => {
  const alreadyAdded = inquiryList.value.some((item) => item.id === product.id)

  if (!alreadyAdded) {
    inquiryList.value.push(product)
  }

  isInquiryOpen.value = true
}

const removeFromInquiry = (productId) => {
  inquiryList.value = inquiryList.value.filter((item) => item.id !== productId)
}

const toggleWishlist = (productId) => {
  if (wishlist.value.includes(productId)) {
    wishlist.value = wishlist.value.filter((id) => id !== productId)
    return
  }

  wishlist.value.push(productId)
}

const openProduct = (product) => {
  selectedProduct.value = product
}

const resetFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'All'
  activeBuyerUse.value = 'All buyer uses'
  activeQuickFilter.value = ''
}

const submitInquiry = () => {
  submitted.value = true

  setTimeout(() => {
    submitted.value = false
  }, 5000)
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Iosevka+Charon:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

html {
  scroll-behavior: smooth;
}

.lanka-gems-demo {
  font-family: "Iosevka Charon", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-synthesis: none;
  text-rendering: geometricPrecision;
}

.lanka-gems-demo :is(h1, h2, h3, h4, p, a, button, input, select, textarea, span, label) {
  font-family: inherit;
}

.hero-spline-frame {
  touch-action: pan-y;
}

.hero-z-pattern {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(115deg, rgba(222, 250, 241, 0.76) 0%, rgba(223, 247, 241, 0.54) 44%, rgba(246, 241, 231, 0.68) 100%),
    linear-gradient(135deg, transparent 0 28%, rgba(11, 47, 107, 0.1) 28% 28.22%, transparent 28.22% 50%, rgba(216, 180, 95, 0.16) 50% 50.22%, transparent 50.22% 72%, rgba(11, 47, 107, 0.1) 72% 72.22%, transparent 72.22%),
    linear-gradient(135deg, transparent 0 18%, rgba(216, 205, 184, 0.42) 18% 18.28%, transparent 18.28% 82%, rgba(216, 205, 184, 0.42) 82% 82.28%, transparent 82.28%),
    radial-gradient(circle at 84% 18%, rgba(216, 180, 95, 0.12), transparent 20%),
    radial-gradient(circle at 12% 86%, rgba(11, 47, 107, 0.07), transparent 22%),
    #f6f1e7;
}

.hero-z-pattern::before,
.hero-z-pattern::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.hero-z-pattern::before {
  inset: 0;
  background-image:
    linear-gradient(rgba(11, 47, 107, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 47, 107, 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(120deg, rgba(0, 0, 0, 0.2), transparent 70%);
}

.hero-z-pattern::after {
  right: 7%;
  top: 16%;
  width: min(38rem, 72vw);
  height: min(38rem, 72vw);
  border: 1px solid rgba(11, 47, 107, 0.08);
  transform: rotate(45deg);
}

.hero-gem-frame {
  box-shadow:
    -14px 14px 0 rgba(216, 205, 184, 0.7),
    0 24px 60px rgba(11, 47, 107, 0.14);
}

.hero-gem-visual {
  background:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    radial-gradient(circle at 44% 34%, rgba(232, 242, 255, 0.95), transparent 8%),
    radial-gradient(circle at 52% 46%, rgba(55, 115, 210, 0.88), transparent 24%),
    radial-gradient(circle at 74% 72%, rgba(216, 180, 95, 0.28), transparent 22%),
    radial-gradient(circle at 22% 78%, rgba(12, 64, 145, 0.45), transparent 28%),
    #0b2f6b;
  background-size:
    34px 34px,
    34px 34px,
    auto,
    auto,
    auto,
    auto;
}

.gem-blue {
  background:
    radial-gradient(circle at 42% 36%, rgba(229, 245, 255, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(29, 87, 166, 0.9), transparent 28%),
    linear-gradient(135deg, #0a1d35, #1f4f9a 60%, #06111f);
}

.gem-blue-light {
  background:
    radial-gradient(circle at 42% 36%, rgba(240, 250, 255, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(72, 132, 205, 0.86), transparent 30%),
    linear-gradient(135deg, #0e243e, #4c83c1 60%, #081421);
}

.gem-pink {
  background:
    radial-gradient(circle at 42% 36%, rgba(255, 238, 248, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(198, 83, 134, 0.9), transparent 30%),
    linear-gradient(135deg, #33101e, #c65386 60%, #1d0811);
}

.gem-yellow {
  background:
    radial-gradient(circle at 42% 36%, rgba(255, 250, 220, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(215, 169, 49, 0.9), transparent 30%),
    linear-gradient(135deg, #332503, #d7a931 60%, #1d1503);
}

.gem-ruby {
  background:
    radial-gradient(circle at 42% 36%, rgba(255, 226, 226, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(159, 35, 53, 0.92), transparent 30%),
    linear-gradient(135deg, #2c060b, #9f2335 60%, #160305);
}

.gem-spinel {
  background:
    radial-gradient(circle at 42% 36%, rgba(239, 226, 255, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(93, 61, 128, 0.9), transparent 30%),
    linear-gradient(135deg, #170c22, #5d3d80 60%, #0c0711);
}

.gem-tourmaline {
  background:
    radial-gradient(circle at 42% 36%, rgba(224, 255, 244, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(39, 124, 101, 0.9), transparent 30%),
    linear-gradient(135deg, #071f17, #277c65 60%, #04100c);
}

.gem-custom {
  background:
    radial-gradient(circle at 42% 36%, rgba(255, 246, 218, 0.95), transparent 8%),
    radial-gradient(circle at 50% 52%, rgba(122, 103, 61, 0.9), transparent 30%),
    linear-gradient(135deg, #201909, #7a673d 60%, #0f0b04);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.field span {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #738096;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border: 1px solid #d8cdb8;
  background: #fffaf0;
  padding: 0.95rem 1rem;
  color: #0b2f6b;
  outline: none;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(86, 96, 80, 0.45);
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #0b2f6b;
  background: #ffffff;
}

.field.dark span {
  color: rgba(255, 255, 255, 0.52);
}

.field.dark input,
.field.dark select,
.field.dark textarea {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.field.dark input::placeholder,
.field.dark textarea::placeholder {
  color: rgba(255, 255, 255, 0.32);
}

.field.dark input:focus,
.field.dark select:focus,
.field.dark textarea:focus {
  border-color: #d8b45f;
  background: rgba(255, 255, 255, 0.1);
}

.field.dark select option {
  background: #0b2f6b;
  color: #ffffff;
}
</style>
