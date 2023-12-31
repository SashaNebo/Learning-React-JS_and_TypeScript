export type GameFromServer = Partial<{
  id: number
  name: string
  description: string
  version: string
  price: number
  tags: string[]
  forKids: boolean
}>

export type GamesFromServer = GameFromServer[]

export const GAMES: GamesFromServer = [
  {
    id: 1,
    name: 'Мортал Комбат',
    description: 'Голые мужчины дерутся с другими голыми мужчинами',
    version: 'X',
    price: 1000,
    tags: ['Бои', 'Кровь'],
    forKids: false,
  },
  {
    id: 2,
    name: 'Гонки какие-то',
    price: 700,
    tags: ['Машины', 'Драйв', 'СтритРейсинг'],
    forKids: true,
  },
  {
    id: 3,
    name: 'FIFA',
    description: 'Много человек бегает за мячиком по огромному полю',
    forKids: true,
  },
]
