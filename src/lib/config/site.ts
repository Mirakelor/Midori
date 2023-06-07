import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'monocle.js.org',
  title: 'Midori',
  subtitle: 'QwQ',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/Avatar.jpg',
    name: 'Mirakelor',
    status: '🌸',
    bio: '拨动时光的指针~'
  },
  themeColor: '#3D4451'
}
