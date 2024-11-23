<script setup></script>
<template>
  <div class="py-14">
    <div class="site-container">
      <div class="main-page-title">Специальности врачей</div>
      <div class="clinic-specialties">
        <ul data-first-letter="А" class="clinic-specialties__wrap">
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
        </ul>
        <ul data-first-letter="Б" class="clinic-specialties__wrap">
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
        </ul>
        <ul data-first-letter="B" class="clinic-specialties__wrap">
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
        </ul>
        <ul data-first-letter="Г" class="clinic-specialties__wrap">
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
        </ul>
        <ul data-first-letter="Д" class="clinic-specialties__wrap">
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
          <li class="clinic-specialties__item">
            <nuxt-link
              to="/"
              title="Абдоминальный хирург"
              class="clinic-specialties__link"
            >
              <span>Абдоминальный хирург</span>
              <span class="clinic-specialties__count">200</span>
            </nuxt-link>
          </li>
        </ul>
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
  }
  &__count {
    color: #828ea5;
  }
}
</style>
