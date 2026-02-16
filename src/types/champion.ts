export interface Champion {
  id: string
  key: string
  name: string
  title: string
  image: {
    full: string
    sprite: string
    group: string
  }
}

export interface ChampionsData {
  type: string
  format: string
  version: string
  data: {
    [key: string]: Champion
  }
}
