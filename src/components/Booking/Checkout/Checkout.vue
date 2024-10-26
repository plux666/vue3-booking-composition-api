<script setup lang="ts">
import { inject } from 'vue'

import { guestsDescription } from '../../__shared/guestsDescription'
import { roomsKey, type RoomsProvide } from '../roomsProvideKey'

const { bookedRooms } = inject(roomsKey) as RoomsProvide
</script>

<template>
  <div class="checkout">
    <h2 class="header-2">Проверьте детали бронирования</h2>
    <div class="checkout__info-card kv-card">
      <h4>Общая информация</h4>
      <div class="checkout__info-item">
        <p class="checkout__info-type">Дата заезда</p>
        <p class="checkout__info-value">10.08.2024</p>
      </div>
      <div class="checkout__info-item">
        <p class="checkout__info-type">Дата выезда</p>
        <p class="checkout__info-value">24.08.2024</p>
      </div>
      <div v-for="(room, index) in bookedRooms" :key="index">
        <h4>Номер {{ index + 1 }}</h4>
        <div class="checkout__info-item">
          <p class="checkout__info-type">Номер</p>
          <p class="checkout__info-value">Идентификатор: {{ room.roomId }}</p>
        </div>
        <div class="checkout__info-item">
          <p class="checkout__info-type">Количество гостей</p>
          <p class="checkout__info-value">
            {{ guestsDescription(room.guests) }}
          </p>
        </div>
      </div>
      <div class="checkout__info-item">
        <p class="checkout__info-type">Стоимость</p>
        <p class="checkout__info-value">600 000 руб.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout__info-item {
  display: flex;
  justify-content: space-between;
}
.checkout__info-type {
  color: var(--text-paragraph-200);
}
.checkout__info-value {
  max-width: 160px;
  text-align: right;
  color: var(--text-paragraph);
}
</style>
