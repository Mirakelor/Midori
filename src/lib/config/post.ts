import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    bridgy: {
    post: ['fed']
  },
  comment: {
    use: ['Webmention'],
    style: 'boxed', // 评论系统栏样式: none / bordered / lifted / boxed
    webmention: {
      username: 'https://monocle.js.org',
      sortBy: 'created', // 排序方式: created / updated
      sortDir: 'down', // 排序顺序: up / down
      form: true, // 启用评论: true / false
      commentParade: true // 启用匿名评论: true / false
    }
  }
}