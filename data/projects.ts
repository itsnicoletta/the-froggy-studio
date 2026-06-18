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
import atlasCover from './project-assets/atlas_cover.webp'
import atlasGallery1 from './project-assets/atlas_1.webp'
import atlasGallery2 from './project-assets/atlas_2.webp'
import atlasGallery3 from './project-assets/atlas_3.webp'
import noBoardCover from './project-assets/NoBoard_cover.webp'
import noBoardGallery1 from './project-assets/NoBoard_1.webp'
import noBoardGallery2 from './project-assets/NoBoard_2.webp'
import noBoardGallery3 from './project-assets/NoBoard_3.webp'
import noBoardGallery4 from './project-assets/NoBoard_4.webp'
import theSecretCover from './project-assets/Thesecret_cover.webp'
import theSecretGallery1 from './project-assets/Thesecret_1.webp'
import theSecretGallery2 from './project-assets/Thesecret_2.webp'
import theSecretGallery3 from './project-assets/Thesecret_3.webp'
import theSecretVideo from './project-assets/Thesecret_video.webm'

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

export type ProjectDownloadLink = {
  label: string
  url: string
}

export type ProjectEntry = {
  id: string
  title: string
  searchIntentLabel: string
  industry: string
  status: string
  servicesDelivered: string[]
  toolsUsed: string[]
  summary: string
  scope: string
  collaboration?: string
  websiteUrl?: string
  ctaLabel?: string
  downloadLinks?: ProjectDownloadLink[]
  conversationCTA?: string
  proofNote?: string
  videoUrl?: string
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
    title: 'The Ring Experience',
    searchIntentLabel: 'Published Client Website',
    industry: 'Jewellery workshop and experience booking',
    status: 'Published',
    servicesDelivered: [
      'Website design and build',
      'Vue development',
      'Sanity CMS setup',
      'Content structure',
    ],
    toolsUsed: ['Vue', 'Sanity', 'Figma', 'Cloudflare Pages'],
    summary:
      'A published website for a jewellery workshop and tourism experience in Sri Lanka, built with editable content and a clear service structure.',
    scope:
      'Website design, Vue development, Sanity CMS setup, and content structure for a published client website.',
    collaboration: 'In collaboration with klyk.studio',
    websiteUrl: 'https://theringexperience.lk/',
    ctaLabel: 'Visit live site',
    conversationCTA: 'Need a website like this?',
    proofNote: 'Positive Google reviews and a testimonial are available for this published client website.',
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
    searchIntentLabel: 'Concept Brand Identity',
    industry: 'Brand identity concept',
    status: 'Concept',
    servicesDelivered: [
      'Brand strategy',
      'Visual identity system',
      'Naming direction',
      'Packaging direction',
    ],
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Adobe InDesign'],
    summary:
      'A concept brand identity for a premium firelighter and glamping product, shaped as an exercise in naming and visual direction.',
    scope:
      'Brand strategy, visual identity, naming direction, brand bible, and packaging direction for a concept project.',
    websiteUrl: 'https://drive.google.com/file/d/1O0llKcTZq1OYRsD8eUrEFnUhW5pr-VG2/view?ths=true',
    ctaLabel: 'View concept presentation',
    conversationCTA: 'Need a brand identity?',
    proofNote: 'Concept work only, not client work.',
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
      'This project is a concept brand identity case study created for Focum.',
      'The main goal is to shape a visual direction that feels more distinctive, more consistent, and easier to recognise.',
      'The work is less about adding noise and more about giving the brand a stronger and more intentional presence.',
      'A clear identity helps the brand communicate with more confidence across different formats and touchpoints.',
      'It also creates a foundation that can be applied more consistently as the concept grows and evolves.',
      'The new visual assets give the concept a more tangible portfolio presence.',
    ],
  },
  {
    id: 'secret-garden',
    title: 'The Secret Garden',
    searchIntentLabel: 'Internal Product',
    industry: 'Mood tracking desktop app',
    status: 'Completed desktop app',
    servicesDelivered: [
      'Product concept',
      'UX/UI design',
      'Visual identity direction',
      'Front-end development',
      'Local data structure',
      'App packaging',
    ],
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Electron', 'electron-builder'],
    summary:
      'A small desktop mood diary app designed as a gentle emotional ritual, where users plant one mood per day, write a private note, and watch their weekly garden slowly grow.',
    scope:
      'Product concept, UX/UI design, visual identity direction, front-end development, local-first data structure, Electron packaging, and release preparation.',
    conversationCTA: 'Have a product idea?',
    proofNote: 'Completed desktop app with public Windows installer and portable release available.',
    downloadLinks: [
      {
        label: 'Download Windows installer',
        url: 'https://github.com/thefroggystudiosl/The-Secret-Garden-/releases/download/V1-0-0/Secret.Garden.Setup.0.0.0.exe',
      },
      {
        label: 'Download portable app',
        url: 'https://github.com/thefroggystudiosl/The-Secret-Garden-/releases/download/V1-0-0/Secret.Garden.portable.0.0.0.exe',
      },
    ],
    videoUrl: theSecretVideo,
    coverImage: theSecretCover,
    coverImageAlt: 'The Secret Garden desktop app project cover image',
    coverAspectRatio: '16 / 9',
    coverObjectPosition: 'center center',
    tags: ['Desktop app', 'Internal product'],
    accordion: [
      {
        title: 'What it is',
        content:
          'The Secret Garden is a local-first desktop mood diary app built around a simple ritual: choose a mood, write a private thought, and plant it into the week\'s garden.',
      },
      {
        title: 'How it works',
        content:
          'The product is built around three core sections: Garden for daily mood planting, Diary for saved notes and mood history, and Stats for visual summaries of emotional patterns.',
      },
      {
        title: 'What makes it different',
        content:
          'Instead of treating mood tracking like performance data, the app uses metaphor, illustration, and soft interaction to create a calmer and more personal experience.',
      },
    ],
    highlights: [
      {
        title: 'Ritual',
        content:
          'The app turns daily feelings into a tiny digital garden, with one planted mood per day and a private note attached to each entry.',
      },
      {
        title: 'Experience',
        content:
          'The UX stays focused and emotionally clear, with onboarding, custom modals, a settings area, and optional desktop reminders through Electron.',
      },
      {
        title: 'Desktop build',
        content:
          'The app was packaged with Electron and electron-builder, including installer support, portable .exe output, tray behavior, and native notifications.',
      },
    ],
    gallery: [
      {
        src: theSecretGallery1,
        alt: 'The Secret Garden mood tracking app interface overview',
      },
      {
        src: theSecretGallery2,
        alt: 'The Secret Garden emotional diary flow and garden visuals',
      },
      {
        src: theSecretGallery3,
        alt: 'The Secret Garden desktop app screens and interaction details',
      },
    ],
    order: 3,
    published: true,
    content: [
      'The Secret Garden is an internal product, not client work.',
      'It was designed to move away from the cold, analytical feeling of traditional mood trackers and replace it with a softer, more personal ritual.',
      'Users can plant one mood per day, write a private note, and slowly build a weekly garden that reflects their emotional pattern over time.',
      'The completed build includes Garden, Diary, and Stats sections, onboarding, settings, optional reminders, local-first storage, and a packaged Electron desktop app.',
      'The Windows installer and portable app are available through the public GitHub release.',
    ],
  },
  {
    id: 'atlas-pro',
    title: 'Atlas Pro',
    searchIntentLabel: 'Ongoing Social Media Management',
    industry: 'Sports, parkour training, youth activity program',
    status: 'Ongoing client project',
    servicesDelivered: [
      'Social media management',
      'Content planning',
      'Caption writing',
      'Short-form content direction',
      'Campaign support',
      'Paid advertising support',
      'Community communication',
      'Content strategy',
    ],
    toolsUsed: [
      'Instagram',
      'Meta Business Suite',
      'Content planning tools',
      'Visual content direction',
      'Paid ads support',
    ],
    summary:
      'Atlas Pro is a parkour and youth activity program. The project focuses on building a clearer and more consistent social media presence through content planning, short-form content direction, captions, campaign support and paid advertising support.',
    scope:
      'The Froggy Studio supports Atlas Pro with social media management and digital content direction to make the brand more visible, easier to understand, and more consistent across Instagram.',
    websiteUrl: 'https://www.instagram.com/atlasprosocials?igsh=bDkyajk3M2s2cGd5',
    ctaLabel: 'View Atlas Pro on Instagram',
    conversationCTA: 'Need social media support?',
    proofNote:
      'Between May 13, 2026 and June 9, 2026, Atlas Pro recorded 33.3K views, 17.8K reach, 436 content interactions, 355 Instagram link clicks, and 79 Instagram profile visits.',
    coverImage: atlasCover,
    coverImageAlt: 'Atlas Pro social media management project cover image',
    coverAspectRatio: '16 / 9',
    coverObjectPosition: 'center top',
    tags: ['Social media', 'Campaign support'],
    accordion: [
      {
        title: 'What was handled',
        content:
          'The work covered social media management, content planning, caption writing, short-form content direction, campaign support, paid advertising support, community communication, and content strategy.',
      },
      {
        title: 'What changed',
        content:
          'Between May 13, 2026 and June 9, 2026, Atlas Pro recorded 33.3K views, 17.8K reach, 436 content interactions, 355 Instagram link clicks, and 79 Instagram profile visits.',
      },
      {
        title: 'What this shows',
        content:
          'The work focused on making Atlas Pro’s communication clearer, more structured, and more consistent for both young athletes and parents.',
      },
    ],
    highlights: [
      {
        title: 'Views',
        content:
          'Views increased by 142.2% during the reporting period.',
      },
      {
        title: 'Reach',
        content:
          'Reach increased by 130.3% while the account became more consistent and easier to understand.',
      },
      {
        title: 'Engagement',
        content:
          'Content interactions increased by 289.3%, and Instagram link clicks increased by 222.7%.',
      },
    ],
    gallery: [
      {
        src: atlasGallery1,
        alt: 'Atlas Pro Instagram content overview',
      },
      {
        src: atlasGallery2,
        alt: 'Atlas Pro social media post design and messaging',
      },
      {
        src: atlasGallery3,
        alt: 'Atlas Pro Instagram account growth and content direction',
      },
    ],
    order: 5,
    published: true,
    content: [
      'Atlas Pro is a parkour and youth activity program and an ongoing client project supported by The Froggy Studio.',
      'The work focuses on building a clearer and more consistent social media presence through content planning, short-form content direction, captions, campaign support, and paid advertising support.',
      'Between May 13, 2026 and June 9, 2026, Atlas Pro recorded 33.3K views, 17.8K reach, 436 content interactions, 355 Instagram link clicks, and 79 Instagram profile visits.',
      'The Froggy Studio helped make the brand more visible, easier to understand, and more consistent across Instagram for both young athletes and parents.',
    ],
  },
  {
    id: 'noboard',
    title: 'NoBoard',
    searchIntentLabel: 'Internal Product',
    industry: 'Local-first desktop task manager',
    status: 'Prepared for release',
    servicesDelivered: [
      'Product concept',
      'UX/UI design',
      'Visual direction',
      'Vue development',
      'Local-first architecture',
      'Electron packaging',
      'Update system setup',
    ],
    toolsUsed: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Electron'],
    summary:
      'A local-first desktop task manager for freelancers, solo professionals, and small teams who need client, deadline, priority, status, and task type without a heavy productivity platform.',
    scope:
      'Product concept, UX/UI design, Vue 3 and TypeScript development, Tailwind CSS interface build, local-first data structure, Electron packaging, update manifest setup, and release preparation.',
    conversationCTA: 'Have a desktop app idea?',
    proofNote:
      'Designed, developed, packaged, and prepared for release by The Froggy Studio.',
    coverImage: noBoardCover,
    coverImageAlt: 'NoBoard desktop task manager project cover image',
    coverAspectRatio: '16 / 9',
    coverObjectPosition: 'center center',
    tags: ['Desktop app', 'Internal product', 'Local-first'],
    accordion: [
      {
        title: 'What it solves',
        content:
          'NoBoard was created for people who manage real work every day but do not want to depend on team-first, cloud-heavy, subscription productivity platforms.',
      },
      {
        title: 'How it stays focused',
        content:
          'The app keeps the user close to the information that matters most: client, deadline, priority, status, and task type.',
      },
      {
        title: 'How it protects control',
        content:
          'NoBoard keeps task data on the user\'s device, while the update system checks a remote manifest hosted by The Froggy Studio.',
      },
    ],
    highlights: [
      {
        title: 'Local-first',
        content:
          'User data stays on the device, giving the product a private and direct desktop workflow.',
      },
      {
        title: 'Focused tasks',
        content:
          'Tasks can be organised by client, deadline, priority, status, and work type, with calendar views and public holiday awareness.',
      },
      {
        title: 'Release ready',
        content:
          'The product was built with Vue 3, TypeScript, Tailwind CSS, and Electron, then prepared as a packaged desktop application.',
      },
    ],
    gallery: [
      {
        src: noBoardGallery1,
        alt: 'NoBoard desktop app task overview screen',
      },
      {
        src: noBoardGallery2,
        alt: 'NoBoard task management interface with local-first workspace',
      },
      {
        src: noBoardGallery3,
        alt: 'NoBoard calendar and task organisation view',
      },
      {
        src: noBoardGallery4,
        alt: 'NoBoard settings and interface options screen',
      },
    ],
    order: 4,
    published: true,
    content: [
      'NoBoard is a local-first desktop task manager designed and developed by The Froggy Studio.',
      'The product was created for people who manage real work every day but do not want to depend on another complex productivity platform.',
      'Instead of building a heavy project management system, the focus was clarity, speed, and local control.',
      'Many task management tools are built around teams, cloud accounts, subscriptions, boards, automations, and complex workflows.',
      'For freelancers, solo professionals, and small teams, this can become too much because the tool starts to require more management than the work itself.',
      'NoBoard answers a simpler question: what does someone actually need to see to stay on top of their work?',
      'The answer shaped the product around client, deadline, priority, status, and task type.',
      'The app gives users a focused desktop workspace where they can organise tasks without logging in, syncing data to the cloud, or setting up a complicated system.',
      'The visual direction is intentionally warm and minimal, with a dark earthy interface, clear contrast, structured cards, and simple navigation.',
      'NoBoard includes local data persistence, multilingual interface options, theme settings, manual interface direction, calendar views, public holiday awareness, and update checking.',
      'Every feature was added to help the user understand what needs attention without adding unnecessary friction.',
      'The result is a small but complete digital product: clear in purpose, simple in use, and carefully shaped from brand idea to working software.',
    ],
  },
]

export const publishedProjects = projects
  .filter((project) => project.published)
  .sort((a, b) => a.order - b.order)

export function getProjectById(id: string) {
  return publishedProjects.find((project) => project.id === id)
}
