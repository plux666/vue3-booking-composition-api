<script setup></script>

<template>
  <div class="footer">
    <a href="/" class="footer__nav-link">Главная</a>
    <a href="/" class="footer__nav-link">Расписание</a>
    <a href="/" class="footer__nav-link">Анализы</a>
    <a href="/" class="footer__nav-link">Консультация</a>
    <a href="/" class="footer__nav-link">Счет</a>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
}

.footer__nav-link {
  font-style: normal;
  color: black;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
</style>
