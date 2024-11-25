<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// components
import CSearchHeader from "~/components/indexPage/CSearchHeader.vue";
import CServices from "~/components/indexPage/CServices.vue";
import CPopularDocs from "~/components/indexPage/CPopularDocs.vue";
import CClinicSpecialties from "~/components/indexPage/СClinicSpecialties.vue";
import CPopularClinic from "~/components/indexPage/CPopularClinic.vue";
import CDoctorsSpecialties from "~/components/indexPage/СDoctorsSpecialties.vue";
import CDiagnostics from "~/components/indexPage/СDiagnostics.vue";
import CReviews from "../../components/indexPage/СReviews.vue";
import MChooseYourCity from "~/components/indexPage/MChooseYourCity.vue";
// apiCReviews
const { t } = useI18n();
const route = useRoute();
const settingsStore = useSettingsStore();

// banner api
const { data: newsBanner } = useAsyncData("banner", () =>
  getNewsBannerApi.getNewsBanner()
);
</script>

<template>
  <div class="site-container">
    <CSearchHeader />
    <CServices @openChooseYourCity="settingsStore.mChooseYourCity = true" />
  </div>
  <CPopularDocs />
  <CClinicSpecialties />
  <CPopularClinic @openChooseYourCity="settingsStore.mChooseYourCity = true" />
  <CDoctorsSpecialties />
  <CDiagnostics @openChooseYourCity="settingsStore.mChooseYourCity = true" />
  <CReviews />
  <MChooseYourCity v-if="settingsStore.mChooseYourCity" />
</template>

<style lang="scss" scoped></style>
