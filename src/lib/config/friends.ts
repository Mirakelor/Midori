export interface FriendOld {
    // hCard+XFN
    id: string // HTML id
    rel?: string // XFN, contact / acquaintance / friend
    link?: string // URL
    html?: string // HTML
    title?: string // Link title
    descr?: string // Descriptions
    avatar?: string // Friends avatar
    name?: string // backwards compatibility
  }
  
export type Friend = {
  id: string // HTML id
  rel?: string // XHTML Friends Network
  link?: string // URL
  html?: string // Custom HTML
  title?: string // Link title
  name?: string // Friends name
  avatar?: string // Friends avatar
  descr?: string // Descriptions
  class?: {
    avatar?: string // Avatar class
    img?: string // Photo class
  }
}

export const friends: Friend[] = [
  {
    id: 'shiro',
    rel: 'friend',
    name: 'Shiro.',
    title: 'Shiro\'s Shelf',
    avatar: 'https://snow.js.org/img/share.jpg',
    link: 'https://snow.js.org/',
    descr: '辉星皓夜苍千顷，此宵风醉月舞萤',
  },
  {
    id: 'yelu',
    rel: 'friend',
    name: '夜路',
    title: '夜路',
    avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=XIDmz5VY6c1F0dwj33w5icw&kti=ZExevAAAAAA&s=140&t=1655774580',
    link: 'https://emmm.space/',
    descr: '上士无争,下士好争',
  },
  {
    id: 'xingkongweiyu',
    rel: 'friend',
    name: '星空未屿',
    title: '星空未屿',
    avatar: 'https://open.cdn.clrxx.com/image/avatar.png',
    link: 'https://www.clrxx.com/',
    descr: '遇见即是上上签',
  },
  {
    id: 'anubis',
    rel: 'friend',
    name: 'Anubis',
    title: 'Anubis的小窝',
    avatar: 'https://anubis.cafe/medias/avatar.webp',
    link: 'https://anubis.cafe/',
    descr: '虽然是个整天摆烂的废物，但是欢迎来探讨问题哈！',
  },
  {
    id: 'timeless',
    rel: 'friend',
    name: 'Timeless',
    title: 'Timeless\'s博客',
    avatar: 'https://www.timelessq.com/static/avatar.jpg',
    link: 'https://www.timelessq.com',
    descr: '花开成景，花落成诗',
  },
  {
    id: 'huangyexiadenongyan',
    rel: 'friend',
    name: '浓烟下与荒野',
    title: '浓烟下与荒野',
    avatar: 'https://nongyanxia.com/avatar.jpg',
    link: 'https://nongyanxia.com',
    descr: '一个憨憨 💕',
  },
  {
    id: 'yueluoxingchen',
    rel: 'friend',
    name: '笙熙',
    title: '月落星沉',
    avatar: 'https://www.asxe.vip/images/avatar.webp',
    link: 'https://asxez.github.io/',
    descr: '斯人如彩虹，遇上方知有',
  }
]