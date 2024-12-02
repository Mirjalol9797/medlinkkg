<script setup>
const settingsStore = useSettingsStore();
const props = defineProps({
  title: {
    type: String,
    default:
      "Сообщение отправлено. В ближайшее время один из наших менеджеров свяжется с вами.",
  },
  btnText: {
    type: String,
    default: "OK",
  },
});
</script>

<template>
  <UiHModal width="480" classModal="rounded-lg p-6 py-8">
    <template #modal_content>
      <button
        class="absolute top-4 right-4"
        @click="settingsStore.notificationModal = false"
      >
        <img src="/icons/modal/close.svg" alt="close" />
      </button>
      <div class="font-medium text-lg mb-6 480:text-base">
        {{ title }}
      </div>
      <button
        @click="settingsStore.notificationModal = false"
        class="bg-[#f39] text-white rounded-lg py-3 px-6 mx-auto flex font-bold"
      >
        {{ btnText }}
      </button>
    </template>
  </UiHModal>
</template>

<style lang="scss" scoped></style>
