export interface Article {
  body?: string
  id: string
  published?: Date
  summary?: string
  title?: string
}

export interface ArticleSerialized
  extends Pick<Article, Exclude<keyof Article, 'published'>> {
  published?: string
}
