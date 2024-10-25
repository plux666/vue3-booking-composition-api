<script setup lang="ts">
import { h } from 'vue'
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons-vue'

import {AvailableRoom} from "@/types";


const props = defineProps<{ room: AvailableRoom; chosen: boolean }>()

const emit = defineEmits<{
  choose: [roomId: string | number]
}>()
</script>

<template>
  <div :class="{room: true, 'kv-card': true, 'room--chosen': props.chosen}">
    <ACarousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <img v-for="pic in room.pictures" :src="`https://${pic}`" alt="none" />
    </ACarousel>
    <div v-html="room.about" />
      <AButton
        class="bold-text"
        v-if="props.chosen"
        type="primary"
        size="large"
        :style="{ width: '100%' }"
        :icon="h(CheckOutlined)"
        @click="$emit('choose', room.rid)"
      >
        Номер Выбран
      </AButton>
      <AButton
        v-else
        class="bold-text"
        type="primary"
        size="large"
        :style="{ width: '100%' }"
        @click="$emit('choose', room.rid)"
      >
        Выбрать
      </AButton>
  </div>
</template>

<style scoped>
.room {
  margin: 16px 0 0 0;
}

.room--chosen {
  border: 3px solid var(--primary-color);
}

:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
