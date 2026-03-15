<script setup lang="ts">
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const runtimeConfig = useRuntimeConfig()
const measurementId = runtimeConfig.public.gaMeasurementId
const consentCookieName = 'tfs_cookie_consent'

let hasLoadedAnalytics = false

function readConsentCookie() {
  const cookieRow = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${consentCookieName}=`))

  const value = cookieRow?.split('=')[1]
  return value === 'analytics' || value === 'necessary' ? value : null
}

function loadAnalytics() {
  if (!measurementId || hasLoadedAnalytics) {
    return
  }

  hasLoadedAnalytics = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    anonymize_ip: true,
  })

  if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  script.dataset.gaId = measurementId
  document.head.appendChild(script)
}

function syncAnalyticsWithConsent() {
  if (readConsentCookie() === 'analytics') {
    loadAnalytics()
  }
}

onMounted(() => {
  syncAnalyticsWithConsent()
  window.addEventListener('tfs-consent-updated', syncAnalyticsWithConsent)
})

onBeforeUnmount(() => {
  window.removeEventListener('tfs-consent-updated', syncAnalyticsWithConsent)
})
</script>

<template>
  <span class="hidden" aria-hidden="true" />
</template>
