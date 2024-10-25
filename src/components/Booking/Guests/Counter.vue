<script setup lang="ts">
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  count: number
}>()

const emits = defineEmits<{
  onAdd: undefined
  onRemove: undefined
}>()
</script>

<template>
  <div class="counter">
    <MinusCircleOutlined
      :style="{ fontSize: '23px', color: 'var(--text-paragraph-200)' }"
      @click="props.count && $emit('onRemove')"
    />
    {{ props.count }}
    <PlusCircleOutlined :style="{ fontSize: '23px', color: 'var(--text-paragraph-200)' }" @click="$emit('onAdd')" />
  </div>
</template>

<style scoped>
.counter {
  width: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
