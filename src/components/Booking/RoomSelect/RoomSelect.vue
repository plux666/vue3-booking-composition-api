<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'
import axios from 'axios'

import type { AvailableRoom } from '@/types'

import RoomInfo from '@/components/Booking/RoomSelect/RoomInfo.vue'
import { guestsDescription } from '@/components/__shared/guestsDescription'
import { roomsKey, type RoomsProvide } from '../roomsProvideKey'

const { bookedRooms, chooseRoom, currentRoom } = inject(
  roomsKey,
) as RoomsProvide

watch(currentRoom, (a, b) => {
  console.log('lkkjhjg')
  console.log(a, b)
})

const availableRooms = ref<{ [key: number]: AvailableRoom[] }>()
const loaded = ref(false)

const fetchRooms = async () => {
  const response = await axios.get(
    'https://kivach.ru/calc-new/api_new.php?method=guests_rooms',
  )
  availableRooms.value = response.data.res
  loaded.value = true
}

const bookingDesc = computed(() => {
  if (!bookedRooms) {
    return ''
  }
  return guestsDescription(bookedRooms[currentRoom.value].guests)
})

const currentRoomGuestsAmount = computed(() => {
  if (!currentRoom.value) return 1
  console.log(currentRoom.value)
  console.log(bookedRooms[currentRoom.value].guests)
  return Object.values(bookedRooms[currentRoom.value].guests).reduce(
    (sum, amount) => sum + amount,
    0,
  )
})

onMounted(async () => {
  await fetchRooms()
})
</script>

<template>
  <div v-if="loaded && availableRooms?.[currentRoomGuestsAmount]">
    <div v-if="bookedRooms.length > 1">
      <h2 class="header-2">Выберите номер {{ currentRoom + 1 }}</h2>
      <p v-if="bookingDesc">{{ bookingDesc }}</p>
    </div>
    <h2 v-if="bookedRooms.length === 1" class="header-2">Выберите номер</h2>
    <RoomInfo
      v-for="(room, index) in availableRooms[currentRoomGuestsAmount]"
      :key="index"
      :room="room"
      :chosen="bookedRooms[currentRoom].roomId === room.rid"
      @choose="chooseRoom(currentRoom, room.rid)"
    />
  </div>
  <div v-else>
    <h3 class="header-3">Нет доступных номеров</h3>
  </div>
</template>

<style scoped></style>
