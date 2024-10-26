<script setup lang="ts">
import type { RoomGuests } from '@/types'

import Counter from '@/components/Booking/Guests/Counter.vue'

const { index, guestsData } = defineProps<{
  index: number
  guestsData: RoomGuests
}>()

const emit = defineEmits<{
  (e: 'onChange', index: number, data: RoomGuests): void
}>()

const onChangeIncrement = (type: keyof RoomGuests) => {
  const newData = { ...guestsData }

  newData[type]++
  emit('onChange', index, newData)
}

const onChangeDecrement = (type: keyof RoomGuests) => {
  const newData = { ...guestsData }

  newData[type]--
  emit('onChange', index, newData)
}
</script>

<template>
  <div class="guests-add">
    <div class="guests-add__adults kv-card">
      <p class="guests-add__type-header">Взрослые</p>
      <div class="guests-add__counter">
        <Counter
          :count="guestsData.adults"
          @onAdd="() => onChangeIncrement('adults')"
          @onRemove="() => guestsData.adults > 1 && onChangeDecrement('adults')"
        />
      </div>
    </div>
    <div class="guests-add__children kv-card">
      <p class="guests-add__type-header">Дети</p>
      <div class="guests-add__children-item">
        <p class="guests-add__children-age">0-4 Года</p>
        <Counter
          :count="guestsData.childrenFour"
          @onAdd="() => onChangeIncrement('childrenFour')"
          @onRemove="() => onChangeDecrement('childrenFour')"
        />
      </div>
      <div class="guests-add__children-item">
        <p class="guests-add__children-age">5-10 лет</p>
        <Counter
          :count="guestsData.childrenTen"
          @onAdd="() => onChangeIncrement('childrenTen')"
          @onRemove="() => onChangeDecrement('childrenTen')"
        />
      </div>
      <div class="guests-add__children-item">
        <p class="guests-add__children-age">11-17 лет</p>
        <Counter
          :count="guestsData.childrenSeventeen"
          @onAdd="() => onChangeIncrement('childrenSeventeen')"
          @onRemove="() => onChangeDecrement('childrenSeventeen')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guests-add__adults {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 0 16px 0;
}
.guests-add__children-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 16px 0 0 0;
}

.guests-add__type-header {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin: 0;
}

.guests-add__children-age {
  color: var(--text-paragraph-200);
  margin: 0;
}
</style>
