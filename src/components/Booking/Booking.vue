<script setup lang="tsx">
import { provide, ref } from 'vue'

import BuyoutType from '@/components/Booking/BuyoutType.vue'
import Guests from '@/components/Booking/Guests/Guests.vue'
import RoomSelect from '@/components/Booking/RoomSelect/RoomSelect.vue'
import Checkout from '@/components/Booking/Checkout/Checkout.vue'
import { BookedRoom, RoomGuests } from '@/types'

const bookedRooms = ref<BookedRoom[]>([
  {
    guests: {
      adults: 1,
      childrenFour: 0,
      childrenTen: 0,
      childrenSeventeen: 0,
    },
    roomId: null,
  },
])

const step = ref(0)
const buyoutType = ref('self')
const currentRoom = ref(0)

const setGuestsData = (index: number, data: RoomGuests) => {
  bookedRooms.value[index].guests = data
}

const addRoom = (roomData: BookedRoom) => {
  bookedRooms.value.push(roomData)
}

const removeRoom = (index: number) => {
  bookedRooms.value.splice(index, 1)
}

const setBuyoutType = (type: 'self' | 'gift') => {
  buyoutType.value = type
  step.value = 1
}

const chooseRoom = (index: number | string, roomId: number | string) => {
  bookedRooms.value[index].roomId = roomId
}

const next = () => {
  if (step.value === 3) return

  if (step.value === 2 && currentRoom.value !== bookedRooms.value.length - 1) {
    currentRoom.value++
  } else {
    step.value++
  }
}

const back = () => {
  if (step.value === 2 && currentRoom.value !== 0) {
    currentRoom.value--
  } else {
    step.value--
  }
}

provide('rooms', {
  bookedRooms: bookedRooms.value,
  setGuestsData,
  addRoom,
  removeRoom,
  chooseRoom,
  currentRoom,
})
</script>

<template>
  <div class="booking">
    <div class="booking__content">
      <p v-if="step > 0" class="booking__step-indicator">Шаг {{ step }}/5</p>
      <BuyoutType v-if="step === 0" @on-buyout-pick="setBuyoutType" />
      <Guests v-if="step === 1" />
      <RoomSelect v-if="step === 2" />
      <Checkout v-if="step === 3" />
    </div>
    <div v-if="step > 0" class="booking__navigation">
      <AButton
        class="bold-text"
        size="large"
        :style="{ width: '175px' }"
        :disabled="step < 2"
        @click="back"
        >Назад</AButton
      >
      <AButton
        class="bold-text"
        size="large"
        type="primary"
        :style="{ width: '170px' }"
        :disabled="step === 2 && !bookedRooms[currentRoom].roomId"
        @click="next"
        >{{ step === 3 ? 'Отправить заявку' : 'Далее' }}</AButton
      >
    </div>
  </div>
</template>

<style scoped>
.booking {
  background-color: #ebeef0;
  display: flex;
  flex-direction: column;
  height: 623px;
}
.booking__step-indicator {
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: var(--primary-color);
  margin-bottom: 24px;
}
.booking__content {
  overflow: scroll;
  flex: 1;
  padding: 16px;
}
.booking__navigation {
  width: 100%;
  display: flex;
  padding: 16px 16px 12px 16px;
  margin: 0;
  height: 76px;
  justify-content: space-between;
  background-color: white;
}
</style>
