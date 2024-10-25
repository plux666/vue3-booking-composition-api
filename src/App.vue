<script setup lang="ts">
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'
import './styles/main.css'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Booking from '@/components/Booking/Booking.vue'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#46B894',
      },
    }"
  >
    <div class="main">
      <div class="mobile-wrap">
        <Header />
        <div class="content">
          <Booking />
        </div>
        <Footer />
      </div>
    </div>
  </a-config-provider>
</template>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  background-color: #ebeef0;
}

.mobile-wrap {
  height: 760px;
  width: 390px;
  border: 2px gray solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
</style>
