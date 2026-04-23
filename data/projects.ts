import theringexCover from './project-assets/theringex_cover.webp'
import theringexGallery1 from './project-assets/theringex_1.webp'
import theringexGallery2 from './project-assets/theringex_2.webp'
import theringexGallery3 from './project-assets/theringex_3.webp'
import theringexGallery4 from './project-assets/theringex_4.webp'
import theringexGallery5 from './project-assets/theringex_5.webp'
import focumCover from './project-assets/focum_cover.webp'
import focumGallery1 from './project-assets/focum_1.webp'
import focumGallery2 from './project-assets/focum_2.webp'
import focumGallery3 from './project-assets/focum_3.webp'

export type ProjectAccordionItem = {
  title: string
  content: string
}

export type ProjectHighlight = {
  title: string
  content: string
}

export type ProjectGalleryItem = {
  src: string
  alt: string
  caption?: string
}

export type ProjectEntry = {
  id: string
  title: string
  summary: string
  scope: string
  collaboration?: string
  websiteUrl?: string
  coverImage?: string
  coverImageAlt?: string
  coverAspectRatio?: string
  coverObjectPosition?: string
  tags: string[]
  accordion: ProjectAccordionItem[]
  highlights: ProjectHighlight[]
  gallery: ProjectGalleryItem[]
  order: number
  published: boolean
  content: string[]
}

export const projects: ProjectEntry[] = [
  {
    id: 'theringexperience',
    title: 'theringexperience',
    summary:
      'A website project connected to a Sanity backend, with booking-related flows and API integrations for consent-related data handling.',
    scope:
      'Website design and build, Sanity content management setup, editable content structure, booking flow connections, and API-based integrations.',
    collaboration: 'In collaboration with klyk.studio',
    websiteUrl: 'https://theringexperience.lk/',
    coverImage: theringexCover,
    coverImageAlt: 'The Ring Experience project cover image',
    coverAspectRatio: '16 / 9',
    coverObjectPosition: 'center top',
    tags: ['Website', 'CMS + APIs'],
    accordion: [
      {
        title: 'What the client can manage',
        content:
          'The Sanity backend lets the client enter the site calmly and update content more independently, including changing information and adding new available items.',
      },
      {
        title: 'What can be added or updated',
        content:
          'The setup supports adding new experiences and new gems, so the website can keep evolving without rebuilding pages every time content changes.',
      },
      {
        title: 'What is connected',
        content:
          'The project includes API connections used for booking-related flows and for collecting consent-related user data through the site.',
      },
    ],
    highlights: [
      {
        title: 'CMS',
        content:
          'Sanity is used as the backend so the client can manage content in a more structured and comfortable way.',
      },
      {
        title: 'Content updates',
        content:
          'The site can be updated with new experiences, new gems, and revised information without changing the frontend structure.',
      },
      {
        title: 'Integrations',
        content:
          'API connections support booking flows and consent-related data collection through the site.',
      },
    ],
    gallery: [
      {
        src: theringexGallery1,
        alt: 'The Ring Experience home page on mobile',
      },
      {
        src: theringexGallery2,
        alt: 'The Ring Experience product detail page',
      },
      {
        src: theringexGallery3,
        alt: 'The Ring Experience editorial website section',
      },
      {
        src: theringexGallery4,
        alt: 'The Ring Experience booking and content layout',
      },
      {
        src: theringexGallery5,
        alt: 'The Ring Experience mobile browsing experience',
      },
    ],
    order: 1,
    published: true,
    content: [
      'This project was built as a real working platform, not just as a visual layer.',
      'One of the important parts of the build was making sure the client could manage the site more calmly and independently over time.',
      'The backend structure in Sanity supports content editing in a way that feels more practical for everyday updates.',
      'That means the client can update information already on the site, add new available experiences, and add new gems as they become available.',
      'The project also includes connected flows through external APIs for booking-related actions and consent-related user data collection.',
      'The result is a website that is not only easier to use from the outside, but also easier to maintain from the inside.',
    ],
  },
  {
    id: 'brand-identity-design-for-fire-starter-company',
    title: 'Focum',
    summary:
      'A brand identity project focused on shaping a sharper, more distinctive visual direction for Focum.',
    scope:
      'Brand identity design, visual language development, logo direction, and core brand applications.',
    websiteUrl: 'https://drive.google.com/file/d/1O0llKcTZq1OYRsD8eUrEFnUhW5pr-VG2/view?ths=true',
    coverImage: focumCover,
    coverImageAlt: 'Focum brand identity project cover image',
    coverAspectRatio: '16 / 7.2',
    coverObjectPosition: 'center 62%',
    tags: ['Brand identity', 'Visual design'],
    accordion: [
      {
        title: 'What the project focuses on',
        content:
          'The work is centered on building a brand identity that feels more recognisable, coherent, and ready to be applied across different touchpoints.',
      },
      {
        title: 'What was shaped visually',
        content:
          'The direction includes the core visual language of the brand, from identity choices to the way the company presents itself more consistently.',
      },
      {
        title: 'How it supports the business',
        content:
          'A stronger identity helps the company appear more intentional and memorable, creating a clearer foundation for communication and growth.',
      },
    ],
    highlights: [
      {
        title: 'Identity',
        content:
          'The project is built around defining a recognisable and more confident brand presence.',
      },
      {
        title: 'Consistency',
        content:
          'The visual system is meant to help the brand appear more coherent across materials and future applications.',
      },
      {
        title: 'Positioning',
        content:
          'The direction supports a stronger first impression and a more intentional way of presenting the company.',
      },
    ],
    gallery: [
      {
        src: focumGallery1,
        alt: 'Focum brand identity visual direction',
      },
      {
        src: focumGallery2,
        alt: 'Focum brand applications and visual system',
      },
      {
        src: focumGallery3,
        alt: 'Focum brand identity presentation mockup',
      },
    ],
    order: 2,
    published: true,
    content: [
      'This project is a brand identity case study created for Focum.',
      'The main goal is to shape a visual direction that feels more distinctive, more consistent, and easier to recognise.',
      'The work is less about adding noise and more about giving the brand a stronger and more intentional presence.',
      'A clear identity helps the company communicate with more confidence across different formats and touchpoints.',
      'It also creates a foundation that can be applied more consistently as the brand grows and evolves.',
      'The new visual assets now give the project a more tangible case study presence across the portfolio and detail page.',
    ],
  },
]

export const publishedProjects = projects
  .filter((project) => project.published)
  .sort((a, b) => a.order - b.order)

export function getProjectById(id: string) {
  return publishedProjects.find((project) => project.id === id)
}
