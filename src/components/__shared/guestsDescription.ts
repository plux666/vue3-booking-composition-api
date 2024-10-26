import type { RoomGuests } from '@/types'

export const guestsDescription = (guestsData: RoomGuests) => {
  const adults = guestsData.adults
  const children = Object.entries(guestsData).reduce((sum, [age, amount]) => {
    if (age !== 'adults') {
      return sum + amount
    }
    return sum
  }, 0)
  if (children) {
    return `${adults} ${adults === 1 ? 'Взрослый' : 'Взрослых'}, ${children} ${children === 1 ? 'Ребенок' : 'Детей'}`
  }

  return `${adults} ${adults === 1 ? 'Взрослый' : 'Взрослых'}`
}
