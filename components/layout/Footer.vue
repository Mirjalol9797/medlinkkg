<script setup></script>

<template>
  <footer class="bg-[#f3f3f3] py-10 footer">
    <div class="site-container">
      <div class="flex justify-between footer-wrap">
        <ul class="footer-nav">
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link border-b border-black"
              >Добавить клинику</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="footer-nav__link border-b border-black"
              >Добавить врача</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link
              :to="localePath(`/user-agreement`)"
              class="footer-nav__link"
              >Пользовательское соглашение</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link
              :to="localePath(`/privacy-policy`)"
              class="footer-nav__link"
              >Политика конфиденциальности</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link
              :to="localePath(`/personal-data`)"
              class="footer-nav__link"
              >Обработка персональных данных</nuxt-link
            >
          </li>
        </ul>
        <ul class="footer-nav">
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Карта сайта</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Врачи</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Клиники</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Услуги</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Регионы</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Города</nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link to="/" class="footer-nav__link">Районы</nuxt-link>
          </li>
        </ul>
        <ul class="footer-nav">
          <li class="footer-nav__item">
            <nuxt-link :to="localePath(`/about`)" class="footer-nav__link">
              О проекте
            </nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link :to="localePath('/contact')" class="footer-nav__link"
              >Контакты</nuxt-link
            >
          </li>
          <li class="footer-nav__item font-semibold">
            <span>Социальные сети</span>
            <span class="flex-center gap-3 mt-2">
              <nuxt-link to="https://t.me/medlinkkg" rel="nofollow">
                <img
                  src="@/public/icons/mainPage/social/telegam.png"
                  alt="telegam"
                  class="w-6"
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  src="@/public/icons/mainPage/social/instagram.png"
                  alt="instagram"
                  class="w-[22px]"
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  src="@/public/icons/mainPage/social/whatsap.png"
                  alt="whatsap"
                  class="w-[22px]"
                />
              </nuxt-link>
            </span>
          </li>
          <li class="footer-nav__item font-semibold">
            <span>E-mail: </span
            ><a href="mailto:info@medlink.kg" class="text-[#999]"
              >info@medlink.kg</a
            >
          </li>
        </ul>
        <ul class="footer-nav">
          <li class="footer-nav__item !font-semibold !mb-6 text-lg">Справка</li>
          <li class="footer-nav__item">
            <nuxt-link
              :to="localePath(`/to-the-patient`)"
              class="footer-nav__link"
            >
              Пациентам
            </nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link
              :to="localePath(`/to-the-doctor`)"
              class="footer-nav__link"
            >
              Врачам
            </nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link
              :to="localePath(`/help-for-clinics`)"
              class="footer-nav__link"
            >
              Клиникам
            </nuxt-link>
          </li>
          <li class="footer-nav__item">
            <nuxt-link
              :to="localePath(`/publication`)"
              class="footer-nav__link"
            >
              Публикация материалов
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex-center gap-4">
        <div class="min-w-14">
          <img
            src="@/public/icons/mainPage/footer_18.png"
            alt="footer_18"
            class="w-14"
          />
        </div>
        <div class="text-[#999] font-medium">
          <div class="text-lg mb-1">
            © Medlink.kg - Все клиники и медицинские центры Бишкека
          </div>
          <div>
            Обращаем ваше внимание, что данный веб-ресурс предоставляется
            исключительно в информационных целях и не является публичной
            офертой. Информация, представленная на сайте, не может быть
            использована для постановки диагноза, назначения лечения и не
            заменяет прием врача.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-wrap {
    margin: 0 -20px 50px;
  }
  &-nav {
    padding: 0 20px;
    &__item {
      margin-bottom: 16px;
    }
    &__link {
      font-weight: 600;
      &:hover {
        border-bottom: 1px solid #69f;
        color: #69f;
      }
    }
  }
}
</style>
