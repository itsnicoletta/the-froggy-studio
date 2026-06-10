import { buildCanonicalUrl } from '~~/utils/site'

export default defineEventHandler(async (event) => {
  const staticPages = [
    {
      loc: buildCanonicalUrl('/'),
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: '2026-03-20',
    },
    {
      loc: buildCanonicalUrl('/blog'),
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: '2026-03-20',
    },
  ]

  const projectPages = [
    '/projects/theringexperience',
    '/projects/brand-identity-design-for-fire-starter-company',
    '/projects/secret-garden',
    '/projects/atlas-pro',
  ]

  const posts = await queryCollection(event, 'blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .all()

  const urls = [
    ...staticPages.map((page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`),
    ...projectPages.map((path) => `  <url>
    <loc>${buildCanonicalUrl(path)}</loc>
    <lastmod>2026-03-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`),
    ...posts.map((post: { path: string, updated?: string, date?: string }) => `  <url>
    <loc>${buildCanonicalUrl(post.path)}</loc>
    <lastmod>${post.updated || post.date || '2026-03-20'}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
