<script setup>
import { onMounted } from "vue";

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
  <div class="site-scroll-top" @click="siteScrollTop">
    <img
      src="/icons/general/scroll-top.svg"
      alt="scroll-top"
      width="24px"
      height="24px"
    />
  </div>
</template>
<style lang="scss"></style>
