<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
</script>
<template>
  <div class="py-14 flex-center gap-5 max-w-[70%] mx-auto">
    <UiHInput
      label="Врач, клиника, услуга, препараты"
      class="border border-[#6486fa] rounded-lg font-semibold"
    />
    <UiHInput
      label="Район, округ, город, улица"
      class="border border-[#6486fa] rounded-lg font-semibold"
    />
    <button
      class="py-3 px-7 text-white font-semibold text-lg bg-[#6486fa] rounded-lg"
    >
      Найти
    </button>
  </div>
</template>
<style lang="scss" scoped></style>
