<script setup></script>

<template>
  <footer class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <div class="flex gap-16 justify-between">
        <div class="flex gap-10">
          <div class="w-[120px]">
            <img src="/site-logo.png" alt="site-logo" />
          </div>
          <ul class="flex flex-wrap gap-x-4 gap-y-3 max-w-[580px]">
            <li v-for="item in 8" :key="item">
              <nuxt-link to="/">Диагностика</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-right">
          Увидели ошибку — <br />
          сообщите нам, нажав Ctrl+Enter
        </div>
      </div>
    </div>
  </footer>
</template>
