<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
</script>
<template>
  <div
    class="py-14 flex-center gap-5 max-w-[70%] mx-auto 1024:flex-col 1024:gap-8 1024:max-w-[40%] 640:!max-w-full"
  >
    <button
      class="hidden bg-[#f39] px-6 py-3 rounded-md text-white text-lg font-bold 1024:block 1024:w-full"
    >
      Добавить клинику
    </button>

    <UiHInput
      label="Врач, клиника, услуга, препараты"
      class="border border-[#6486fa] rounded-lg font-semibold"
    />
    <UiHInput
      label="Район, округ, город, улица"
      class="border border-[#6486fa] rounded-lg font-semibold"
    />
    <button
      class="py-3 px-7 text-white font-semibold text-lg bg-[#6486fa] rounded-lg 1024:w-full"
    >
      Найти
    </button>
  </div>
</template>
<style lang="scss" scoped></style>
