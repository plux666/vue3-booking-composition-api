<script setup lang="ts">
import ArrowLongIcon from '@/components/ArrowLongIcon.vue'
</script>

<template>
  <div>
    <h2 class="header-2 buyout-header">Забронировать программу</h2>
    <div class="option kv-card" @click="$emit('onBuyoutPick', 'self')">
      <h4 class="option__name">Для себя</h4>
      <p class="option__description">
        Запланируйте поездку в клинику для себя и своей семьи
      </p>
      <div class="option__footer">
        <div>Начать</div>
        <div><ArrowLongIcon /></div>
      </div>
    </div>
    <div class="option kv-card" @click="$emit('onBuyoutPick', 'gift')">
      <h4 class="option__name">В подарок</h4>
      <p class="option__description">
        Оформите подарочный сертификат на программу, сумму или услугу
      </p>
      <div class="option__footer">
        <div>Начать</div>
        <div>
          <ArrowLongIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.option {
  background-color: white;
  cursor: pointer;
  margin: 16px 0;
  gap: 8px;
}

.buyout-header {
  margin-bottom: 32px;
}

.option__name {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin: 0 0 8px 0;
}

.option__description {
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}

.option__footer {
  display: flex;
  justify-content: space-between;
  color: var(--primary-color);
}
</style>
