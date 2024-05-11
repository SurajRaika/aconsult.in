import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

export default defineConfig({
  site: 'https://blog-template-gray.vercel.app/', // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["hn", "en","gj"],
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true,
      },
      drafts: true,
    }),
    sitemap(),
    tailwind(),
  ],
})