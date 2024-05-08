export type TUser = {
  image: string
  name: string
}

export type TTickets = {
  id: number
  description: string
  date: string
  time: string
  priority: string
  customer: TUser
}