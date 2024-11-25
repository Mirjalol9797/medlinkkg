<script setup>
const settingsStore = useSettingsStore();
</script>

<template>
  <UiHModal width="720" classModal="rounded-lg" id="choose-your-city">
    <template #modal_content>
      <div
        class="flex-center-between text-[#515459] bg-custom-gradient py-5 pl-6 pr-5 text-xl font-semibold rounded-t-lg"
      >
        <div>Выберите свой город</div>
        <button @click="settingsStore.howDoesItWorkModal = false">
          <img src="/icons/modal/close.svg" alt="close" />
        </button>
      </div>
      <div class="py-5 search-input flex-center border-b border-[#ececec]">
        <UiHInput label="Начните вводить название, а мы подскажем" />
        <img
          src="../../public/icons/mainPage/search.svg"
          alt="search"
          class="w-5 mr-5"
        />
      </div>
      <div class="px-6 py-10">
        <div class="grid grid-cols-3 gap-4 mb-6 font-semibold text-xl">
          <nuxt-link to="/"> Бишкек </nuxt-link>
          <nuxt-link to="/"> Бишкек </nuxt-link>
        </div>
        <ul class="columns-3 mx-[-12px]">
          <li v-for="item in 10" :key="item" class="text-base">
            <nuxt-link
              to="/"
              class="text-[#515459] p-3 block rounded-lg hover:bg-[#ecf1fb]"
            >
              Бишкек
            </nuxt-link>
          </li>
        </ul>
      </div>
    </template>
  </UiHModal>
</template>

<style lang="scss">
#choose-your-city {
  .search-input {
    .form-item {
      &__label {
        color: #c7d3d9;
        font-size: 20px;
      }
      input {
        padding: 8px 24px 0;
        font-size: 18px;
        color: #000;
      }
    }
  }
}
</style>
