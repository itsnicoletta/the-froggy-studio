import { SITE_HOST, SITE_URL } from '~~/utils/site'

const LOCAL_HOSTS = new Set(['127.0.0.1', 'localhost'])

export default defineEventHandler((event) => {
  const requestUrl = getRequestURL(event)

  if (LOCAL_HOSTS.has(requestUrl.hostname)) {
    return
  }

  const isCanonicalRequest =
    requestUrl.protocol === 'https:' && requestUrl.hostname === SITE_HOST

  if (isCanonicalRequest) {
    return
  }

  const redirectUrl = new URL(`${requestUrl.pathname}${requestUrl.search}`, SITE_URL)
  return sendRedirect(event, redirectUrl.toString(), 301)
})
