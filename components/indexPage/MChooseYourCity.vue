<script setup>
const settingsStore = useSettingsStore();
</script>

<template>
  <UiHModal width="720" classModal="rounded-lg">
    <template #modal_content>
      <div
        class="flex-center-between text-[#515459] bg-custom-gradient py-5 pl-10 pr-5 text-xl font-medium rounded-t-lg"
      >
        <div>Выберите свой город</div>
        <button @click="settingsStore.howDoesItWorkModal = false">
          <img src="/icons/modal/close.svg" alt="close" />
        </button>
      </div>
      <div class="py-5">
        <UiHInput label="Начните вводить название, а мы подскажем" />
      </div>
      <div></div>

      <div></div>
    </template>
  </UiHModal>
</template>

<style lang="scss" scoped></style>
