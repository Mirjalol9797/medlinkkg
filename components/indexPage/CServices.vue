<script setup>
const emit = defineEmits(["openChooseYourCity"]);

function openChooseYourCity(e) {
  emit("openChooseYourCity", e);
}
</script>
<template>
  <div class="mb-14 main-page-services">
    <h1 class="main-page-title">
      Забота о вашем здоровье - ищите <br />
      клинику, врача, лекарства в
      <span @click="openChooseYourCity">Бишкеке</span>
    </h1>
    <div class="services">
      <nuxt-link
        :to="localePath(`/doctors`)"
        class="col-span-2 services__item bg-[#f3f3f3] rounded-lg py-2 px-4 pr-2 flex justify-between gap-2 hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-1"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Врачи</div>
          <div>Мы поможем вам найти врачей</div>
        </div>
        <div class="w-[100px]">
          <img src="@/public/icons/mainPage/services/doc.png" alt="doc" />
        </div>
      </nuxt-link>
      <div
        class="services__item bg-[#f3f3f3] rounded-lg py-2 px-2 relative hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-3"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Диагностика</div>
          <div>МРТ, МСКТ, УЗИ, ЭХОКГ, Рентген</div>
        </div>
        <img
          src="@/public/icons/mainPage/services/diag.png"
          alt="diag"
          class="w-[50px] absolute bottom-1 right-1"
        />
      </div>
      <div
        class="services__item bg-[#f3f3f3] rounded-lg py-2 px-2 relative hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-4"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Анализы</div>
          <div>Общеклиническиеи прочие анализы</div>
        </div>
        <img
          src="@/public/icons/mainPage/services/analiz.png"
          alt="diag"
          class="w-[50px] absolute bottom-1 right-1"
        />
      </div>
      <div
        class="col-span-2 services__item bg-[#f3f3f3] rounded-lg py-2 px-4 pr-2 flex justify-between gap-4 hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-5"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Болезни</div>
          <div>
            Рассказываем о болезнях,их симптомах, методах лечения и
            потенциальных рисках
          </div>
        </div>
        <div class="min-w-[90px] max-w-[90px] self-end">
          <img src="@/public/icons/mainPage/services/illnes.png" alt="illnes" />
        </div>
      </div>
      <nuxt-link
        :to="localePath(`/clinics`)"
        class="col-span-2 services__item bg-[#f3f3f3] rounded-lg py-2 px-4 pr-2 flex justify-between gap-4 hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-2"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Клиники</div>
          <div>
            Подберем клиники, готовые предложить условия, которые подходят
            именно вам
          </div>
        </div>
        <div class="min-w-[90px] max-w-[90px] self-end">
          <img
            src="@/public/icons/mainPage/services/hospital.png"
            alt="hospital"
          />
        </div>
      </nuxt-link>
      <div
        class="services__item bg-[#f3f3f3] rounded-lg py-2 px-2 relative hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-6"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Услуги</div>
          <div>
            Медицинские услугии <br />
            и не только
          </div>
        </div>
        <img
          src="@/public/icons/mainPage/services/usligi.png"
          alt="usligi"
          class="w-[50px] absolute bottom-1 right-1"
        />
      </div>
      <div
        class="services__item bg-[#f3f3f3] rounded-lg py-2 px-2 relative hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-7"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Лекарства</div>
          <div>
            Препараты <br />
            и не только
          </div>
        </div>
        <img
          src="@/public/icons/mainPage/services/drug.png"
          alt="drug"
          class="w-[50px] absolute bottom-1 right-1"
        />
      </div>
      <div
        class="col-span-2 services__item bg-[#f3f3f3] rounded-lg py-2 px-4 pr-2 flex justify-between gap-4 hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_20px_0_#3d3f5533] 640:order-8"
      >
        <div class="services__text">
          <div class="font-medium text-lg 768:text-base">Симптомы</div>
          <div>
            Рассказываем о симптомах, проявлениях и возможных последствиях
          </div>
        </div>
        <div class="min-w-[90px] max-w-[90px] self-end">
          <img
            src="@/public/icons/mainPage/services/symptoms.png"
            alt="symptoms"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-page-services {
  .services {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      &__item {
        display: flex;
        justify-content: space-between;
        align-items: start;
        img {
          position: relative;
          top: 0;
        }
      }
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));

      &__item {
        grid-column: 1;
        padding: 8px;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          right: 8px;
          width: 50px;
          transform: translateY(-50%);
        }
      }

      &__text {
        max-width: 85%;
      }
    }
  }
}
</style>
