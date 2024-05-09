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

export type TCreateTicket = {
  customer: string
  description: string
  date: string
  priority: string
}

export type TTicketShort= {
  type?: string
  isUptoDown: boolean
}