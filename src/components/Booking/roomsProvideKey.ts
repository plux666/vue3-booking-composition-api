import type { InjectionKey, Ref } from 'vue'
import type { BookedRoom, RoomGuests } from '@/types'

export type RoomsProvide = {
  bookedRooms: BookedRoom[]
  setGuestsData: (index: number, data: RoomGuests) => void
  addRoom: (roomData: BookedRoom) => void
  removeRoom: (index: number) => void
  chooseRoom: (index: number, roomId: number | string) => void
  currentRoom: Ref<number, number>
}

export const roomsKey = Symbol('rooms') as InjectionKey<RoomsProvide>
