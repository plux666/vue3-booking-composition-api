<script setup lang="ts">
import { LeftOutlined, SettingFilled, BellFilled } from '@ant-design/icons-vue'
</script>

<template>
  <div class="header">
    <div class="header__left-slot">
      <div class="header__go-back"><LeftOutlined /></div>
      <img
        class="header__avatar"
        src="https://i.pinimg.com/736x/45/d4/a3/45d4a3411dbbe7160c9a29070afb7eff.jpg"
        alt=":c"
        height="50"
        width="50"
      />
      <div class="header__name">
        <p>Алёна Котейкина</p>
      </div>
    </div>
    <div class="header__right-slot">
      <div class="header__settings">
        <SettingFilled :style="{ fontSize: '24px', color: '#BBBCBD' }" />
      </div>
      <div class="header__notifications">
        <BellFilled :style="{ fontSize: '24px', color: '#BBBCBD' }" />
      </div>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  height: 83px;
  box-shadow: 0 4px 8px 0 #0000000a;
  background-color: #f3f5f6;
  border: 0;
  border-radius: 16px;
}

.header__left-slot {
  display: flex;
  align-items: center;
}

.header__right-slot {
  display: flex;
  gap: 24px;
}

.header__avatar {
  border: 0 solid;
  border-radius: 25px;
  margin: 0 10px;
}

.header__name {
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
}
</style>
