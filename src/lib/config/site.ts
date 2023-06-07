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
    status: '🍥',
    bio: '拨动时光的指针~',
    metadata: [
      {
        // text: 'kwaa',
        icon: 'i-heroicons-solid-github',
        link: 'https://github.com/Mirakelor'
      },
      {
        // text: '@kwaabot',
        icon: 'i-heroicons-solid-dolphin',
        link: 'https://fuckc.cf/@Mirakelor'
      },
      {
        icon: 'i-heroicons-solid-music',
        link: 'https://music.163.com/#/user/home?id=1442268174'
      }
    ]
  },
  themeColor: '#3D4451'
}
