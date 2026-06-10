export const SITE_URL = 'https://thefroggystudio.com'
export const SITE_HOST = 'thefroggystudio.com'
export const INDEXABLE_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const REMOVED_BLOG_SLUGS = new Set([
  'chatbot-for-business-lead-generation',
])

export function buildCanonicalUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return new URL(normalizedPath, SITE_URL).toString()
}
