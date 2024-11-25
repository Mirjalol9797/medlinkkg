<script setup>
import { onMounted } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const settingsStore = useSettingsStore();

if (process.client) {
  // Асинхронная загрузка gtag.js
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-T95R35MYTD";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-T95R35MYTD");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Асинхронная загрузка Yandex.Metrika
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.ym =
      window.ym ||
      function () {
        (window.ym.a = window.ym.a || []).push(arguments);
      };
    ym.l = 1 * new Date();

    // Инициализация Метрики
    ym(99020964, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  };

  // Дополнительно: Фикс для <noscript>
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `
    <div><img src="https://mc.yandex.ru/watch/99020964" style="position:absolute; left:-9999px;" alt="" /></div>
  `;
  document.body.appendChild(noscript);
}

function siteScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollElem = document.querySelector(".site-scroll-top");

    if (scrollElem) {
      if (document.documentElement.scrollTop > 400) {
        scrollElem.style.opacity = "1";
        scrollElem.style.zIndex = "10";
      } else {
        scrollElem.style.opacity = "0";
        scrollElem.style.zIndex = "-1";
      }
    }
  });
});
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <NuxtPage :key="route.fullPath" />
  </div>
  <LayoutFooter />

  <UiHLoader v-if="settingsStore.isLoader" />

  <div class="site-scroll-top" @click="siteScrollTop">
    <img
      src="/icons/general/scroll-top.svg"
      alt="scroll-top"
      width="24px"
      height="24px"
    />
  </div>
</template>

<style scoped></style>
