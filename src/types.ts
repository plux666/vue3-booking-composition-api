export interface RoomGuests {
  adults: number
  childrenFour: number
  childrenTen: number
  childrenSeventeen: number
}

export interface BookedRoom {
  guests: RoomGuests
  roomId?: string | number | null
}

export interface AvailableRoom {
  name: string
  rid: string
  iblock: string
  about: string
  pictures: string[]
}
