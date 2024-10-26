<script setup lang="ts">
import { DeleteOutlined } from '@ant-design/icons-vue'
import { inject } from 'vue'

import { roomsKey, type RoomsProvide } from '../roomsProvideKey'
import GuestsCount from '@/components/Booking/Guests/guestsCount.vue'

const { bookedRooms, addRoom, removeRoom, setGuestsData } = inject(
  roomsKey,
) as RoomsProvide
</script>

<template>
  <h2 class="header-2">Количество гостей</h2>
  <div v-for="(room, index) in bookedRooms" class="room" :key="index">
    <div class="room-head">
      <h3 v-if="bookedRooms.length > 1" class="header-3">
        Номер {{ index + 1 }}
      </h3>
      <div
        v-if="index > 0"
        class="room-head__delete"
        @click="() => removeRoom(index)"
      >
        <DeleteOutlined :style="{ color: 'var(--red-color)' }" />
        <p class="room-head__delete-text">удалить</p>
      </div>
    </div>
    <GuestsCount
      :key="index"
      :index="index"
      :guestsData="room.guests"
      @onChange="setGuestsData"
    />
  </div>
  <AButton
    class="bold-text"
    type="primary"
    size="large"
    :style="{ width: '100%', marginTop: '24px' }"
    @click="
      addRoom({
        guests: {
          adults: 1,
          childrenFour: 0,
          childrenTen: 0,
          childrenSeventeen: 0,
        },
        roomId: null,
      })
    "
  >
    Добавить номер
  </AButton>
</template>

<style scoped>
.room {
  margin: 24px 0 0 0;
}
.room-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 18px 0;
}
.room-head__delete {
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: dashed 1px var(--red-color);
}
.room-head__delete-text {
  color: var(--red-color);
  margin: 0 0 0 5px;
}
</style>
