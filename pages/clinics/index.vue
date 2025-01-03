<script setup>
import { onMounted } from "vue";
const getClinicSpecialtiesApi = useClinicSpecialties();

// fetch api
const { data: dataClinicSpecialties } = useAsyncData("ClinicSpecialties", () =>
  getClinicSpecialtiesApi.getClinicSpecialties()
);

// Функция для группировки данных
const groupedData = computed(() => {
  // Сортируем массив по алфавиту
  const sortedData = dataClinicSpecialties.value?.data.sort((a, b) =>
    a.name_ru.localeCompare(b.name_ru, "ru")
  );

  // Группируем по первой букве
  return sortedData.reduce((acc, item) => {
    const firstLetter = item.name_ru[0].toUpperCase(); // Первая буква
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});
});

// AdFox initialization
onMounted(() => {
  if (window?.yaContextCb) {
    window.yaContextCb.push(() => {
      Ya.adfoxCode.create({
        ownerId: 11643569,
        containerId: "adfox_173519165622543363",
        params: {
          pp: "h",
          ps: "imcq",
          p2: "p",
          pk: "side banner medlink clinics",
        },
      });
    });
  }
});
</script>

<template>
  <div class="clinics-page py-14">
    <div class="site-container">
      <div
        class="w-full h-[300px] hidden mb-10 border border-[#000] 1024:block"
      ></div>
      <div class="flex gap-2 mb-6 font-semibold 480:text-xs 480:mb-4">
        <nuxt-link to="/" class="font-medium text-[#3f78c6]" title="Medlink.kg">
          Medlink.kg
        </nuxt-link>
        <img
          src="@/public/icons/general/arrow-left-black.svg"
          alt="arrow"
          class="w-4"
        />
        <span>Клиники</span>
      </div>

      <h1 class="h1-title">Медицинские центры и клиники в Бишкеке</h1>

      <div class="flex gap-6">
        <div class="list-container">
          <ul
            :data-first-letter="letter"
            class="list-container__wrap"
            v-for="(items, letter) in groupedData"
            :key="letter"
          >
            <li
              class="list-container__item"
              v-for="item in items"
              :key="item.id"
            >
              <nuxt-link
                to="/"
                :title="item.name_ru"
                class="list-container__link"
              >
                <span class="pr-2"> {{ item.name_ru }}</span>
                <span class="list-container__count">{{
                  item.clinic_count
                }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div
          class="min-w-[300px] max-w-[300px] h-[500px] border border-[#000] 1024:hidden"
        >
          <div id="adfox_173519165622543363"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-container {
  column-gap: 40px;
  column-width: 160px;

  &__wrap {
    margin-top: 0;
    margin-bottom: 55px;
    padding: 40px 0 0;
    position: relative;
    display: inline-block;

    &:before {
      font-size: 18px;
      line-height: 20px;
      font-weight: 400;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: 600;
      content: attr(data-first-letter);
    }
  }
  &__item {
    margin-bottom: 8px;
    color: #0094e1;
  }
  &__link {
    word-wrap: break-word;
    color: #008bd8;
    &:hover {
      color: #0021d9;
    }
  }
  &__count {
    color: #828ea5;
  }
}

@media (max-width: 480px) {
  .list-container {
    &__wrap {
      display: block;
    }
  }
}
</style>
