<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  clinicSpecialties: {
    type: Array,
    default: [],
  },
});

// Функция для группировки данных
const groupedData = computed(() => {
  // Сортируем массив по алфавиту
  const sortedData = props.clinicSpecialties.sort((a, b) =>
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
</script>
<template>
  <div class="py-14">
    <div class="site-container">
      <h2 class="main-page-title">Специальности клиник</h2>

      <div class="clinic-specialties">
        <ul
          :data-first-letter="letter"
          class="clinic-specialties__wrap"
          v-for="(items, letter) in groupedData"
          :key="letter"
        >
          <li
            class="clinic-specialties__item"
            v-for="item in items"
            :key="item.id"
          >
            <nuxt-link
              to="/"
              :title="item.name_ru"
              class="clinic-specialties__link"
            >
              <span class="pr-2"> {{ item.name_ru }}</span>
              <span class="clinic-specialties__count">{{
                item.clinic_count
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="hidden 640:flex 640:justify-center 640:mt-6">
        <nuxt-link
          :to="localePath(`/clinics`)"
          class="inline-block bg-[#f39] px-6 py-3 rounded-md text-white text-sm font-semibold text-center"
        >
          Посмотреть все
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clinic-specialties {
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

@media (max-width: 640px) {
  .clinic-specialties {
    column-gap: 40px;
    height: 260px;
    overflow: hidden;
  }
}

@media (max-width: 480px) {
  .clinic-specialties {
    column-gap: 40px;
    height: 260px;
    overflow: hidden;

    &__wrap {
      display: block;
      margin-bottom: 25px;
      padding-top: 30px;
    }
  }
}
</style>
