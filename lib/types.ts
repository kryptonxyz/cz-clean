export interface Commit {
  type: string
  subject: string
  body?: string
}

export interface Choice {
  emoji: string
  code: string
  description: string
  name: string
}

export interface Format {
  type: string
  subject: string
  body: string | null
}
